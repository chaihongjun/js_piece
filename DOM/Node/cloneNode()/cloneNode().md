# Node.prototype.cloneNode()

## W3C 标准
[WHATWG: cloneNode](https://dom.spec.whatwg.org/#dom-node-clonenode)

## 定义和用法
节点（Node）的cloneNode(deep)方法用于复制节点。

- 语法：Node.cloneNode( deep )
- 参数：deep:boolean，true表示复制后代节点，false不复制后代节点，默认为false
- 返回值：复制的节点对象

## 属性描述
cloneNode属性可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'cloneNode') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.cloneNode
}
```

## 注意事项
1. 对于事件，只有内联的事件绑定会复制，用addEventListener和给onclick赋值的方式绑定的事件都不会复制
2. 对于有id和name属性的节点复制，id和name会重复，可以手动修改

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
2. http://www.w3schools.com/jsref/met_node_clonenode.asp

## 更多
本知识块的markdown和demo源文件在github上，[点击这里](https://github.com/jserz/js_piece)查看