# Document.prototype.adoptNode()

## W3C 标准
[WHATWG: adoptNode()](https://dom.spec.whatwg.org/#dom-document-adoptnode)

## 定义和用法
文档节点的adoptNode()方法用于导入外部文档中的节点，先剪切再导入。

- 语法：document.adoptNode()
- 参数：其他文档中的节点
- 返回值：导入后的节点

## 注意事项
1. 标准的appendChild()是不能直接插入其他文档中的节点，只能用adoptNode()和importNode先导入再插入，
    但是现在appendChild()的实现可以直接插入其他文档中的节点
    
[示例代码](./adoptNode().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode