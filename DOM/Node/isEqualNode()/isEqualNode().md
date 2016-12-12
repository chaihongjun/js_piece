# Node.prototype.isEqualNode()

## W3C 标准
[WHATWG: isEqualNode()](https://dom.spec.whatwg.org/#dom-node-isequalnode)

## 定义和用法
节点（node）的isEqualNode()方法用于判断两个节点是否相等。如果是同一个节点，则返回true；如果是不同节点，则比较标签，属性和子节点，如果都一样则返回true，否则返回false；如果参数为null或undefined，则返回false。

- 语法：node.isEqualNode()
- 参数：节点对象，null 或 undefined
- 返回值：true 或 false

[示例代码](./isEqualNode().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
2. http://www.w3schools.com/Jsref/met_node_isequalnode.asp