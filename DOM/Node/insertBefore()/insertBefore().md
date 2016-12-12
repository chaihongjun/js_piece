# Node.prototype.insertBefore()

## W3C 标准
[DOM Level 3 Core: insertBefore](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-952280727)

## 定义和用法
节点（node）的insertBefore(newNode,referenceNode)方法用于在指定节点的某个子节点之前插入子节点。如果newNode是已经在文档中的节点，则先剪切再插入。

- 用法：node.insertBefore(newNode,referenceNode)
- 参数：

    - newNode，要插入的子节点，必填，
    - referenceNode，参照子节点，必填。其值可以是子节点，null或undefined
- 返回值：newNode

## 注意事项
1. referenceNode参数是必填的，如果其值为null或undefined，则newNode插入指定节点的内容末尾。

## insertAfter的polyfill
> 原生javascript不支持insertAfter方法，用以下polyfill支持，代码来源于[这里](http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library)

```javascript
(function() {
    if('insertAfter' in window.Node.prototype){
        return;
    }
    window.Node.prototype.insertAfter = function(newNode, referenceNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
})();
```

[示例代码](./insertBefore().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
2. http://www.w3schools.com/jsref/met_node_insertbefore.asp
3. http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library