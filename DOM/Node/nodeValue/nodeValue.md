# Node.nodeValue

## B2C 标准
[DOM Level 2 Core: nodeValue](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)

## 定义和用法
节点（node）的nodeValue属性用于获取和设置节点值。

- 获取节点值
    - 语法：node.nodeValue
    - 返回值：节点值（DOMString） 或 null
    
节点 | 默认值
--- | ---
元素节点 | null
属性节点 | 属性值
文本节点 | 文本内容
注释节点 | 注释内容
文档节点（document） | null
文档类型节点（documentType） | null
文档片段节点（documentFragment） | null

- 设置节点值
    - 语法：node.nodeValue = 你要设置的值
    - 返回值：无

## 注意事项
1. nodeValue属性可取值可赋值
2. 如果nodeValue属性的值默认为null，则赋值无效

[示例代码](./nodeType.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue
2. http://www.w3schools.com/jsref/prop_node_nodevalue.asp
