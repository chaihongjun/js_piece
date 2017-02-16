# ParentNode.prototype.querySelector

## 标准
[WHATWG: querySelector](https://dom.spec.whatwg.org/#dom-parentnode-queryselector)

## 定义和用法
节点的 querySelector 方法用于获取与选择器匹配的第一个后代元素节点，如果没有匹配的元素节点则返回 null。

- 语法：node.querySelector()
- 参数：css 选择器
- 返回值：元素节点 或 null

## 属性描述
querySelector 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'querySelector') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Element.prototype.querySelector
}
```

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有 querySelector 方法


## 参考资料
1. [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
