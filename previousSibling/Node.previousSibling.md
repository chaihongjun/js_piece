# previousSibling

## w3c标准
> **previousSibling of type Node, readonly**
>
>  The node immediately preceding this node. If there is no such node, this returns null.

## 定义和用法
节点（Node）的previousSibling属性用于获得前一个兄弟节点（包括元素节点，文本节点，注释节点），如果没有则返回null。如果你只想获得前一个兄弟元素节点可以用previousElementSibling属性。

## 注意事项
1. previousSibling属性是只读的，赋值无效
2. previousSibling属性的值可能是元素节点（1），文本节点（3）或注释节点（8）

## 参考资料
1. https://developer.mozilla.org/zh-CN/docs/Web/API/Node/previousSibling
2. http://www.w3schools.com/jsref/prop_node_previoussibling.asp
3. https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/Whitespace_in_the_DOM
4. http://stackoverflow.com/questions/10924086/how-to-get-the-previous-sibling-name
5. http://stackoverflow.com/questions/20768925/parentnode-and-previoussibling-in-javascript