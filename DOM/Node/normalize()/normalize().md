# Node.normalize()

## B2C标准
[DOM Level 2 Core: normalize()](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-normalize)

## 定义和用法
节点（node）的normalize()方法用于规范化后代文本节点。规范化操作包括：删除后代中的空文本节点和合并后代中的相邻文本节点。

- 语法：node.normalize()
- 参数：无
- 返回值：undefined

## 注意事项
1. 可以用document.normalize()规范化整个文档的后代文本节点

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize
2. http://www.w3schools.com/jsref/met_node_normalize.asp