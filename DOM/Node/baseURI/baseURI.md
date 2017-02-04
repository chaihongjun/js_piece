# Node.prototype.baseURI

## 标准
[WHATWG: baseURI](https://dom.spec.whatwg.org/#dom-node-baseuri)

## 定义和用法
节点的 baseURI 属性用于获取文档的基础 URL（就是当前文档中的相对地址的参考地址），默认值为 window.location.href 。在 HTML 文档中，如果包含 base 标签，则 node.baseURI 的值为 base 标签 href 属性的值。作用是利于 img，a 等标签中的相对地址获得基础 URL。

- 语法：node.baseURI
- 返回值：DOMString 或 null

## 属性描述
baseURI 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'baseURI') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    get: function () { /*[native code]*/ },
    set: undefined
}
```

## 注意事项
1. baseURI 属性是只读的，赋值无效。
2. baseURI 属性可能随时会改变，比如插入 base 标签。

## 示例代码
没有指定 base 元素的情况下，baseURI 的值为 window.location.href 的值
```html
<head>
  <meta charset="UTF-8">
</head>
<body>
  <script>
    console.log(document.baseURI === location.href); // => true
  </script>
</body>
```
如果指定 base 元素的 href，则 baseURI 的值为 base 元素的 href 的值。如下，如果点击“ github 登录”会跳转到https://github.com/login
```html
<head>
  <meta charset="UTF-8">
  <base href="https://github.com/">
</head>
<body>
<a href="./login">github 登录</a>
<script >
  console.log(document.baseURI); // => https://github.com/
  
  console.log(document.baseURI === window.location.href); // => false
</script>
</body>
```
可以动态插入 base 元素来改变 baseURI 的值
```javascript
console.log(document.baseURI === window.location.href); // => true

var base = document.createElement('base');
base.href = 'https://github.com/';
document.head.appendChild(base);

console.log(document.baseURI === window.location.href); // => false
console.log(document.baseURI); // => https://github.com/
```

## 参考资料
1. [MDN: baseURI](https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI)
2. [MDN: base 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
3. [w3schools: baseURI](http://www.w3schools.com/jsref/prop_doc_baseuri.asp)
4. [quora: What are the differences between document baseURI document documentURI and document URL](https://www.quora.com/What-are-the-differences-between-document-baseURI-document-documentURI-and-document-URL)
