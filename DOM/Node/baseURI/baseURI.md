# Node.prototype.baseURI

## W3C 标准
[WHATWG: baseURI](https://dom.spec.whatwg.org/#dom-node-baseuri)

## 定义和用法
节点的baseURI属性用于获取文档的基URL（就是当前文档中的相对地址的参考地址），
默认值为window.location.href。在HTML文档中，如果包含base标签，则Node.baseURI的值为base标签href属性的值。
作用是利于img，a等标签中的相对地址获得基URL。

- 语法：node.baseURI
- 返回值：DOMString 或 null

## 属性描述
baseURI属性可配置，可枚举，可取值，不可赋值。
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
1. baseURI属性是只读（readonly）的，赋值无效
2. baseURI属性可能随时会改变，比如插入base标签

## 示例代码
没有指定base元素的情况下，baseURI的值为window.location.href的值
```html
<head>
    <meta charset="UTF-8">
</head>
<body>
<script>
    console.log(document.baseURI === location.href); // true
</script>
</body>
```
如果指定base元素的href，则baseURI的值为base元素的href的值。如下，如果点击“github登录”会跳转到https://github.com/login
```html
<head>
    <meta charset="UTF-8">
    <base href="https://github.com/login">
</head>
<body>
<a href="./login">github登录</a>
<script >
    // 打印结果为：https://github.com/
    console.log(document.baseURI);
    
    // 打印结果为：false
    console.log(document.baseURI === window.location.href);
</script>
</body>
```
可以动态插入base元素来改变baseURI的值
```javascript
// 打印结果为：true
console.log(document.baseURI === window.location.href);

var base = document.createElement('base');
base.href = 'https://github.com/';
document.head.appendChild(base);

// 打印结果为：false
console.log(document.baseURI === window.location.href);
// 打印结果为：https://github.com/
console.log(document.baseURI);
```

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI
2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
3. http://www.w3schools.com/jsref/prop_doc_baseuri.asp
4. https://www.quora.com/What-are-the-differences-between-document-baseURI-document-documentURI-and-document-URL
