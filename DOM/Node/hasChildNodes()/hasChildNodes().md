# Node.hasChildNodes()

## W3C 标准
[DOM Level 2 Core：hasChildNodes](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-810594187)

## 定义和用法
节点（node）的hasChildNodes()方法用于判断指定节点是否包含子节点。返回值为布尔值，true表示有子节点，false表示没有子节点。

> 语法：node.hasChildNodes()
>
> 参数：无
>
> 返回值：true 或 false

## 注意事项
1. hasChildNodes()方法不需要传参数
2. 子节点可以是元素节点，文本节点，注释节点

## 判断是否有子节点的方法总结
1. node.firstChild !== null
2. node.childNodes.length > 0 
3. node.hasChildNodes()

[示例代码](./hasChildNodes().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
2. http://www.w3schools.com/jsref/met_node_haschildnodes.asp
3. http://stackoverflow.com/questions/2161634/how-to-check-if-element-has-any-children-in-javascript