
function getChildrenOfElement(elm) {
    return Array.prototype.slice.call(elm.childNodes, 0);
}

function clearChildrenOfElement(elm) {
    getChildrenOfElement(elm).forEach(function (child) {
        elm.removeChild(child);
    });
}

function replaceElement(elm, newElm) {
    var parentNode = elm.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newElm, elm);
        parentNode.removeChild(elm);
    }
}

function removeElement(elm) {
    var parentNode = elm.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(elm);
    }
}

function removeElementsBetween(startElm, endElm) {
    var parentNode = startElm.parentNode;
    var childNodes = getChildrenOfElement(parentNode);

    childNodes.forEach(function (child) {
        if (child.previousSibling === startElm && child !== endElm) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === endElm && child !== startElm) {
            parentNode.removeChild(child);
        }
    });
}

function appendElement(elm, newElm) {
    var parentNode = elm.parentNode;

    if (parentNode.lastChild === elm) {
        parentNode.appendChild(newElm);
    } else {
        parentNode.insertBefore(newElm, elm.nextSibling);
    }
}

function addClass (elm, cls) {
    if (!cls || !(cls = cls.trim())) {
        return
    }

    if (elm.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return elm.classList.add(c);
            });
        } else {
            elm.classList.add(cls);
        }
    } else {
        var cur = " " + (elm.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            elm.setAttribute('class', (cur + cls).trim());
        }
    }
}

function removeClass (elm, cls) {
    if (!cls || !(cls = cls.trim())) {
        return
    }

    if (elm.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return elm.classList.remove(c);
            });
        } else {
            elm.classList.remove(cls);
        }
        if (!elm.classList.length) {
            elm.removeAttribute('class');
        }
    } else {
        var cur = " " + (elm.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            elm.setAttribute('class', cur);
        } else {
            elm.removeAttribute('class');
        }
    }
}

function loadStyleString(css) {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    var header = document.getElementsByTagName('head')[0];
    header.appendChild(style);
}

export {
    addClass,
    removeClass,
    appendElement,
    removeElement,
    replaceElement,
    getChildrenOfElement,
    removeElementsBetween,
    clearChildrenOfElement,
    loadStyleString
};