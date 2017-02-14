# ParentNode.prototype.childElementCount

## 标准
[WHATWG: childElementCount](https://dom.spec.whatwg.org/#dom-parentnode-childelementcount)

## 定义和用法
节点的 childElementChild 属性用于获取子元素节点的数量，如果没有子元素节点则为0。也可以用 node.children.length 获取子元素节点的数量。

- 语法：node.childElementCount
- 返回值：整数

## 属性描述
childElementCount 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'childElementCount') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有 childElementCount 属性。
2. childElementCount 属性是只读的，赋值无效。

## polyfill
```javascript
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('childElementCount')) {
      return;
    }
    Object.defineProperty(item, 'childElementCount', {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this.firstChild,
          count = 0;
        
        while (el) {
          if (el.nodeType === 1) {
            ++count;
          }
          el = el.nextSibling
        }
        
        return count;
      },
      set: undefined
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
```

## 参考资料
1. [MDN: childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount)
