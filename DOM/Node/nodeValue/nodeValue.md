# Node.prototype.nodeValue

## 标准
[WHATWG: nodeValue](https://dom.spec.whatwg.org/#dom-node-nodevalue)

## 定义和用法
节点的 nodeValue 属性用于获取和设置节点值。

- 获取节点值
    - 语法：node.nodeValue
    - 返回值：节点值（DOMString） 或 null
    
        节点 | 默认值
        --- | ---
        元素节点 | null
        属性节点 | 属性值
        文本节点 | 文本内容
        注释节点 | 注释内容
        文档节点（document） | null
        文档类型节点（documentType） | null
        文档片段节点（documentFragment） | null

- 设置节点值
    - 语法：node.nodeValue = 你要设置的值

## 属性描述
nodeValue 属性可配置，可枚举，可取值，可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'nodeValue') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: function () { /*[native code]*/ }
}
```

## 注意事项
1. nodeValue 属性可取值可赋值
2. 如果 nodeValue 属性的默认值为null，则赋值无效

## 参考资料
1. [MDN: nodeValue](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)
2. [w3schools: nodeValue](http://www.w3schools.com/jsref/prop_node_nodevalue.asp)
