# Node.nextSibling

## w3c标准
> **nextSibling of type Node, readonly**
>
> The node immediately following this node. If there is no such node, this returns null.

## 定义和用法
节点（Node）的nextSibling属性用于获取后一个兄弟节点（可以是元素节点，文本节点，注释节点），如果没有则返回null。如果只想获取后一个兄弟元素节点可以用nextElementSibling属性。

> 语法：Node.nextSibling

> 返回值：节点对象（A Node Object） 或 null

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>nextSibling</title>
</head>
<body>
    <div id="wrap">
<div id="child1"></div>
<div id="child2"></div><!--注释 comment-->
    </div>
    <script>
        var wrap = document.getElementById('wrap');
        var child1 = document.getElementById('child1');
        var child2 = document.getElementById('child2');

        console.log(child1.nextSibling); // 获得child1的后一个兄弟节点：\n（换行符）
        console.log(child1.nextSibling.nodeValue === '\n'); // true
        console.log(child1.nextSibling.nodeType); // 3
        console.log(child1.nextSibling.nodeName); //#text

        console.log('1.================================================');

        console.log(child1.nextElementSibling); // 获得child1的后一个兄弟元素节点：child2
        console.log(child1.nextElementSibling === child2);// true
        console.log(child1.nextElementSibling.nodeType); // 1
        console.log(child1.nextElementSibling.nodeName); // DIV

        console.log('2.================================================');

        child1.nextSibling = 'you';
        console.log(child1.nextSibling); // 结果不变，nextSibling是只读的

        console.log('3.================================================');

        console.log(child2.nextSibling); // '<!--注释 comment-->'
        console.log(child2.nextSibling.nodeValue === '注释 comment'); // true
        console.log(child2.nextSibling.nodeType); // 8
        console.log(child2.nextSibling.nodeName); // #comment
        console.log(child2.nextSibling.nextSibling); // '\n'
        console.log(child2.nextSibling.nextSibling.nodeName); // #text
    </script>
</body>
</html>
```
## 注意事项
1. nextSibling属性是**只读**（readonly）的，赋值无效
2. nextSibling属性的值可以是元素节点（1），文本节点（3）或注释节点（8）

## 参考资料
1. https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nextSibling
2. http://www.w3schools.com/jsref/prop_node_nextsibling.asp
3. https://msdn.microsoft.com/en-us/library/ms534189(v=vs.85).aspx
4. http://stackoverflow.com/questions/26945438/this-nextsibling-not-working
5. http://stackoverflow.com/questions/24226571/what-is-the-difference-between-node-nextsibling-and-childnode-nextelementsibling