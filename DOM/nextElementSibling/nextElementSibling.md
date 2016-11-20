# Node.nextElementSibling

## W3C 标准
[Element Traversal Specification: nextElementSibling](https://www.w3.org/TR/ElementTraversal/#attribute-nextElementSibling)

## 定义和用法
节点（Node）的nextElementSibling属性用于获取后一个兄弟元素节点（忽略文本节点和注释节点），如果没有则返回null。

> 语法：Node.nextElementSibling
>
> 返回值：元素节点对象（A Element Node Object） 或 null

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>nextElementSibling</title>
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

        console.log(child1.nextElementSibling); // 获得child1的后一个兄弟元素节点：child2（忽略了注释节点和文本节点）
        console.log(child1.nextElementSibling === child2);// true
        console.log(child1.nextElementSibling.nodeType); // 1

        console.log('1.================================================');

        child1.nextElementSibling = 'you';
        console.log(child1.nextElementSibling); // 结果不变，nextElementSibling是只读的

        console.log('2.================================================');

        console.log(child2.nextElementSibling); // null
    </script>
</body>
</html>
```
## 注意事项
1. nextElementSibling属性是**只读**（readonly）的，赋值无效
2. nextElementSibling属性的值只能是元素节点或null，忽略文本节点和注释节点

## 兼容性和polyfill

> 兼容性：IE9+

**polyfill**
```javascript
var nextElementSibling = function (el) {
    if (el.nextElementSibling) {
        return el.nextElementSibling;
    }
    
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    
    return null;
}
```

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling
2. http://www.w3schools.com/jsref/prop_element_nextelementsibling.asp

## 更多
本知识块的markdown和demo源文件在github上，[点击这里](https://github.com/jserz/js_piece)查看