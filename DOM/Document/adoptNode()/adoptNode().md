# Document.prototype.adoptNode

## 标准
[WHATWG: adoptNode](https://dom.spec.whatwg.org/#dom-document-adoptnode)

## 定义和用法
文档节点的 adoptNode 方法用于导入外部文档中的节点，先剪切再导入。

- 语法：document.adoptNode()
- 参数：其他文档中的节点
- 返回值：导入后的节点

## 属性描述
adoptNode 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'adoptNode') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.adoptNode
}
```

## 注意事项
1. 标准的 appendChild 是不能直接插入其他文档中的节点，只能用 adoptNode 和 importNode 先导入再插入，但是现在 appendChild 的实现可以直接插入其他文档中的节点。

## 参考资料
1. [MDN: adoptNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode)
