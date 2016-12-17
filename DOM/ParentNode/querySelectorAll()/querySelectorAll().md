#　ParentNode.prototype.querySelectorAll()

## W3C 标准
[DOM4: querySelectorAll()](https://www.w3.org/TR/dom/#dom-parentnode-queryselectorall)

## 定义和用法
节点的querySelectorAll()方法用于获取与选择器匹配的后代元素节点的集合，
如果没有匹配的元素节点则返回空集合。

- 语法：node.querySelectorAll()
- 参数：css选择器
- 返回值：NodeList对象

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有querySelectorAll()方法
2. querySelectorAll()方法返回的是一个静态的NodeList对象

[示例代码](./querySelectorAll().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll