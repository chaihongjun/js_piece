# NonDocumentTypeChildNode.prototype.previousElementSibling

## 标准
[WHATWG: previousElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-previouselementsibling)

## 定义和用法
节点的 previousElementSibling 属性用于获取上一个兄弟元素节点，如果没有则返回 null。

- 语法：Node.previousElementSibling
- 返回值：元素节点对象 或 null

## 属性描述
previousElementSibling 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'previousElementSibling') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. previousElementSibling 属性是只读的，赋值无效。
2. previousElementSibling 属性的值只能是元素节点或 null，忽略文本节点和注释节点。

## 兼容性和polyfill

> 兼容性：IE9+

**polyfill**
```javascript
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('previousElementSibling')) {
      return;
    }
    Object.defineProperty(item, 'previousElementSibling', {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while (el = el.previousSibling) {
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
1. [MSDN: previousElementSibling](https://msdn.microsoft.com/en-us/library/ff974797(v=vs.85).aspx)
2. [MDN: previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling)
3. [w3schools: previousElementSibling](http://www.w3schools.com/jsref/prop_element_previouselementsibling.asp)
4. [dottoro: previousElementSibling](http://help.dottoro.com/ljfaxuox.php)
5. [stackoverflow: parentNode or previousElementSibling not working in IE8](http://stackoverflow.com/questions/5197825/parentnode-or-previouselementsibling-not-working-in-ie8)
