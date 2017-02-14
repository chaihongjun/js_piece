# ParentNode.prototype.children

## 标准
[WHATWG: children](https://dom.spec.whatwg.org/#dom-parentnode-children)

## 定义和用法
节点的 children 属性用于获取子元素节点的集合。这个集合是一个实时更新的 HTMLCollection 对象。

- 语法：node.children
- 返回值：HTMLCollection 对象

## 属性描述
children 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Element.prototype, 'children') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有 children 属性。
2. 返回值是一个实时更新的 HTMLCollection 对象，子元素节点的增删都会实时同步到这个对象中。
3. children 属性是只读的，赋值无效。

## 参考资料
1. [MDN: children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)
2. [stackoverflow: what is the difference between children and childnodes in javascript](http://stackoverflow.com/questions/7935689/what-is-the-difference-between-children-and-childnodes-in-javascript)
