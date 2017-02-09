# Document.prototype.activeElement

## 标准
[WHATWG: activeElement](https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement)

## 定义和用法
文档节点的 activeElement 属性用于获取获得焦点的元素，获得焦点的元素可以响应按键事件。

- 语法：document.activeElement
- 返回值：元素节点

## 属性描述
activeElement 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'activeElement') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. activeElement 属性是只读的，赋值无效，但会随焦点的改变而改变
2. activeElement 属性的默认值为 body 元素节点


## 参考资料
1. [MDN: activeElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement)
