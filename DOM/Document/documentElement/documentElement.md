# Document.prototype.documentElement

## 标准
[WHATWG: documentElement](https://dom.spec.whatwg.org/#dom-document-documentelement)

## 定义和用法
文档节点的 documentElement 属性用于获取文档的根元素节点。一般来说，HTML 文档的根元素节点为 `<html>`。

- 语法：document.documentElement
- 返回值：根元素节点 或 null

## 属性描述
documentElement 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'documentElement') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```
## 注意事项
1. documentElement 属性是只读的，赋值无效。

## 示例代码
一般来说，HTML 文档的根元素节点为 `<html>`。
```javascript
console.log(document.documentElement.nodeName.toLowerCase()); // => html
```
如果 HTML 文档中没有根元素节点，则返回 null。
```javascript
document.removeChild(document.documentElement);
console.log(document.documentElement); // => null
```

## 参考资料
1. [MDN: documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
