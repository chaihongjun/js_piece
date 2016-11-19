# Node.appendChild()

## W3C 标准
```html
appendChild modified in DOM Level 3

    Adds the node newChild to the end of the list of children of this node. 
    If the newChild is already in the tree, it is first removed.
    
    Parameters: newChild of type Node,The node to add.
        If it is a DocumentFragment object, the entire contents of the document 
        fragment are moved into the child list of this node
    
    Return Value: Node,The node added.
  
    Exceptions: DOMException
        HIERARCHY_REQUEST_ERR: Raised if this node is of a type that does not 
        allow children of the type of the newChild node, or if the node to 
        append is one of this node's ancestors or this node itself, or if 
        this node is of type Document and the DOM application attempts to 
        append a second DocumentType or Element node.
        
        WRONG_DOCUMENT_ERR: Raised if newChild was created from a different 
        document than the one that created this node.
        
        NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly or if 
        the previous parent of the node being inserted is readonly.
        
        NOT_SUPPORTED_ERR: if the newChild node is a child of the Document node, 
        this exception might be raised if the DOM implementation doesn't support 
        the removal of the DocumentType child or Element child.
```
[Document Object Model (DOM) Level 3 Core Specification
 The definition of 'Node.appendChild()' in that specification.](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-184E7107)

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