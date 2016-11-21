# Node.contains()

## W3C 标准
[DOM Level 4 Core: contains](https://www.w3.org/TR/domcore/#dom-node-contains)

## 定义和用法
节点（Node）的contains(other)方法用于判断other是否是指定节点的后代节点，是返回true，不是返回false。

> 语法：node.contains(other)
> 
> 参数：节点对象，null 或 undefined
> 
> 返回值：true 或 false

## 注意事项
1. 如果other是指定节点本身，返回true
2. 如果other是null或undefined，返回false
3. other可以是元素节点，文本节点，注释节点
4. other如果是属性节点都返回false

[示例代码](./contains().html)
## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
2. http://www.w3schools.com/jsref/met_node_contains.asp