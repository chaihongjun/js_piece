# Node.nextSibling

## W3C 标准
[DOM Level 2 Core: nextSibling](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F)

## 定义和用法
节点（Node）的nextSibling属性用于获取下一个兄弟节点（可以是元素节点，文本节点，注释节点），如果没有则返回null。如果只想获取下一个兄弟元素节点可以用nextElementSibling属性。

> 语法：Node.nextSibling

> 返回值：节点对象（A Node Object） 或 null

## 注意事项
1. nextSibling属性是**只读**（readonly）的，赋值无效
2. nextSibling属性的值可以是元素节点（1），文本节点（3）或注释节点（8）

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling
2. http://www.w3schools.com/jsref/prop_node_nextsibling.asp
3. https://msdn.microsoft.com/en-us/library/ms534189(v=vs.85).aspx
4. http://stackoverflow.com/questions/26945438/this-nextsibling-not-working
5. http://stackoverflow.com/questions/24226571/what-is-the-difference-between-node-nextsibling-and-childnode-nextelementsibling
