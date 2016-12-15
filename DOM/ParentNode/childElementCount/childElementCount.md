# ParentNode.prototype.childElementCount

## W3C 标准
[DOM4: childElementCount](https://www.w3.org/TR/dom/#dom-parentnode-childelementcount)

## 定义和用法
节点的childElementChild属性用于获取子元素节点的数量，如果没有子元素节点则为0。
也可以用node.children.length获取子元素节点的数量。

- 语法：node.childElementCount
- 返回值：整数

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有childElementCount属性
2. childElementCount属性是只读的，赋值无效

[示例代码](./childElementCount.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount