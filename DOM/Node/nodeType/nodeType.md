# Node.prototype.nodeType

## W3C 标准
[WHATWG: nodeType](https://dom.spec.whatwg.org/#dom-node-nodetype)

## 定义和用法
节点（node）的nodeType属性用于获取节点类型。

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

## 注意事项
1. nodeType属性是只读的，赋值无效

[示例代码](./nodeType.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
2. http://www.w3schools.com/jsref/prop_node_nodetype.asp