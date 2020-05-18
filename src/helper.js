
function getChildNodes(node) {
    return Array.prototype.slice.call(node.childNodes, 0);
}

function clearChildNodes(node) {
    getChildNodes(node).forEach(function (child) {
        node.removeChild(child);
    });
}

function replaceNode(refNode, newNode) {
    var parentNode = refNode.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newNode, refNode);
        parentNode.removeChild(refNode);
    }
}

function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(node);
    }
}

function removeNodeBetween(beginNode, endNode) {
    var parentNode = beginNode.parentNode;
    var childNodes = getChildNodes(parentNode);

    childNodes.forEach(function (child) {
        if (child.previousSibling === beginNode && child !== endNode) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === endNode && child !== beginNode) {
            parentNode.removeChild(child);
        }
    });
}

function insertNodeAfter(refNode, newNode) {
    var parentNode = refNode.parentNode;

    if (parentNode.lastChild === refNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

function queryElementLoaded(ele, callback) {
    var cancelToken = false;

    function query() {
        if (cancelToken) {
            return;
        }

        if (ele.clientWidth > 0 && ele.clientHeight > 0) {
            callback();
        }
        else {
            requestAnimationFrame(query);
        }
    }

    requestAnimationFrame(query);

    return function () {
        cancelToken = true;
    };
}

function queryElementUnloaded(ele, callback) {
    var cancelToken = false;

    function query() {
        if (cancelToken) {
            return;
        }

        if (ele.clientWidth === 0 && ele.clientHeight == 0) {
            callback();
        }
        else {
            requestAnimationFrame(query);
        }
    }

    requestAnimationFrame(query);

    return function () {
        cancelToken = true;
    };
}

function queryElementState(ele, callbacks) {
    var cancelToken = false, loaded = false;

    function query() {
        if (cancelToken) {
            return;
        }

        if (ele.clientWidth > 0 && ele.clientHeight > 0) {
            if (!loaded) {
                loaded = true;
                if (callbacks.onEnter != null) {
                    callbacks.onEnter.call(callbacks);
                }
            }
        }
        else {
            if (loaded) {
                loaded = false;
                if (callbacks.onLeave != null) {
                    callbacks.onLeave.call(callbacks);
                }
            }
        }

        requestAnimationFrame(query);
    }

    requestAnimationFrame(query);

    return function () {
        cancelToken = true;
    };
}

function addClass (el, cls) {
    if (!cls || !(cls = cls.trim())) {
        return
    }

    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.add(c);
            });
        } else {
            el.classList.add(cls);
        }
    } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}

function removeClass (el, cls) {
    if (!cls || !(cls = cls.trim())) {
        return
    }

    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.remove(c);
            });
        } else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute('class', cur);
        } else {
            el.removeAttribute('class');
        }
    }
}

export {
    getChildNodes,
    clearChildNodes,
    replaceNode,
    removeNode,
    removeNodeBetween,
    insertNodeAfter,
    queryElementLoaded,
    queryElementUnloaded,
    queryElementState,
    addClass,
    removeClass
};