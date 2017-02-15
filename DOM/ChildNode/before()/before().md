# ChildNode.prototype.before

## 标准
[WHATWG: before](https://dom.spec.whatwg.org/#dom-childnode-before)

## 定义和用法
节点的 before 方法用于在指定节点之前插入零个或多个节点，它会先把字符串转换为文本节点再插入。如果要插入的节点已经在文档中则先剪切再插入。

before 方法的原理：先把所有参数按顺序插入一个文档片段节点的内容末尾，再把文档片段节点插入指定节点之前。

- 语法：node.before()
- 参数：零个或多个节点或其他数据类型
- 返回值：undefined

## 属性描述
before 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'before') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Element.prototype.before
}
```

## 注意事项
1. 只有元素节点，文本节点，注释节点和文档类型节点有 before 方法。
2. before 可以不传参数，这时什么都没有做。
3. 如果参数不是节点对象也不是字符串，则会先转换成字符串再转换为文本节点再插入。

## 兼容性和polyfill
> 兼容性：Chrome 54+，Firefox 49+，Opera 39+

**polyfill**
```javascript
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }
    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();
        
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        
        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```

## 参考资料
1. [MDN: before](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before)
