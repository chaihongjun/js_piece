# Node.previousSibling

## w3c标准
[DOM Level 3 Core: previousSibling](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8)

## 定义和用法
节点（Node）的previousSibling属性用于获取前一个兄弟节点（可以是元素节点，文本节点，注释节点），如果没有则返回null。如果只想获取前一个兄弟元素节点可以用previousElementSibling属性。

> 语法：Node.previousSibling

> 返回值：节点对象（A Node Object） 或 null

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>previousSibling</title>
</head>
<body>
    <div id="wrap">
<!--注释 comment--><div id="child1"></div>
<div id="child2"></div>
    </div>
    <script>
        var wrap = document.getElementById('wrap');
        var child1 = document.getElementById('child1');
        var child2 = document.getElementById('child2');

        console.log(child2.previousSibling); // 获得child2的前一个兄弟节点：\n
        console.log(child2.previousSibling.nodeValue === '\n'); // true
        console.log(child2.previousSibling.nodeType); // 3
        
        console.log('1.================================================');

        console.log(child2.previousElementSibling); // 获得child2的前一个兄弟元素节点：child1（忽略了注释节点和文本节点）
        console.log(child2.previousElementSibling === child1);// true
        console.log(child2.previousElementSibling.nodeType); // 1
        
        console.log('2.================================================');

        child2.previousSibling = 'you';
        console.log(child2.previousSibling); // 结果不变，previousSibling是只读的
        
        console.log('3.================================================');

        console.log(child1.previousSibling); // '<!--注释 comment-->'
        console.log(child1.previousSibling.nodeValue === '注释 comment'); // true
        console.log(child1.previousSibling.nodeType); // 8
        console.log(child1.previousSibling.previousSibling); // '\n'
    </script>
</body>
</html>
```
## 注意事项
1. previousSibling属性是**只读**（readonly）的，赋值无效
2. previousSibling属性的值可以是元素节点（1），文本节点（3）或注释节点（8）

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling
2. http://www.w3schools.com/jsref/prop_node_previoussibling.asp
3. https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/Whitespace_in_the_DOM
4. http://stackoverflow.com/questions/10924086/how-to-get-the-previous-sibling-name
5. http://stackoverflow.com/questions/20768925/parentnode-and-previoussibling-in-javascript