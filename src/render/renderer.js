import * as utils from '../utils';
import * as dom from '../dom';
import { parseTpl, isVText, isVComment, isVElm } from '../tpl';
import { Local } from '../core';
import { Binding } from './binding';
import { M_CMP_CLASS } from '../css';

// Window Events
// case 'on-load':
// case 'on-unload':
// Form Element Events
// case 'on-change':
// case 'on-submit':
// case 'on-reset':
// case 'on-select':
// case 'on-blur':
// case 'on-focus':
// Image Events
// case 'on-abort':
// Keyboard Events
// case 'on-keydown':
// case 'on-keypress':
// case 'on-keyup':
// Mouse Events
// case 'on-click':
// case 'on-dblclick':
// case 'on-mousedown':
// case 'on-mousemove':
// case 'on-mouseout':
// case 'on-mouseover':
// case 'on-mouseup':
var eventText = 'load unload change submit reset select blur focus abort keydown keypress keyup click dblclick mousedown mousemove mouseout mouseover mouseup';
var domEvents = eventText.split(' ');

export class Renderer {
    constructor(scope) {
        this.scope = scope;
        this.buffer = {
            components: {},
            directives: {}
        }
    }

    createBinding(text, context) {
        return new Binding(this.scope, text, context.locals);
    }

    render(tpl, locals) {
        var fragment = document.createDocumentFragment();

        var vnodes = parseTpl(tpl);

        var context = {
            locals: locals,
            directives: []
        };

        this.compileNodes(vnodes, context);

        // context.directives.forEach(directive => {
        //     directive.$prelink();
        // });

        this.linkNodes(vnodes, context).forEach(elm => {
            fragment.appendChild(elm);
        });

        context.directives.forEach(directive => {
            directive.$postlink();
        });

        return fragment;
    }

    compileNodes(vnodes, context) {
        vnodes.forEach(vnode => {
            this.compileNode(vnode, context);
        });
    }

    compileNode(vnode, context) {
        if (isVText(vnode)) {
            this.compileText(vnode, context);
        }
        else if(isVComment(vnode, context)){
            this.compileComment(vnode, context);
        }
        else {
            this.compileElm(vnode, context);
        }
    }

    linkNodes(vnodes, context) {
        return vnodes.map(vnode => {
            return this.linkNode(vnode, context);
        });
    }

    linkNode(vnode, context) {
        if (isVText(vnode)) {
            return this.linkText(vnode, context);
        }

        if(isVComment(vnode, context)) {
            return this.linkComment(vnode, context);
        }

        return this.linkElm(vnode, context);
    }

    compileElm(velm, context) {
        velm.nodeData.component = this.recognizeComponent(velm);

        var directives = [];
        var customLinker = velm.vattrs.some(vattr => {
            this.compileAttr(vattr, context);

            if (vattr.nodeData.directive != null) {
                directives.push(vattr.nodeData.directive);
                velm.nodeData.linker = vattr.nodeData.linker;
                return velm.nodeData.linker != null;
            }

            return false;
        });

        // sort directive according to its priority
        utils.orderBy(directives, function (directive) {
            return directive.$priority;
        }).forEach(directive => {
            context.directives.push(directive);
        });

        velm.nodeData.directives = directives;

        // directive defines custom linker for this virtual node, render engine will not render it according to default behavior
        if (customLinker) {
            return;
        }

        if (velm.nodeData.component) {
            velm.nodeData.slots = this.seekSlot(velm);
        }
        else {
            this.compileNodes(velm.childNodes, context);
        }
    }

    compileAttr(vattr, context) {
        var binding;
        
        if(vattr.nodeValue != null) {
            binding = this.createBinding(vattr.nodeValue, context);
            vattr.nodeData.binding = binding;
        }

        if (vattr.nodeName.startsWith('@')) {
            vattr.nodeData.isEvent = true;
            binding && (binding.logical = true);
            vattr.nodeData.name = vattr.nodeName.substr(1);
            vattr.nodeData.isDomEvent = utils.contains(domEvents, vattr.nodeData.name);
        }
        else if (vattr.nodeName.startsWith(':')) {
            binding && (binding.isExp = true);
            vattr.nodeData.name = vattr.nodeName.substr(1);
        }
        else if (vattr.nodeName.startsWith('*')) {
            vattr.nodeData.directive = true;
            binding && (binding.isExp = true);
            vattr.nodeData.name = vattr.nodeName.substr(1);
        }
        else {
            vattr.nodeData.name = vattr.nodeName;
        }

        if (vattr.nodeData.directive) {
            var directive = this.recognizeDirective(vattr);

            if (directive) {
                vattr.nodeData.directive = this.scope.$newDirective(directive);
                vattr.nodeData.directive.$$vattr = vattr;

                if(binding) {
                    binding.assignment = vattr.nodeData.directive.$assignment;
                }

                if (vattr.nodeData.directive.$compile()) {
                    vattr.nodeData.linker = vattr.nodeData.directive;
                    return;
                }
            }
            else {
                throw new Error('directive ' + vattr.nodeData.name + ' is not defined');
            }
        }

        if(!binding) {
            return;
        }

        if (!(vattr.nodeData.isEvent || vattr.nodeData.directive)) {
            var setHtmlAttr = function (value) {
                var elm = vattr.velm.elm;

                if (vattr.nodeData.name.startsWith('style')) {
                    utils.setProperty(elm, vattr.nodeData.name, value);
                }
                else {
                    elm.setAttribute(vattr.nodeData.name, value);
                }
            };

            if (vattr.velm.nodeData.component) {
                binding.registerAutomation(function (value) {
                    if (vattr.velm.nodeData.component.$hasProperty(vattr.nodeData.name)) {
                        vattr.velm.nodeData.component.$setProperty(vattr.nodeData.name, value);
                    }
                    else {
                        setHtmlAttr(value);
                    }
                });
            }
            else {
                binding.registerAutomation(setHtmlAttr);
            }
        }

        binding.compile();
    }

    compileText(vtext, context) {
        vtext.nodeData.binding = this.createBinding(vtext.nodeValue, context);
        vtext.nodeData.binding.registerAutomation(function (value) {
            var elm, newTextNode = document.createTextNode(value);

            if (vtext.parentNode == null) {
                if (vtext.elm != null) {
                    elm = vtext.elm.parentNode;
                }
            }
            else {
                elm = vtext.parentNode.elm;
            }

            if (elm != null) {
                if (vtext.elm == null) {
                    elm.appendChild(newTextNode);
                }
                else {
                    dom.replaceElement(vtext.elm, newTextNode);
                }
            }

            vtext.elm = newTextNode;
        });
        vtext.nodeData.binding.compile();
    }

    compileComment(vcmnt) {

    }

    linkElm(velm) {
        if (velm.nodeData.linker != null) {
            return velm.nodeData.linker.$link();
        }

        velm.elm = document.createElement(velm.nodeName);

        if (velm.nodeData.component) {
            var instance = this.scope.$newComponent(velm.nodeData.component);

            velm.nodeData.component = instance;

            dom.addClass(velm.elm, M_CMP_CLASS);

            velm.vattrs.forEach(vattr => {
                this.linkAttr(vattr);
            });

            instance.$$velm = velm;
            instance.$setSlot(velm.nodeData.slots);
            instance.$render();
            instance.$mount(velm.elm);
        }
        else {
            velm.vattrs.forEach(vattr => {
                this.linkAttr(vattr);
            });

            velm.childNodes.forEach(child => {
                velm.elm.appendChild(this.linkNode(child));
            });
        }

        return velm.elm;
    }

    linkAttr(vattr) {
        var elm = vattr.velm.elm,
            binding = vattr.nodeData.binding;

        if(!binding) {
            return;
        }

        if (vattr.nodeData.isEvent) {
            if (vattr.nodeData.isDomEvent) {
                elm.addEventListener(vattr.nodeData.name, function (e) {
                    binding.compute(new Local(e, elm));
                });
            }
            else if (vattr.velm.nodeData.component) {
                vattr.velm.nodeData.component.$bind(vattr.nodeData.name, function (e) {
                    binding.compute(new Local(e, elm));
                });
            }
        }
        else {
            binding.link();
            binding.patch();
        }

        // register binding change handler after first patch
        if(vattr.nodeData.directive) {
            binding.registerAutomation(function (newValue, oldValue) {
                vattr.nodeData.directive.$change(newValue, oldValue);
            });
        }
    }

    linkText(vtext) {
        vtext.nodeData.binding.link();
        vtext.elm = document.createTextNode(vtext.nodeData.binding.value);
        return vtext.elm;
    }

    linkComment(vcmnt) {
        return document.createComment(vcmnt.nodeValue);
    }

    seekSlot(velm) {
        var slots = {};

        velm.childNodes.forEach(child => {
            if(isVElm(child)) {
                var slot = child.getAttr('slot');

                if(slot) {
                    slots[slot.nodeValue] = child.getInnerTpl();
                }
            }
        });

        return  slots;
    }

    recognizeComponent(velm) {
        var identifier, component,
            name = velm.nodeName,
            buffer = this.buffer.components;

        if (buffer[name] !== undefined) {
            component = buffer[name];
        } else {
            identifier = this.scope.$parseFullName(name);
            component = this.scope.$getComponent(identifier.key, identifier.ns);
            buffer[name] = component;
        }

        // velm.nodeData.identifier = identifier;

        return component;
    }

    recognizeDirective(vattr) {
        var identifier, directive,
            name = vattr.nodeData.name,
            buffer = this.buffer.directives;

        if(buffer[name] !== undefined) {
            directive = buffer[name];
        }
        else {
            identifier = this.scope.$parseFullName(vattr.nodeData.name);
            directive = this.scope.$getDirective(identifier.key, identifier.ns);
            buffer[name] = directive;
        }

        // vattr.nodeData.identifier = identifier;

        return directive;
    }
}