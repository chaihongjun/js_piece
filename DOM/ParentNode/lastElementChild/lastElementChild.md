# ParentNode.prototype.lastElementChild

## W3C 标准
[WHATWG: lastElementChild](https://dom.spec.whatwg.org/#dom-parentnode-lastelementchild)

## 定义和用法
节点的 lastElementChild 属性用于获取最后一个子元素节点，如果没有则为 null。也可以用 `node.children[node.children.length-1]` 获取最后一个子元素节点。

- 语法：node.lastElementChild
- 返回值：元素节点 或 null

## 属性描述
lastElementChild 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'lastElementChild') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有 lastElementChild 属性。
2. lastElementChild 属性是只读的，赋值无效。

## 参考资料
1. [MDN: lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild)
