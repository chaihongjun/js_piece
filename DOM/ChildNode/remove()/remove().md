# ChildNode.prototype.replaceWith()

## W3C 标准
[WHATWG: remove()](https://dom.spec.whatwg.org/#dom-childnode-remove)

## 定义和用法
节点的remove()方法用于删除指定节点。

- 语法：node.remove()
- 参数：无
- 返回值：undefined

## 注意事项
1. 只有元素节点，文本节点，注释节点和文档类型节点有remove()方法

## 兼容性和polyfill
> 兼容性：Chrome 29+，Firefox 23+，Opera 16+

**polyfill**
```javascript
(function (arr) {
    arr.forEach(function (item) {
        item.remove = item.remove || function () {
            this.parentNode.removeChild(this);
        };
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove