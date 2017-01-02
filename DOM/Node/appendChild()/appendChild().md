# Node.prototype.appendChild() 基础篇

> 写于: 2016-11-19 | 更新于: 2017-1-2

你也可以阅读[高级篇](./appendChild()-senior.md)
## W3C 标准
[WHATWG: appendChild()](https://dom.spec.whatwg.org/#dom-node-appendchild)

## 定义和用法
节点的appendChild()方法用于在内容末尾插入节点，如果要插入的节点已经在文档中则先剪切再插入。

- 语法：node.appendChild()
- 参数：节点对象（a node object）
- 返回值：插入的节点对象在文档中的引用

## 注意事项
1. 如果appendChild()的参数是一个script节点对象，则插入的script标签的内容会正常运行。

## 示例代码
在内容末尾插入节点
```javascript
// appendChild.js
var wrap = document.querySelector('js-wrap'),
    newP = document.createElement('p');
    
newP.textContent = 'jszhou';
wrap.appendChild(newP);
```
```html
<!-- appendChild.html -->
<!-- 运行前 -->
<div class="js-wrap">wrap</div>
<script src="./appendChild.js"></script>

<!-- 运行后 -->
<div class="js-wrap">wrap
    <p>jszhou</p>
</div>
<script src="./appendChild.js"></script>
```
如果要插入的节点已经在文档中则先剪切再插入。
```javascript
// cut.js
var $ = document.querySelector.bind(document),
    outer = $('.js-outer'),
    wrap = $('.js-wrap');

wrap.appendChild(outer);
```
```html
<!-- cut.html -->
<!-- 运行前 -->
<div class="js-outer">outer</div>
<div class="js-wrap">wrap</div>
<script src="./cut.js"></script>

<!-- 运行后 -->
<div class="js-wrap">wrap
    <div class="js-outer">outer</div>
</div>
<script src="./cut.js"></script>
```

如果appendChild()的参数是一个script节点对象，则插入的script标签的内容会正常运行。
```javascript
// appendScript.js
var wrap = document.querySelector('.js-wrap'),
    newScript = document.createElement('script');

newScript.innerHTML = 'wrap.append("jszhou")';
wrap.appendChild(newScript);
```
```html
<!-- appendScript.html -->
<!-- 运行前 -->
<div class="js-wrap">wrap</div>
<script src="./appendScript.js"></script>

<!-- 运行后 -->
<div class="js-wrap">wrap
    <script>wrap.append("jszhou")</script>
    jszhou
</div>
<script src="./appendScript.js"></script>
```
把文档片段节点插入文档中是先剪切文档片段节点的所有子节点然后再一起插入文档中。文档片段节点也可以插入文档片段节点。
```javascript
// documentFragment.js
var wrap = document.querySelector('.js-wrap'),
    docFragWrap = document.createDocumentFragment(),
    docFrag = document.createDocumentFragment(),
    h2 = document.createElement('h2'),
    p = document.createElement('p');

h2.textContent = 'head';
docFragWrap.appendChild(h2);

p.textContent = 'content';
docFrag.appendChild(p);

docFragWrap.appendChild(docFrag);
console.log(docFrag.childNodes.length); // 0

wrap.appendChild(docFragWrap);
console.log(docFragWrap.childNodes.length); // 0
```
```html
<!--documentFragment.html-->
<!--运行前-->
<div class="js-wrap"></div>
<script src="./documentFragment.js"></script>

<!--运行后-->
<div class="js-wrap">
    <h2>head</h2>
    <p>content</p>
</div>
<script src="./documentFragment.js"></script>
```

## 更多
本知识块的markdown和demo源文件在github上，
[点击这里](https://github.com/jserz/js_piece/tree/master/DOM/Node/)查看

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
2. http://www.w3schools.com/jsref/met_node_appendchild.asp
3. [element.innerHTML和appendChild有什么区别](https://segmentfault.com/q/1010000004693112)

