# Node.appendChild()

## W3C 标准
[DOM Level 3 Core： appendChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-184E7107)

## 定义和用法
节点（Node）的appendChild(newChildNode)方法用于把newChildNode插入指定节点的内容末尾，如果newChildNode已经在文档中则先剪切再插入。

- 语法：Node.appendChild( newChildNode )
- 参数：节点对象（a node object）
- 返回值：插入的节点对象在文档中的引用

[示例代码](./appendChild().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
2. http://www.w3schools.com/jsref/met_node_appendchild.asp
3. [element.innerHTML和appendChild有什么区别](https://segmentfault.com/q/1010000004693112)