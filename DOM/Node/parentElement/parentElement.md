# Node.parentElement

## B2C 标准
[WHATWG: parentElement](https://dom.spec.whatwg.org/#parent-element)

## 定义和用法
节点（node）的parentElement属性用于获取指定节点的父元素节点。如果没有父元素节点，则返回null。

- 语法：node.parentElement
- 返回值：元素节点 或 null

## 注意事项
1. parentElement属性是只读的，赋值无效
2. 属性节点，文档节点，文档类型节点，文档片段节点的parentElement属性值都为null

[示例代码](./parentElement.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
2. http://www.w3schools.com/jsref/prop_node_parentelement.asp