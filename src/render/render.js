import * as utils from '../utils';
import * as helper from '../helper';
import { parseTpl } from '../tpl';
import { Local } from '../core';
import { Binding } from './binding';

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

export class Render {
    constructor(scope, locals) {
        this.scope = scope;
        this.locals = locals;
        this.vnodes = [];
        this.directives = [];
    }

    createBinding(text) {
        return new Binding(this.scope, text, this.locals);
    }

    render(tpl) {
        var fragment = document.createDocumentFragment();

        this.vnodes = parseTpl(tpl);

        this.compileNodes(this.vnodes);

        // this.directives.forEach(directive => {
        //     directive.$prelink();
        // });

        this.linkNodes(this.vnodes).forEach(elm => {
            fragment.appendChild(elm);
        });

        this.directives.forEach(directive => {
            directive.$postlink();
        });

        return fragment;
    }

    isText(vnode) {
        return vnode.nodeName === '#text';
    }

    isComment(vnode) {
        return vnode.nodeName === '#comment';
    }

    compileNodes(vnodes) {
        vnodes.forEach(vnode => {
            this.compileNode(vnode);
        });
    }

    compileNode(vnode) {
        if (this.isText(vnode)) {
            this.compileText(vnode);
        }
        else if(this.isComment(vnode)){
            this.compileComment(vnode);
        }
        else {
            this.compileElm(vnode);
        }
    }

    linkNodes(vnodes) {
        return vnodes.map(vnode => {
            return this.linkNode(vnode);
        });
    }

    linkNode(vnode) {
        if (this.isText(vnode)) {
            return this.linkText(vnode);
        }

        if(this.isComment(vnode)) {
            return this.linkComment(vnode);
        }

        return this.linkElm(vnode);
    }

    compileElm(velm) {
        var directives = [];
        var customLinker = velm.vattrs.some(vattr => {
            this.compileAttr(vattr);

            if (vattr.data.directive != null) {
                directives.push(vattr.data.directive);
                velm.data.linker = vattr.data.linker;
                return velm.data.linker != null;
            }

            return false;
        });

        // sort directive according to its priority
        utils.orderBy(directives, function (directive) {
            return directive.$priority;
        }).forEach(directive => {
            this.directives.push(directive);
        });

        // directive defines custom linker for this virtual node, render engine will not render it according to default behavior
        if (customLinker) {
            return;
        }

        velm.data.isComponent = this.scope.$hasComponent(velm.nodeName);

        if (!velm.data.isComponent) {
            this.compileNodes(velm.childNodes);
        }
    }

    compileAttr(vattr) {
        vattr.data.binding = this.createBinding(vattr.nodeValue);

        if (vattr.nodeName.startsWith('@')) {
            vattr.data.messaged = true;
            vattr.data.binding.messaged = true;
            vattr.data.key = vattr.nodeName.substr(1);
            vattr.data.domMessaged = utils.contains(domEvents, vattr.data.key);
        }
        else if (vattr.nodeName.startsWith(':')) {
            vattr.data.binding.expressed = true;
            vattr.data.key = vattr.nodeName.substr(1);
        }
        else if (vattr.nodeName.startsWith('*')) {
            vattr.data.isDirective = true;
            vattr.data.binding.expressed = true;
            vattr.data.key = vattr.nodeName.substr(1);
        }
        else {
            vattr.data.key = vattr.nodeName;
        }

        if (vattr.data.isDirective) {
            if (this.scope.$hasDirective(vattr.data.key)) {
                vattr.data.directive = this.scope.$newDirective(vattr.data.key);
                vattr.data.directive.$$vattr = vattr;
                vattr.data.binding.assigned = vattr.data.directive.$assigned;

                if (vattr.data.directive.$compile()) {
                    vattr.data.linker = vattr.data.directive;
                    return;
                }
            }
            else {
                throw new Error('directive ' + vattr.data.key + ' is not defined');
            }
        }

        if (vattr.data.isDirective) {
            vattr.data.binding.registerAutomation(function (value) {
                vattr.data.directive.$change(value);
            });
        }
        else if (!vattr.data.messaged) {
            var setHtmlAttr = function (value) {
                var elm = vattr.velm.elm;

                if (vattr.data.key.startsWith('style')) {
                    utils.setProperty(elm, vattr.data.key, value);
                }
                else {
                    elm.setAttribute(vattr.data.key, value);
                }
            };

            if (vattr.velm.isComponent) {
                vattr.data.binding.registerAutomation(function (value) {
                    if (vattr.velm.component.$hasAttribute(vattr.data.key)) {
                        vattr.velm.component.$setAttribute(vattr.data.key, value);
                    }
                    else {
                        setHtmlAttr(value);
                    }
                });
            }
            else {
                vattr.data.binding.registerAutomation(setHtmlAttr);
            }
        }

        vattr.data.binding.compile();
    }

    compileText(vtext) {
        vtext.data.binding = this.createBinding(vtext.nodeValue);
        vtext.data.binding.registerAutomation(function (value) {
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
                    helper.replaceNode(vtext.elm, newTextNode);
                }
            }

            vtext.elm = newTextNode;
        });
        vtext.data.binding.compile();
    }

    compileComment(vcmnt) {

    }

    linkElm(velm) {
        if (velm.data.linker != null) {
            return velm.data.linker.$link();
        }

        velm.elm = document.createElement(velm.nodeName);

        if (velm.data.isComponent) {
            var instance = this.scope.$newComponent(velm.nodeName);

            velm.data.component = instance;
            velm.elm.style.display = instance.$display;

            velm.vattrs.forEach(vattr => {
                this.linkAttr(vattr);
            });

            instance.$$velm = velm;
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
        var elm = vattr.velm.elm;

        if (vattr.data.messaged) {
            if (vattr.data.domMessaged) {
                elm.addEventListener(vattr.data.key, function (e) {
                    vattr.data.binding.compute({
                        locals: new Local(e, elm)
                    });
                });
            }
            else if (vattr.velm.isComponent) {
                vattr.velm.component.$bind(vattr.data.key, function (e, arg) {
                    vattr.data.binding.compute({
                        locals: new Local(e, elm, arg)
                    });
                });
            }
        }
        else {
            vattr.data.binding.link();
            vattr.data.binding.patch();
        }
    }

    linkText(vtext) {
        vtext.data.binding.link();
        vtext.elm = document.createTextNode(vtext.data.binding.value);
        return vtext.elm;
    }

    linkComment(vcmnt) {
        return document.createComment(vcmnt.nodeValue);
    }
}