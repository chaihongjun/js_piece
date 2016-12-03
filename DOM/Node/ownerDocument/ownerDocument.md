# Node.ownerDocument

## B2C 标准
[DOM Level 3 Core: ownerDocument](https://www.w3.org/TR/DOM-Level-3-Core/core.html#node-ownerDoc)

## 定义和用法
节点（node）的ownerDocument属性用于获取最顶层的文档对象（document）。

- 语法：node.ownerDocument
- 返回值：document 或 null

节点 | ownerDocument的返回值
--- | ---
元素节点 | document
属性节点 | document
文本节点 | document
注释节点 | document
文档节点（document） | null
文档类型节点（documentType） | document
文档片段节点（documentFragment） | document

## 注意事项
1. ownerDocument属性是只读的，赋值无效。
2. 文档节点（document）的ownerDocument属性的值为null，它本身就是最顶层的文档对象。

[示例代码](./ownerDocument.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument
2. http://www.w3schools.com/jsref/prop_node_ownerdocument.asp
