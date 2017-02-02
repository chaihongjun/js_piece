# Node.prototype.previousSibling

## W3C 标准
[WHATWG: previousSibling](https://dom.spec.whatwg.org/#dom-node-previoussibling)

## 定义和用法
节点的 previousSibling 属性用于获取上一个兄弟节点，如果没有则返回null。如果只想获取上一个兄弟元素节点可以用 previousElementSibling 属性。

- 语法：Node.previousSibling
- 返回值：节点对象 或 null

节点 | previousSibling 的返回值
--- | ---
元素节点 | 元素节点，文本节点，注释节点，文档类型节点 或 null
属性节点 | null
文本节点 | 元素节点，文本节点，注释节点 或 null
注释节点 | 元素节点，文本节点，注释节点，文档类型节点 或 null
文档节点（document） | null
文档类型节点（documentType） | 注释节点 或 null
文档片段节点（documentFragment） | null

## 属性描述
previousSibling 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'previousSibling') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. previousSibling 属性是只读的，赋值无效
2. previousSibling 属性的值可以是元素节点（1），文本节点（3）,注释节点（8），文档类型节点（10），null

## 参考资料
1. [MDN: previousSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)
2. [w3schools: previousSibling](http://www.w3schools.com/jsref/prop_node_previoussibling.asp)
3. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM
4. http://stackoverflow.com/questions/10924086/how-to-get-the-previous-sibling-name
5. http://stackoverflow.com/questions/20768925/parentnode-and-previoussibling-in-javascript
