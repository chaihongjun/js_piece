# Node.nodeName

## W3C 标准
[WHATWG: nodeName](https://dom.spec.whatwg.org/#dom-node-nodename)

## 定义和用法
节点（node）的nodeName属性用于获得节点的名称。

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

 
## 注意事项
1. nodeName属性是只读的，赋值无效

[示例代码](./nodeName.html)
 
## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName
2. http://www.w3schools.com/jsref/prop_node_nodename.asp