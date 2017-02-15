# ChildNode.prototype.remove

## 标准
[WHATWG: remove](https://dom.spec.whatwg.org/#dom-childnode-remove)

## 定义和用法
节点的 remove 方法用于删除指定节点。

- 语法：node.remove()
- 参数：无
- 返回值：undefined

## 属性描述
remove 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'remove') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Element.prototype.remove
}
```

## 注意事项
1. 只有元素节点，文本节点，注释节点和文档类型节点有 remove 方法

## 兼容性和polyfill
> 兼容性：Chrome 29+，Firefox 23+，Opera 16+

**polyfill**
```javascript
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```


## 参考资料
1. [MDN: remove](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
