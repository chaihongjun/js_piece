# Node.replaceChild()

## W3C 标准
[DOM Level 3 Core: replaceChild()](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-785887307)

## 定义和用法
节点（node）的replaceChild()方法用于替换子节点。

- 语法：parentNode.replaceChild(newChild, oldChild);
- 参数：
    - newChild：用于替换的节点，必填
    - oldChild：被替换的子节点，必填
- 返回值：oldChild（被替换的子节点在内存中的引用）

## 注意事项
1. 如果newChild节点在文档中，则先剪切再用于替换

[示例代码](./replaceChild().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild