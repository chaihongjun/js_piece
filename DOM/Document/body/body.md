# Document.prototype.body

## 标准
[WHATWG: body](https://html.spec.whatwg.org/multipage/dom.html#dom-document-body)

## 定义和用法
文档节点的 body 属性用于获取和替换 body 元素。

- 获取 body 元素
  - 语法：document.body
  - 返回值：body 元素节点 或 null
    
- 替换 body 元素
  - 语法：document.body = 新的 body 元素节点

## 属性描述
body 属性可配置，可枚举，可取值，可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'body') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: function () { /*[native code]*/ }
}
```

## 注意事项
1. 可用于 document.body 替换的节点有 body 元素节点和 frameset 元素节点，但是 frameset 标签在 HTML5 中已经废弃。

## 参考资料
1. [MDN: body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)
