# NonElementParentNode.prototype.getElementById

## 标准
[WHATWG: getElementById](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid)

## 定义和用法
文档节点和文档片段节点的 getElementById 方法用于获取与 id 匹配的第一个元素节点，如果没有匹配则返回 null。

- 语法：document.getElementById() 或 docFrag.getElementById()
- 参数：{DOMString} id 必填
- 返回值：与 id 匹配的第一个元素节点 或 null

## 属性描述
getElementById 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'getElementById') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.getElementById
}
```

## 注意事项
1. 只有 Document 接口和 DocumentFragment 接口实现了 getElementById 方法
2. getElementById 方法只返回第一个匹配的元素节点

## 参考资料
1. [MDN: getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
2. [w3schools: getElementById](http://www.w3schools.com/jsref/met_document_getelementbyid.asp)
