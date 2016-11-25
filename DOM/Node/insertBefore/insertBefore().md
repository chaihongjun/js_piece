# Node.insertBefore()

## W3C 标准
[DOM Level 3 Core: insertBefore](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-952280727)

## 定义和用法
节点（node）的insertBefore(newNode,referenceNode)方法用于在指定节点的某个子节点之前插入子节点。如果newNode是已经在文档中的节点，则先剪切再插入。

1. 用法：node.insertBefore(newNode,referenceNode)
2. 参数：

    - newNode，要插入的子节点，必填，
    - referenceNode，参照子节点，必填。其值可以是子节点，null或undefined
3. 返回值：newNode

## 注意事项
1. referenceNode参数是必填的，如果其值为null或undefined，则newNode插入指定节点的内容末尾。

## 用insertBefore实现insertAfter的功能

```javascript
var insertAfter = function(parentNode,newNode,referenceNode) {
    return parentNode.insertBefore(newNode,referenceNode.nextSibling)
}
```

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
2. http://www.w3schools.com/jsref/met_node_insertbefore.asp