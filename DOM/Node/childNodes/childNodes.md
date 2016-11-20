# Node.childNodes

## W3C 标准

[W3C DOM 3 Core: childNodes](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1451460987)

## 定义和用法
节点(Node)的childNodes属性用于获取子节点的集合，该属性是只读的。获得的子节点集合是动态的，会随子节点的改变而改变。子节点集合中包括元素节点，文本节点和注释节点。如果只想获得元素节点集合可以用Element.children属性。
> 用法：Node.childNodes
> 
> 返回值：NodeList（类数值对象）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>childNodes</title>
</head>
<body>
<div class="parent1">
<div class="child1"></div><!--注释 comment-->
<div class="child2"></div>
</div>
<div class="parent2"></div>
<script>
    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');
    var childNodes = parent1.childNodes;
    var children = parent1.children;

    console.log(childNodes); // 打印出：包含六个子节点的NodeList对象
    console.log(parent2.childNodes); // 打印出：一个空NodeList对象
    console.log(children); // 打印出：只包含两个div元素节点的HTMLCollection对象

    var child = document.createElement('div');
    child.textContent = 'newdiv';
    parent1.appendChild(child);
    
    console.log(childNodes); //打印出：包含七个子节点的NodeList对象，说明childNodes的结果是动态的
    console.log(children); // 打印出：只包含三个div元素节点的HTMLCollection对象，说明children的结果也是动态的
</script>
</body>
</html>
```

## 注意事项
1. childNodes属性是**只读**（readonly）的，赋值无效
2. 获得的是一个动态的子节点集合（a live collection of child nodes）
3. 子节点集合包括元素节点，文本节点和注释节点

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
2. http://www.w3schools.com/jsref/prop_node_childnodes.asp
3. [stackoverflow:What is the difference between children and childNodes in JavaScript?](http://stackoverflow.com/questions/7935689/what-is-the-difference-between-children-and-childnodes-in-javascript)
4. [stackoverflow:best way to get child nodes](http://stackoverflow.com/questions/10381296/best-way-to-get-child-nodes)