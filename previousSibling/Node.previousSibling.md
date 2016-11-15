# previousSibling

## w3c标准
> **previousSibling of type Node, readonly**
>
>  The node immediately preceding this node. If there is no such node, this returns null.

## 定义和用法
节点（Node）的previousSibling属性用于获得前一个兄弟节点（可以是元素节点，文本节点，注释节点），如果没有则返回null。如果你只想获得前一个兄弟元素节点可以用previousElementSibling属性。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>previousSibling</title>
</head>
<body>
    <div id="wrap">
<div id="child1"></div>
<div id="child2"></div>
    </div>
    <script>
        var wrap = document.getElementById('wrap');
        var child1 = document.getElementById('child1');
        var child2 = document.getElementById('child2');

        console.log(child2.previousSibling); // 获得child2的前一个兄弟节点：\n
        console.log(child2.previousSibling.data === '\n'); // true

        console.log(child2.previousElementSibling); // 获得child2的前一个兄弟元素节点：child1
        console.log(child2.previousElementSibling === child1);// true

        console.log(child2.previousSibling = 'you'); // you
        console.log(child2.previousSibling); // previousSibling是只读的
    </script>
</body>
</html>
```
## 注意事项
1. previousSibling属性是只读的，赋值无效
2. previousSibling属性的值可以是元素节点（1），文本节点（3）或注释节点（8）

## 参考资料
1. https://developer.mozilla.org/zh-CN/docs/Web/API/Node/previousSibling
2. http://www.w3schools.com/jsref/prop_node_previoussibling.asp
3. https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/Whitespace_in_the_DOM
4. http://stackoverflow.com/questions/10924086/how-to-get-the-previous-sibling-name
5. http://stackoverflow.com/questions/20768925/parentnode-and-previoussibling-in-javascript