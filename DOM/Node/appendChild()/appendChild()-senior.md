# Node.prototype.appendChild() （高级篇）
> 写于: 2017/1/2

你也可以阅读[基础篇](./appendChild().md)

## 属性描述
appendChild方法可枚举可重写可配置，结果如下：
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'appendChild') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.appendChild
}
```

## 缺点及优化
appendChild方法的缺点有两个：

- 不能传多个参数
- 参数只能是节点对象

这里给Node.prototype添加一个方法，名称为：appendChildPlus，可以认为是appendChild的加强版,特点如下：

- 参数可以是html字符串和节点对象
- 可以传多个参数
- script标签字符串和script节点对象插入文档以后可以正常运行
```javascript
// appendChildPlus.js
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

```
下面是appendChildPlus的demo：
```javascript
var wrap = document.querySelector('.js-wrap'),
    appendStr = '<script id="first">wrap.append("first");</script>' +
        '<script>wrap.append("second");</script>';

wrap.appendChildPlus(appendStr, '<div>nihao</div>');
```
```html
<!--extend.html-->
<!--运行前-->
<div class="js-wrap"></div>
<script src="./appendChildPlus.js"></script>
<script src="extend.js"></script>

<!--运行后-->
<div class="js-wrap">
    <script id="first">wrap.append("first");</script>
    <script>wrap.append("second");</script>
    <div>nihao</div>
    first
    second
</div>
<script src="./appendChildPlus.js"></script>
<script src="extend.js"></script>

```

## 更多
本知识块的markdown和demo源文件在github上，
[点击这里](https://github.com/jserz/js_piece/tree/master/DOM/Node/)查看
