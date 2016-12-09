# Node.baseURI

## W3C 标准
[DOM Level 3 Core: baseURI](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-baseURI)

## 定义和用法
节点（Node）的baseURI属性用于获取文档的**基URL**（就是文档中相对地址的参考地址），默认值为window.location.href。在HTML文档中，如果包含base标签，则Node.baseURI的值为base标签href属性的值。作用是利于img，a等标签中的相对地址获得基URL。

- 语法：Node.baseURI
- 返回值：DOMString 或 null


## 注意事项
1. Node.baseURI属性是只读（readonly）的，直接赋值无效
2. Node.baseURI属性可能随时会改变，比如插入base标签

[示例代码](./baseURI.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI
2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
3. http://www.w3schools.com/jsref/prop_doc_baseuri.asp
4. https://www.quora.com/What-are-the-differences-between-document-baseURI-document-documentURI-and-document-URL
