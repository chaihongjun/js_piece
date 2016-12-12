# Node.prototype.textContent

## W3C 标准
[DOM Level 3 Core: textContent](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent)

## 定义和用法
节点(node)的textContent属性用于获取和设置文本内容。获取文本内容时，如果内容包含标签则先合并后代文本节点的文本内容再返回。

- 获取文本内容
    - 语法：node.textContent
    - 返回值：文本内容（DOMString） 或 null
    
        节点 | textContent的返回值
        --- | ---
        元素节点 | 合并后的文本内容
        属性节点 | 属性值
        文本节点 | 文本内容
        注释节点 | 注释内容
        文档节点 | null
        文档类型节点 | null
        文档片段节点 | 合并后的文本内容
- 设置文本内容
    - 语法：node.textContent = 文本内容
    
## 注意事项
1. 元素节点和文档片段节点的textContent的返回值为所有后代文本节点的文本内容的合并
2. 元素节点和文档片段节点的textContent的设置会代替所有子节点
3. 文档节点和文档类型节点的textContent的返回值为null，赋值无效

[示例代码](./textContent.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
2. http://www.w3schools.com/jsref/prop_node_textcontent.asp