# ParentNode.prototype.firstElementChild

## W3C 标准
[DOM4：firstElementChild](https://www.w3.org/TR/dom/#dom-parentnode-firstelementchild)

## 定义和用法
节点的firstElementChild属性用于获取第一个子元素节点，如果没有子元素节点则返回null。
也可以用node.children[0]获得第一个子元素节点。

- 语法：node.firstElementChild
- 返回值：元素节点 或 null

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有firstElementChild属性
2. firstElementChild属性是只读的，赋值无效

[示例代码](./firstElementChild.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild
2. http://www.w3schools.com/jsref/prop_element_firstelementchild.asp