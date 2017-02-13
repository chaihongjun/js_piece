# NonDocumentTypeChildNode.prototype.nextElementSibling

## 标准
[WHATWG: nextElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-nextelementsibling)

## 定义和用法
节点的 nextElementSibling 属性用于获取下一个兄弟元素节点，如果没有则返回 null。

- 语法：Node.nextElementSibling
- 返回值：元素节点对象 或 null

## 属性描述
nextElementSibling 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'nextElementSibling') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. nextElementSibling 属性是只读的，赋值无效。
2. nextElementSibling 属性的值只能是元素节点或 null，忽略文本节点和注释节点。
3. 只有 Element 接口和 CharacterData 接口实现了 nextElementSibling 属性。

## 兼容性和polyfill

> 兼容性：IE9+

**polyfill**
```javascript
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('nextElementSibling')) {
      return;
    }
    Object.defineProperty(item, 'nextElementSibling', {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while (el = el.nextSibling) {
          if (el.nodeType === 1) {
              return el;
          }
        }
        return null;
      },
      set: undefined
    });
  });
})([Element.prototype, CharacterData.prototype]);
```

## 参考资料
1. [MDN: nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling)
2. [w3schools: nextElementSibling](http://www.w3schools.com/jsref/prop_element_nextelementsibling.asp)
