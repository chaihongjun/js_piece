# Document.prototype.body

## W3C 标准
[WHATWG: body](https://html.spec.whatwg.org/multipage/dom.html#dom-document-body)

## 定义和用法
文档节点的body属性用于获取和替换body元素。

- 获取body元素
    - 语法：document.body
    - 返回值：body元素节点 或 null
    
- 替换body元素
    - 语法：document.body = 新的body元素节点

## 注意事项
1. 可用于document.body替换的节点有body元素节点和frameset元素节点，但是frameset标签在HTML5中已经废弃

[示例代码](./body.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/body