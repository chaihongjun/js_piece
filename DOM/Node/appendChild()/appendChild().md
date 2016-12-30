# Node.prototype.appendChild()

## W3C 标准
[WHATWG: appendChild()](https://dom.spec.whatwg.org/#dom-node-appendchild)

## 定义和用法
节点的appendChild()方法用于在内容末尾插入子节点，如果要插入的节点已经在文档中则先剪切再插入。

- 语法：node.appendChild()
- 参数：节点对象（a node object）
- 返回值：插入的节点对象在文档中的引用

## 注意事项
1. 如果appendChild()的参数是一个script节点对象，则插入的script标签的内容会正常运行。

## 示例代码
在内容末尾插入子节点
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

newScript.innerHTML = 'wrap.append("test")';
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

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
2. http://www.w3schools.com/jsref/met_node_appendchild.asp
3. [element.innerHTML和appendChild有什么区别](https://segmentfault.com/q/1010000004693112)