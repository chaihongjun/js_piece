# Node.prototype.normalize()

## 标准
[WHATWG: normalize](https://dom.spec.whatwg.org/#dom-node-normalize)

## 定义和用法
节点的 normalize 方法用于规范化后代文本节点。规范化操作包括：删除后代中的空文本节点和合并后代中的相邻文本节点。

- 语法：node.normalize()
- 参数：无
- 返回值：undefined

## 属性描述
normalize 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'normalize') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.normalize
}
```

## 注意事项
1. 可以用 document.normalize() 规范化整个文档的后代文本节点

## 参考资料
1. [MDN: normalize](https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize)
2. [w3schools: normalize](http://www.w3schools.com/jsref/met_node_normalize.asp)
