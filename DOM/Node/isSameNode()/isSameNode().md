# Node.isSameNode()

## W3C 标准
[DOM Level 3 Core: isSameNode()](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isSameNode)

## 定义和用法
节点（node）的isSameNode()方法用于判断两个节点是否为同一个节点，是则返回true，不是则返回false。可以用全等于（===）代替isSameNode()方法。

- 语法：node.isSameNode(node)
- 参数：节点对象
- 返回值：true 或 false

[示例代码](./isSameNode().html)

## 注意事项
1. isSameNode()方法在[DOM v4](https://www.w3.org/TR/dom/)中被废弃，可以用全等于（===）代替。

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode
2. http://www.w3schools.com/jsref/met_node_issamenode.asp