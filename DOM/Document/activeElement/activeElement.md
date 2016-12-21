# Document.prototype.activeElement

## W3C 标准
[WHATWG: activeElement](https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement)

## 定义和用法
文档节点的activeElement属性用于获取获得焦点的元素，获得焦点的元素可以响应按键事件。

- 语法：document.activeElement
- 返回值：元素节点

## 注意事项
1. activeElement属性是只读的，赋值无效，但会随焦点的改变而改变
2. activeElement属性的默认值为body元素节点

[示例代码](./activeElement.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement