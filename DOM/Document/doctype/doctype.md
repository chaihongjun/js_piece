# Document.prototype.doctype

## 标准
[WHATWG: doctype](https://dom.spec.whatwg.org/#dom-document-doctype)

## 定义和用法
文档节点的 doctype 属性用于获取文档的文档类型节点。可以用 DOMImplementation.createDocumentType() 创建文档类型节点。

- 语法：document.doctype
- 返回值：文档类型节点 或 null

## 属性描述
doctype 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'doctype') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. doctype 属性是只读的，赋值无效。

## 示例代码
doctype 属性用于获取文档的文档类型节点。
```javascript
console.log(document.doctype.nodeType); // => 10
```
如果文档中没有文档类型节点，则返回 null。
```javascript
document.removeChild(document.doctype);
console.log(document.doctype); // => null
```

## 参考资料
1. [MDN: doctype](https://developer.mozilla.org/en-US/docs/Web/API/Document/doctype)
