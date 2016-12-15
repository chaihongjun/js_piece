# ParentNode.prototype.lastElementChild

## W3C 标准
[DOM4: lastElementChild](https://www.w3.org/TR/dom/#dom-parentnode-lastelementchild)

## 定义和用法
节点的lastElementChild属性用于获取最后一个子元素节点，如果没有则为null。
也可以用node.children[node.children.length-1]获取最后一个子元素节点。

- 语法：node.lastElementChild
- 返回值：元素节点 或 null

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有lastElementChild属性
2. lastElementChild属性是只读的，赋值无效

[示例代码](./lastElementChild.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild