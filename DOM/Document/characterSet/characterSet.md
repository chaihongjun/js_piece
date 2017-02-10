# Document.prototype.characterSet

## 标准
[WHATWG: characterSet](https://dom.spec.whatwg.org/#dom-document-characterset)

## 定义和用法
文档节点的 characterSet 属性用于获取文档当前的字符编码类型。

- 语法：document.characterSet
- 返回值：字符编码类型的名称（DOMString）

## 属性描述
characterSet 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'characterSet') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. characterSet 属性是只读的，赋值无效，但是可以通过浏览器改变字符编码类型。

## 参考资料
1. MDN: [characterSet](https://developer.mozilla.org/en-US/docs/Web/API/Document/characterSet)
