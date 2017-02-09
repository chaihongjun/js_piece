# Document.prototype.documentURI

## 标准
[WHATWG: documentURI](https://dom.spec.whatwg.org/#dom-document-documenturi)

## 定义和用法
文档节点的 documentURI 属性用于获取文档的 url 地址，该属性是只读的。该属性返回在浏览器地址栏中显示的地址，包括查询字段和哈希字段。

- 语法：document.documentURI
- 返回值：url 字符串

## 属性描述
documentURI 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'documentURI') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 参考资料
1. [MDN: documentURI](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURI)
