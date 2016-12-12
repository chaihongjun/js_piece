# Node.prototype.compareDocumentPosition()

## W3C 标准
[DOM Level 3 Core: compareDocumentPosition](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-compareDocumentPosition)

## 定义和用法
节点（Node）的compareDocumentPosition(node)方法用于比较两个节点在文档中的位置。
> 用法：n1.compareDocumentPosition(n2)
>
> 参数：节点对象
>
> 返回值：整数

返回值 | 对应常量 | 意义
--- | --- | ---
0 | 无 | 同一节点
1 | Node.DOCUMENT_POSITION_DISCONNECTED | 没有位置关系，一般表示两个节点不在同一个文档中
2 | Node.DOCUMENT_POSITION_PRECEDING |  n2在n1的前面
4 | Node.DOCUMENT_POSITION_FOLLOWING | n2在n1的后面
8 | Node.DOCUMENT_POSITION_CONTAINS | n2包含n1
16 | Node.DOCUMENT_POSITION_CONTAINED_BY | n2包含于n1
32 | Node.DOCUMENT_POSITIOIN_IMPLIMENTATION_SPECIFIC  | 没有位置关系，或n2和n1是同一元素的属性节点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>compareDocumentPosition()</title>
</head>
<body>
    <div class="parent">
        <div class="child1" data-github="jserz"></div>
        <div class="child2" id="jszhou"></div>
    </div>
    <script>
        var parent = document.querySelector('.parent');
        var child1 = parent.querySelector('.child1');
        var child2 = parent.querySelector('.child2');
        var classAttr = child2.getAttributeNode('class');
        var idAttr = child2.getAttributeNode('id');

        //表示child1在child2的前面
        console.log(child2.compareDocumentPosition(child1)); // 2
        console.log(child2.compareDocumentPosition(child1) === Node.DOCUMENT_POSITION_PRECEDING); // true

        //飙升child2在child1的后面
        console.log(child1.compareDocumentPosition(child2)); // 4
        console.log(child1.compareDocumentPosition(child2) === Node.DOCUMENT_POSITION_FOLLOWING); // true

        //表示parent包含child1（8）同时parent在child1前面（2），8+2
        console.log(child1.compareDocumentPosition(parent)); // 10

        //表示child1包含于parent（16）同时child1在parent后面（4），16+4
        console.log(parent.compareDocumentPosition(child1)); // 20

        //表示classAttr和idAttr是同一个元素的属性（32）同时idAttr在classAttr后面（4），32+4
        console.log(classAttr.compareDocumentPosition(idAttr)); // 36

        console.log(child2.compareDocumentPosition(child2)); // 0
    </script>
</body>
</html>
```

## 注意事项
1. 返回值可能会组合以上几种情况并返回它们的和。比如n2是n1的父元素，包括两种情况：n2包含n1（8）和n2在n1的前面（2），结果返回10
2. 如果n2和n1是同一节点，则返回0

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
2. http://www.w3schools.com/jsref/met_node_comparedocumentposition.asp
3. http://help.dottoro.com/ljgoeost.php
4. https://segmentfault.com/a/1190000004177042#articleHeader2

## 更多
本知识块的markdown和demo源文件在github上，[点击这里](https://github.com/jserz/js_piece)查看