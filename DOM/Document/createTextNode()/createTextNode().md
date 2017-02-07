# Document.prototype.createTextNode

## 标准
[WHATWG: createTextNode](https://dom.spec.whatwg.org/#dom-document-createtextnode)

## 定义和用法
文档节点的 createTextNode 方法用于创建文本节点。

- 语法：document.createTextNode(data)
- 参数：文本内容（DOMString）
- 返回值：文本节点

## 属性描述
createTextNode 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'createTextNode') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.createTextNode
}
```
## 注意事项
1. createTextNode 方法的参数含有的元素标签不会被解析，会直接显示，所以用它可以增加安全性。

## 示例代码
createTextNode 方法用于创建文本节点。
```javascript
var newTextNode = document.createTextNode('jszhou');

console.log(newTextNode.nodeType); // => 3
console.log(newTextNode.nodeValue); // => jszhou
```

## 参考资料
1. [MDN: createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
2. [stackoverflow: what is a text node its uses document createtextnode](http://stackoverflow.com/questions/17195868/what-is-a-text-node-its-uses-document-createtextnode)
