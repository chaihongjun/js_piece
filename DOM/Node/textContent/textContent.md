# Node.prototype.textContent

## 标准
[WHATWG: textContent](https://dom.spec.whatwg.org/#dom-node-textcontent)

## 定义和用法
节点的 textContent 属性用于获取和设置文本内容。获取文本内容时，如果内容包含标签则先合并后代文本节点的文本内容再返回。

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
    
## 属性描述
textContent 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'textContent') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: function () { /*[native code]*/ }
}
```
    
## 注意事项
1. 元素节点和文档片段节点的 textContent 的返回值为所有后代文本节点的文本内容的合并
2. 元素节点和文档片段节点的 textContent 的设置会代替所有子节点
3. 文档节点和文档类型节点的 textContent 的返回值为null，赋值无效

## 参考资料
1. [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
2. [w3schools: textContent](http://www.w3schools.com/jsref/prop_node_textcontent.asp)
