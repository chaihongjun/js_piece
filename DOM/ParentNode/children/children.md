# ParentNode.prototype.children

## W3C 标准
[DOM4: children](https://www.w3.org/TR/dom/#dom-parentnode-children)，
[WHATWG: children](https://dom.spec.whatwg.org/#dom-parentnode-children)

## 定义和用法
节点的children属性用于获取子元素节点的集合。这个集合是一个实时更新的HTMLCollection对象。

- 语法：node.children
- 返回值：HTMLCollection对象


## 注意事项
1. 只有元素节点，文档节点和文档片段节点有children属性
2. 返回值是一个实时更新的HTMLCollection对象，子元素节点的增删都会实时同步到这个对象中
3. children属性是只读的，赋值无效

[示例代码](./children.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children