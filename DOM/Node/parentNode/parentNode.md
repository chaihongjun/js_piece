# Node.prototype.parentNode

## 标准
[WHATWG: parentNode](https://dom.spec.whatwg.org/#dom-treewalker-parentnode)

## 定义和用法
节点的 parentNode 属性用于获取指定节点的父节点。如果没有父节点，则返回null。

- 语法：node.parentNode
- 返回值：元素节点，文档节点，文档片段节点 或 null

## 属性描述
parentNode 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'parentNode') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. parentNode 属性是只读的，赋值无效
2. 属性节点，文档节点，文档片段节点的 parentNode 属性值都为null
3. 未插入文档中的节点的 parentNode 属性值为null

## 参考资料
1. [MDN: parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
2. [w3schools: parentNode](http://www.w3schools.com/jsref/prop_node_parentnode.asp)
