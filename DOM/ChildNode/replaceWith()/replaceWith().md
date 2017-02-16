# ChildNode.prototype.replaceWith

## 标准
[WHATWG: replaceWith](https://dom.spec.whatwg.org/#dom-childnode-replaceWith)

## 定义和用法
节点的 replaceWith 方法用于用零个或多个节点替换指定节点，它会先把字符串转换为文本节点再替换。如果用于替换的节点已经在文档中则先剪切再替换。

replaceWith 方法的原理：先把所有参数按顺序插入一个文档片段节点的内容末尾，再把文档片段节点替换指定节点。

- 语法：node.replaceWith()
- 参数：零个或多个节点或其他数据类型
- 返回值：undefined

## 属性描述
replaceWith 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'replaceWith') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Element.prototype.replaceWith
}
```

## 注意事项
1. 只有元素节点，文本节点，注释节点和文档类型节点有 replaceWith 方法。
2. replaceWith 如果不传参数，这时会删除指定节点。
3. 如果参数不是节点对象也不是字符串，则会先转换成字符串再转换为文本节点再替换。

## 兼容性和polyfill
> 兼容性：Chrome 54+，Firefox 49+，Opera 39+

**polyfill**
```javascript
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('replaceWith')) {
      return;
    }
    Object.defineProperty(item, 'replaceWith', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function replaceWith() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();
        
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        
        this.parentNode.replaceChild(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```

## 参考资料
1. [MDN: replaceWith](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith)
