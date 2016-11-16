# previousSibling

## w3c标准
>  Accessing this attribute of an element must return a reference to the sibling node of that element which most immediately precedes that element in document order, and which is of nodeType 1, as an Element object. If the element on which this attribute is accessed does not have any preceding sibling nodes, or if none of those preceding sibling nodes are element nodes, then this attribute must return null.

## 定义和用法
节点（Node）的previousElementSibling属性用于获取前一个兄弟元素节点（忽略文本节和注释节点），如果没有则返回null。

> 语法：Node.previousElementSibling

> 返回值：元素节点对象（A Element Node Object） 或 null

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>previousElementSibling</title>
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

        console.log(child2.previousElementSibling); // 获得child2的前一个兄弟元素节点：child1（忽略了注释节点和文本节点）
        console.log(child2.previousElementSibling === child1);// true
        console.log(child2.previousElementSibling.nodeType); // 1

        child2.previousElementSibling = 'you';
        console.log(child2.previousElementSibling); // 结果不变，previousElementSibling是只读的
    </script>
</body>
</html>
```
## 注意事项
1. previousElementSibling属性是只读（readonly）的，赋值无效
2. previousElementSibling属性的值只能是元素节点或null，忽略文本节点和注释节点

## 兼容性和polyfill

> 兼容性：IE9+

**polyfill**
```javascript
var previousElementSibling = function (el) {
    if (el.previousElementSibling) {
        return el.previousElementSibling;
    } else {
        while (el = el.previousSibling) {
            if (el.nodeType === 1) {
                return el;
            }
        }
        
        return null;
    }
}
```

## 参考资料
1. https://msdn.microsoft.com/en-us/library/ff974797(v=vs.85).aspx
2. https://developer.mozilla.org/zh-CN/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling
3. http://www.w3schools.com/jsref/prop_element_previouselementsibling.asp
4. http://help.dottoro.com/ljfaxuox.php
5. [parentNode or previousElementSibling not working in IE8](http://stackoverflow.com/questions/5197825/parentnode-or-previouselementsibling-not-working-in-ie8)