# ParentNode.prototype.querySelector()

## W3C 标准
[DOM4: querySelector()](https://www.w3.org/TR/dom/#dom-parentnode-queryselector)

## 定义和用法
节点的querySelector()方法用于获取与选择器匹配的第一个后代元素节点，
如果没有匹配的元素节点则返回null。

- 语法：node.querySelector()
- 参数：css选择器
- 返回值：元素节点 或 null

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有querySelector()方法

[示例代码](./querySelector().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector