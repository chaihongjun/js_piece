# ParentNode.prototype.firstElementChild

## 标准
[WHATWG：firstElementChild](https://dom.spec.whatwg.org/#dom-parentnode-firstelementchild)

## 定义和用法
节点的 firstElementChild 属性用于获取第一个子元素节点，如果没有子元素节点则返回 null。也可以用 `node.children[0]` 获得第一个子元素节点。

- 语法：node.firstElementChild
- 返回值：元素节点 或 null

## 属性描述
firstElementChild 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'firstElementChild') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有 firstElementChild 属性。
2. firstElementChild 属性是只读的，赋值无效。

## 参考资料
1. [MDN: firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild)
2. [w3schools: firstElementChild](http://www.w3schools.com/jsref/prop_element_firstelementchild.asp)
