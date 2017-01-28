# Node.prototype.nextSibling

## 标准
[WHATWG: nextSibling](https://dom.spec.whatwg.org/#dom-node-nextsibling)

## 定义和用法
节点的 nextSibling 属性用于获取下一个兄弟节点，如果没有则返回 null 。如果只想获取下一个兄弟元素节点可以用 nextElementSibling 属性。

- 语法：node.nextSibling
- 返回值：节点对象 或 null

## 属性描述
nextSibling 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'nextSibling') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. nextSibling 属性是只读的，赋值无效
2. nextSibling 属性的值可以是元素节点，文本节点或注释节点

## 参考资料
1. [MDN: nextSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)
2. [w3schools: nextSibling](http://www.w3schools.com/jsref/prop_node_nextsibling.asp)
3. https://msdn.microsoft.com/en-us/library/ms534189(v=vs.85).aspx
4. http://stackoverflow.com/questions/26945438/this-nextsibling-not-working
5. http://stackoverflow.com/questions/24226571/what-is-the-difference-between-node-nextsibling-and-childnode-nextelementsibling
