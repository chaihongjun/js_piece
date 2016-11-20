# Node.appendChild()

## W3C 标准
[DOM Level 3 Core： appendChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-184E7107)

## 定义和用法
节点（Node）的appendChild(newChildNode)方法用于把newChildNode插入指定节点内容的末尾，如果newChildNode已经在文档中则先剪切再插入。

> 语法：Node.appendChild( newChildNode )
>
> 参数：节点对象（a node object）
>
> 返回值：插入的节点对象在文档中的引用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>appendChild</title>
    <style>
        .parent{
            min-height: 200px;
            background: #ccc;
        }
        .other{
            background: #2bb8aa;
        }
        .child{
            background: #ff8e3f;
        }
    </style>
</head>
<body>
    <button class="js_append_new">插入新节点</button>
    <button class="js_append_other">插入other</button>
    <div class="parent">parent</div>
    <div class="other">other</div>
<script>
    var parent = document.querySelector('.parent');
    var other = document.querySelector('.other');
    var appendNewBtn = document.querySelector('.js_append_new');
    var appendOtherBtn = document.querySelector('.js_append_other');

    function appendNew() {
        //创建一个元素节点
        var newChild = document.createElement('div');
        newChild.setAttribute('class','child');
        newChild.innerHTML = 'newChild';
        //把newChild插入parent内容的末尾
        parent.appendChild(newChild);
    }
    //给appendNewBtn绑定点击事件
    appendNewBtn.addEventListener('click',appendNew,false);

    function appendOther() {
        //把other剪切再插入parent内容的末尾
        parent.appendChild(other);
    }
    //给appendOtherBtn绑定点击事件
    appendOtherBtn.addEventListener('click',appendOther,false);
</script>
</body>
</html>
```
[在jsfiddle查看例子](https://jsfiddle.net/jszhou/57acvw71/7/)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
2. http://www.w3schools.com/jsref/met_node_appendchild.asp
3. [element.innerHTML和appendChild有什么区别](https://segmentfault.com/q/1010000004693112)

## 更多
本知识块的markdown和demo源文件在github上，[点击这里](https://github.com/jserz/js_piece)查看