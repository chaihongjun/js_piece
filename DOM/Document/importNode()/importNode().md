# Document.prototype.importNode()

## W3C 标准
[WHATWG: importNode()](https://dom.spec.whatwg.org/#dom-document-importnode)

## 定义和用法
文档节点的importNode()方法用于复制外部文档中的节点。

- 语法：document.importNode(externalNode, [deep])
- 参数：
    - externalNode：外部文档节点
    - deep：true  或 false，可选，true表示复制后代节点，false表示不复制后代节点，默认为false
- 返回值：复制后的节点

## 注意事项
1. 标准的appendChild()是不能直接插入其他文档中的节点，只能用adoptNode()和importNode先导入再插入，
    但是现在appendChild()的实现可以直接插入其他文档中的节点

[示例代码](./importNode().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode