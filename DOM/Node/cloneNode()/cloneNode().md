# Node.prototype.cloneNode()

## W3C 标准
[DOM Level 3 Core: cloneNode](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-3A0ED0A4)

## 定义和用法
节点（Node）的cloneNode(deep)方法用于复制指定节点。

> 语法：Node.cloneNode( deep )
>
> 参数：deep:boolean，true表示复制后代节点，false不复制后代节点，默认为false
>
> 返回值：复制的节点对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>cloneNode()</title>
    <style>
        *{
            margin:0;padding:0;
        }
        .parent{
            width:200px;height:200px;margin:0 auto;overflow:hidden;
            background:red;
        }
        .child{
            width:100px;height:100px;margin:50px auto;overflow:hidden;
            background:green;
        }
        .grandson{
            width:50px;height:50px;margin:25px auto;
            background:blue;
        }
        #id{
            height:10px;
            background:#323232;
        }
    </style>
</head>
<body>
    <div class="parent" onclick="getRed()">
        <div class="child">
            <div class="grandson"></div>
        </div>
    </div>
    <div id="id"></div>
<script>
    var parent = document.querySelector('.parent');
    var child = parent.querySelector('.child');
    var grandson = child.querySelector('.grandson');
    var eleId = document.getElementById('id');

    console.log(parent.cloneNode()); // 不传参数默认为false，只复制本身
    console.log(parent.cloneNode(true)); // 参数为true，复制本身和后代节点
    console.log(eleId.cloneNode());// id会复制，为了防止id重复，可以手动修改

    function getRed() {
        console.log('red');
        event.stopPropagation();
    }
    function getGreen() {
        console.log('green');
        event.stopPropagation();
    }
    function getBlue() {
        console.log('blue');
        event.stopPropagation();
    }
    child.addEventListener('click',getGreen,false);
    grandson.onclick = getBlue;

    // 点击第一个正方形相应的颜色会打印出来，点击第二个正方形相应的颜色都打印red
    // 说明只有内联的事件绑定会复制，用addEventListener和给onclick赋值的方式绑定的事件都不会复制
    document.body.appendChild(parent.cloneNode(true));
</script>
</body>
</html>
```

## 注意事项
1. 对于事件，只有内联的事件绑定会复制，用addEventListener和给onclick赋值的方式绑定的事件都不会复制
2. 对于有id和name属性的节点复制，id和name会重复，可以手动修改

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
2. http://www.w3schools.com/jsref/met_node_clonenode.asp

## 更多
本知识块的markdown和demo源文件在github上，[点击这里](https://github.com/jserz/js_piece)查看