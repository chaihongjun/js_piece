# Node.parentNode

## B2C 标准
[DOM Level 3 Core: parentNode](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1060184317)

## 定义和用法
节点（node）的parentNode属性用于获取指定节点的父节点。如果没有父节点，则返回null。

- 语法：node.parentNode
- 返回值：元素节点，文档节点，文档片段节点 或 null

## 注意事项
1. parentNode属性是只读的，赋值无效
2. 属性节点，文档节点，文档片段节点的parentNode属性值都为null
3. 未插入文档中的节点的parentNode属性值为null

[示例代码](./parentNode.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
2. http://www.w3schools.com/jsref/prop_node_parentnode.asp