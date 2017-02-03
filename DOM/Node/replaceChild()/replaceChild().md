# Node.prototype.replaceChild()

## 标准
[WHATWG: replaceChild](https://dom.spec.whatwg.org/#dom-node-replacechild)

## 定义和用法
节点的 replaceChild 方法用于替换子节点。

- 语法：parentNode.replaceChild(newChild, oldChild);
- 参数：
    - newChild：用于替换的节点，必填
    - oldChild：被替换的子节点，必填
- 返回值：oldChild（被替换的子节点在内存中的引用）

## 属性描述
replaceChild 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'replaceChild') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.replaceChild
}
```

## 注意事项
1. 如果newChild节点在文档中，则先剪切再用于替换

## 参考资料
1. [MDN: replaceChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
