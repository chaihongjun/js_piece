# Node.prototype.lastChild

## 标准
[WHATWG: lastChild](https://dom.spec.whatwg.org/#dom-node-lastchild)

## 定义和用法
节点的 lastChild 属性用于获得最后一个子节点。如果没有子节点则返回null。如果想获得最后一个元素子节点用 lastElementChild.

- 语法：node.lastChild
- 返回值：节点对象 或 null

## 属性描述
lastChild 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'lastChild') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. lastChild 属性是只读的，赋值无效
2. 返回的子节点可以是元素节点，文本节点,注释节点或文档类型节点

## 参考资料
1. [MDN: lastChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
2. [w3schools: lastChild](http://www.w3schools.com/jsref/prop_node_lastchild.asp)
