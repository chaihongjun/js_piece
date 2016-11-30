# Node.firstChild

## W3C 标准
[DOM Level 2 Core: firstChild](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-169727388)

## 定义和用法
节点（Node）的firstChild属性用于获得指定节点的第一个子节点（可以是元素节点，文本节点，注释节点），如果没有子节点则返回null。如果只想获得第一个元素节点可以用ParentNode.firstElementChild属性。Node.childNodes[0]也能获得第一个子节点。

> 语法：node.firstChild
>
> 返回值：节点对象 或 null

## 注意事项
1. firstChild属性是只读的
2. firstChild属性获得的子节点可以是元素节点，文本节点，注释节点
3. 一般来说，文档节点（document）的第一个子节点为：文档类型节点（documentType）

[示例代码](./firstChild.html)

##　参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
2. http://www.w3schools.com/jsref/prop_node_firstchild.asp