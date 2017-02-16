#　ParentNode.prototype.querySelectorAll

## 标准
[WHATWG: querySelectorAll](https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall)

## 定义和用法
节点的 querySelectorAll 方法用于获取与选择器匹配的后代元素节点的集合，如果没有匹配的元素节点则返回空集合。

- 语法：node.querySelectorAll()
- 参数：css 选择器
- 返回值：NodeList 对象

## 属性描述
querySelectorAll 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'querySelectorAll') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Element.prototype.querySelectorAll
}
```

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有 querySelectorAll 方法。
2. querySelectorAll 方法返回的是一个静态的 NodeList 对象

## 参考资料
1. [MDN: querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
