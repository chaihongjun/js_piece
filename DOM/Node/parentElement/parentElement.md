# Node.prototype.parentElement

## 标准
[WHATWG: parentElement](https://dom.spec.whatwg.org/#parent-element)

## 定义和用法
节点的 parentElement 属性用于获取指定节点的父元素节点。如果没有父元素节点，则返回null。

- 语法：node.parentElement
- 返回值：元素节点 或 null

## 属性描述
parentElement 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'parentElement') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. parentElement 属性是只读的，赋值无效
2. 属性节点，文档节点，文档类型节点，文档片段节点的 parentElement 属性值都为 null
3. 未插入文档中的节点的 parentElement 属性值为 null

## 参考资料
1. [MDN: parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
2. [w3schools: parentElement](http://www.w3schools.com/jsref/prop_node_parentelement.asp)
