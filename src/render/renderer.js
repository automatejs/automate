import * as utils from '../utils';
import * as dom from '../dom';
import { isVText, isVComment, isVElm } from '../tpl';
import { Local } from '../core';
import { Binding } from './binding';
import { M_CMP_CLASS } from '../css';
import { View } from './view';

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
    get injector() {
        return this.scope.$injector;
    }

    constructor(scope, locals) {
        this.scope = scope;
        this.locals = locals;
        this.parser = scope.$parser;
        this.view = null;
    }

    newBinding(text) {
        var binding = new Binding(this.scope, text, this.locals);
        this.view.bindings.push(binding);
        return binding;
    }

    newComponent(cls) {
        var child = this.injector.createComponent(cls);

        this.scope.$appendChild(child);
        this.view.components.push(child);

        return child;
    }

    newDirective(cls) {
        var directive = this.injector.createDirective(cls);

        directive.$$scope = this.scope;

        return directive;
    }

    recognizeComponent(velm) {
        var component = this.parser.resolveComponent(velm.nodeName);

        // velm.nodeData.identifier = identifier;

        return component;
    }

    recognizeDirective(vattr) {
        var directive = this.parser.resolveDirective(vattr.nodeData.name);

        // vattr.nodeData.identifier = identifier;

        return directive;
    }

    render(template) {
        // must set a root element for directive life cycle "afterLink" hoops
        var container = document.createDocumentFragment();

        this.view = new View();

        this.view.vnodes = this.parser.parseTemplate(template);

        this.compileNodes(this.view.vnodes);

        // this.entity.directives.forEach(directive => directive.$prelink());

        this.linkNodes(this.view.vnodes).forEach(node => container.appendChild(node));

        // call directive life cycle hoops
        this.view.directives.forEach(directive => directive.$postlink());

        // cache the generated elements
        dom.getChildrenOfElement(container).forEach(node => this.view.nodes.push(node));

        return this.view;
    }

    compileNodes(vnodes) {
        vnodes.forEach(vnode => this.compileNode(vnode));
    }

    compileNode(vnode) {
        if (isVText(vnode)) {
            this.compileText(vnode);
        }
        else if(isVComment(vnode)){
            this.compileComment(vnode);
        }
        else {
            this.compileElm(vnode);
        }
    }

    linkNodes(vnodes) {
        return vnodes.map(vnode => this.linkNode(vnode));
    }

    linkNode(vnode) {
        if (isVText(vnode)) {
            return this.linkText(vnode);
        }

        if(isVComment(vnode)) {
            return this.linkComment(vnode);
        }

        return this.linkElm(vnode);
    }

    compileElm(velm) {
        var elmData = velm.nodeData;

        elmData.component = this.recognizeComponent(velm);

        var directives = [];
        var customLinker = velm.vattrs.some(vattr => {
            var attrData = vattr.nodeData;

            this.compileAttr(vattr);

            if (attrData.directive != null) {
                directives.push(attrData.directive);
                elmData.linker = attrData.linker;
                return elmData.linker != null;
            }

            return false;
        });

        // sort directive according to its priority
        utils.orderBy(directives, directive => directive.$priority).forEach(directive => this.view.directives.push(directive));

        elmData.directives = directives;

        // directive defines custom linker for this virtual node, render engine will not render it according to default behavior
        if (customLinker) {
            return;
        }

        if (elmData.component) {
            elmData.slots = this.seekSlot(velm);
        }
        else {
            this.compileNodes(velm.childNodes);
        }
    }

    compileAttr(vattr) {
        var attrName = vattr.nodeName, attrValue = vattr.nodeValue,
            attrData = vattr.nodeData, binding;

        if(attrValue != null) {
            binding = this.newBinding(attrValue);
            attrData.binding = binding;
        }

        if (attrName.startsWith('@')) {
            attrData.isEvent = true;
            attrData.name = attrName.substr(1);
            attrData.isDomEvent = utils.some(domEvents, e => e === attrData.name);
            binding && (binding.logical = true);
        }
        else if (attrName.startsWith(':')) {
            attrData.name = attrName.substr(1);
            binding && (binding.isExp = true);
        }
        else if (attrName.startsWith('*')) {
            attrData.directive = true;
            attrData.name = attrName.substr(1);
            binding && (binding.isExp = true);
        }
        else {
            attrData.name = attrName;
        }

        if (attrData.directive) {
            var directive = this.recognizeDirective(vattr);

            if (directive) {
                attrData.directive = this.newDirective(directive);
                attrData.directive.$$vattr = vattr;

                if(binding != null) {
                    binding.assignment = attrData.directive.$assignment;
                }

                if (attrData.directive.$compile()) {
                    attrData.linker = attrData.directive;
                    return;
                }
            }
            else {
                throw new Error('directive ' + attrData.name + ' is not defined');
            }
        }

        if(binding == null) {
            return;
        }

        if (!(attrData.isEvent || attrData.directive)) {
            var setHtmlAttr = function (value) {
                var elm = vattr.velm.elm;

                if (attrData.name.startsWith('style')) {
                    utils.setProperty(elm, attrData.name, value);
                }
                else {
                    elm.setAttribute(attrData.name, value);
                }
            };

            if (vattr.velm.nodeData.component) {
                binding.registerAutomation(function (value) {
                    var component = vattr.velm.nodeData.component;
                    var propertyName = utils.convertToHumpName(attrData.name, '-');

                    if (component.$hasProperty(propertyName)) {
                        component.$setProperty(propertyName, value);
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

    compileText(vtext) {
        vtext.nodeData.binding = this.newBinding(vtext.nodeValue);
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
        var elmData = velm.nodeData;

        if (elmData.linker != null) {
            return elmData.linker.$link();
        }

        velm.elm = document.createElement(velm.nodeName);

        if (elmData.component) {
            var instance = this.newComponent(elmData.component);

            elmData.component = instance;

            dom.addClass(velm.elm, M_CMP_CLASS);

            velm.vattrs.forEach(vattr => this.linkAttr(vattr));

            instance.$$velm = velm;
            instance.$setSlot(elmData.slots);
            instance.$render();
            instance.$mount(velm.elm);
        }
        else {
            velm.vattrs.forEach(vattr => this.linkAttr(vattr));
            velm.childNodes.forEach(child => velm.elm.appendChild(this.linkNode(child)));
        }

        return velm.elm;
    }

    linkAttr(vattr) {
        var velm = vattr.velm,
            elm = velm.elm,
            attrData = vattr.nodeData,
            binding = attrData.binding;

        if(binding == null) {
            return;
        }

        if (attrData.isEvent) {
            if (attrData.isDomEvent) {
                elm.addEventListener(attrData.name, e => binding.compute(new Local(e, elm)));
            }
            else if (velm.nodeData.component) {
                var eventName = utils.convertToHumpName(attrData.name, '-');
                velm.nodeData.component.$bind(eventName, e => binding.compute(new Local(e, elm)));
            }
        }
        else {
            binding.link();
            binding.patch();
        }

        // register binding change handler after first patch
        if(attrData.directive) {
            binding.registerAutomation((newValue, oldValue) => attrData.directive.$change(newValue, oldValue));
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
}