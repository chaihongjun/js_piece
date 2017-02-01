# Node.prototype.ownerDocument

## 标准
[WHATWG: ownerDocument](https://dom.spec.whatwg.org/#dom-node-ownerdocument)

## 定义和用法
节点的 ownerDocument 属性用于获取最顶层的文档对象（document）。

- 语法：node.ownerDocument
- 返回值：document 或 null

节点 | ownerDocument的返回值
--- | ---
元素节点 | document
属性节点 | document
文本节点 | document
注释节点 | document
文档节点（document） | null
文档类型节点（documentType） | document
文档片段节点（documentFragment） | document

## 属性描述
ownerDocument 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'ownerDocument') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. ownerDocument 属性是只读的，赋值无效。
2. 文档节点的 ownerDocument 属性的值为null，它本身就是最顶层的文档对象。

## 参考资料
1. [MDN: ownerDocument](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument)
2. [w3schools: ownerDocument](http://www.w3schools.com/jsref/prop_node_ownerdocument.asp)
