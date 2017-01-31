# Node.prototype.nodeName

## 标准
[WHATWG: nodeName](https://dom.spec.whatwg.org/#dom-node-nodename)

## 定义和用法
节点的 nodeName 属性用于获得节点的名称。

 - 语法：node.nodeName
 - 返回值：节点名称（DOMString）
 
 节点 | 返回值
 --- | ---
 元素节点 | 大写的标签名（如，DIV）
 属性节点 | 属性名（如，class）
 文本节点 | #text
 注释节点 | #comment
 文档节点（Document） | #document
 文档类型节点（DocumentType） | html
 文档片段节点（DocumentFragment） | #document-fragment

## 属性描述
nodeName 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'nodeName') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```
 
## 注意事项
1. nodeName 属性是只读的，赋值无效
 
## 参考资料
1. [MDN: nodeName](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
2. [w3schools: nodeName](http://www.w3schools.com/jsref/prop_node_nodename.asp)
