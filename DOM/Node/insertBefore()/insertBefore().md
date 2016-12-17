# Node.prototype.insertBefore()

## W3C 标准
[DOM4: insertBefore()](https://www.w3.org/TR/dom/#dom-node-insertbefore)

## 定义和用法
节点的insertBefore()方法用于在指定子节点之前插入节点。如果要插入的节点已经在文档中，则先剪切再插入。

- 用法：node.insertBefore(newNode,referenceNode)
- 参数：

    - newNode，要插入的节点，必填，
    - referenceNode，参照子节点，必填。其值可以是子节点，null或undefined
- 返回值：newNode

## 注意事项
1. referenceNode参数是必填的，如果其值为null或undefined，则newNode插入指定节点的内容末尾。

## insertAfter的polyfill
> 原生javascript不支持insertAfter方法，用以下polyfill支持，代码来源于
[这里](http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library)

```javascript
(function(ndp) {
    ndp.insertAfter = ndp.insertAfter || function(newNode, referenceNode) {
        if(arguments.length < 2){
            throw(new TypeError('Failed to execute \'insertAfter\' on \'Node\': 2 arguments required, but only '+ arguments.length +' present.'));
        }
        if(typeof(newNode) === 'object' && newNode !== null && newNode.nodeType > 0){
            if(referenceNode === null || referenceNode === undefined){
                return this.insertBefore(newNode, referenceNode);
            }
            if(typeof(referenceNode) === 'object' && referenceNode.nodeType > 0){
                return this.insertBefore(newNode, referenceNode.nextSibling);
            }
            throw(new TypeError('Failed to execute \'insertAfter\' on \'Node\': parameter 2 is not of type \'Node\'.'));
        }
        throw(new TypeError('Failed to execute \'insertAfter\' on \'Node\': parameter 1 is not of type \'Node\'.'));
    };
})(Node.prototype);
```

[示例代码](./insertBefore().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
2. http://www.w3schools.com/jsref/met_node_insertbefore.asp
3. http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library