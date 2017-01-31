# Node.prototype.nodeType

## 标准
[WHATWG: nodeType](https://dom.spec.whatwg.org/#dom-node-nodetype)

## 定义和用法
节点的 nodeType 属性用于获取节点类型。

- 语法：node.nodeType
- 返回值：无符号整型数值

返回值 | 对应常量 | 描述
--- | --- | ---
1 | node.ELEMENT_NODE | 元素节点
2 | node.ATTRIBUTE_NODE | 属性节点
3 | node.TEXT_NODE | 文本节点
8 | node.COMMENT_NODE | 注释节点
9 | node.DOCUMENT_NODE | 文档节点
10 | node.DOCUMENT_TYPE_NODE | 文档类型节点
11 | node.DOCUMENT_FRAGMENT_NODE | 文档片段节点

## 属性描述
nodeType 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'nodeType') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. nodeType属性是只读的，赋值无效

## 参考资料
1. [MDN: nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
2. [w3schools: nodeType](http://www.w3schools.com/jsref/prop_node_nodetype.asp)
