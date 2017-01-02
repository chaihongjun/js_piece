/**
 * Created by jszhou on 2017/1/2.
 */
(function () {
    /**
     * 把类数组对象转换为数组。
     */
    var toArray = Array.from || function (arg) {
            return Array.prototype.slice.call(arg);
        };

    /**
     * 判断参数是否为节点对象。
     * @param {?} arg
     * @return {boolean}
     */
    function isNode(arg) {
        return arg instanceof Node;
    }

    /**
     * 判断参数是否为script节点对象。
     * @param {?} arg
     * @return {boolean}
     */
    function isScript(arg) {
        return isNode(arg) && arg.nodeName.toLowerCase() === 'script';
    }

    /**
     * 复制script节点对象，复制以后script标签的内容可以运行。
     * @param {object} script script节点对象
     * @return {object} 返回新的script节点对象
     */
    function copyScript(script) {
        var newScript = document.createElement('script');

        // 复制属性
        toArray(script.attributes).forEach(function (item) {
            newScript.setAttribute(item.nodeName, item.nodeValue);
        });

        newScript.innerHTML = script.innerHTML;

        return newScript;
    }

    /**
     * 字符串转成文档片段节点对象。
     * @param {String} str 字符串，可以包含script标签，转换完插入文档以后可以运行。
     * @return {Object} 返回文档片段节点对象
     */
    function strToNode(str) {
        var docFrag = document.createDocumentFragment(),
            div = document.createElement('div');

        div.innerHTML = str;

        toArray(div.childNodes).forEach(function (item) {
            // 用innerHTML写入的script标签不能运行，用copyScript复制script标签以后才能运行
            var child = !isScript(item) ? item : copyScript(item);
            docFrag.appendChild(child);
        });

        return docFrag;
    }

    /**
     * 用于扩展appendChild方法。可以传入html字符串和节点对象，可以传多个参数。
     * 如果html字符串中有script标签，插入以后可以正常运行。
     */
    Node.prototype.appendChildPlus = function () {
        var docFrag = document.createDocumentFragment();

        toArray(arguments).forEach(function (arg) {
            docFrag.appendChild(isNode(arg) ? arg : strToNode(String(arg)));
        });

        this.appendChild(docFrag);
    };
})();