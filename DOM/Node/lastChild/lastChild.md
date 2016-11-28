# Node.lastChild

## W3C 标准
[DOM Level 3 Core: lastChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-61AD09FB)

## 定义和用法
节点（node）的lastChild属性用于获得最后一个子节点。如果没有子节点则返回null。

- 语法：node.lastChild
- 返回值：节点对象 或 null

[示例代码](./lastChild.html)

## 注意事项
1. lastChild属性是只读的，赋值无效
2. 返回的子节点可以是元素节点，文本节点和注释节点

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild
2. http://www.w3schools.com/jsref/prop_node_lastchild.asp