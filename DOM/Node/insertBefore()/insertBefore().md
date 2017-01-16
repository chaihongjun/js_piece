# Node.prototype.insertBefore()

## W3C 标准
[WHATWG: insertBefore](https://dom.spec.whatwg.org/#dom-node-insertbefore)

## 定义和用法
节点的insertBefore方法用于在指定子节点之前插入节点。如果要插入的节点已经在文档中，则先剪切再插入。

- 用法：node.insertBefore(newNode,referenceNode)
- 参数：
    - newNode，要插入的节点，必填，
    - referenceNode，参照子节点，必填。其值可以是子节点，null或undefined
- 返回值：newNode

## 注意事项
1. referenceNode参数是必填的，如果其值为null或undefined，则newNode插入指定节点的内容末尾。


## 示例代码
insertBefore方法用于在指定子节点之前插入节点。
```html
<!--运行前-->
<body>
    <div class="js-wrap">wrap</div>
    <script>
        var wrap = document.querySelector('.js-wrap');
        document.body.insertBefore(document.createElement('p'), wrap);
    </script>
</body>

<!--运行后-->
<body>
    <p></p>
    <div class="js-wrap">wrap</div>
    <script>
        var wrap = document.querySelector('.js-wrap');
        document.body.insertBefore(document.createElement('p'), wrap);
    </script>
</body>
```
referenceNode参数是必填的，如果其值为null或undefined，则newNode插入指定节点的内容末尾。
```html
<!--运行前-->
<body>
    <script>
        document.body.insertBefore(document.createElement('p'), null);
        document.body.insertBefore(document.createElement('i'), undefined);
    </script>
</body>

<!--运行后-->
<body>
    <script>
        document.body.insertBefore(document.createElement('p'), null);
        document.body.insertBefore(document.createElement('i'), undefined);
    </script>
    <p></p>
    <i></i>
</body>
```
如果要插入的节点已经在文档中，则先剪切再插入。
```html
<!--运行前-->
<div class="js-wrap">
    <div class="js-child">child</div>
</div>
<div class="js-zhou">zhou</div>
<script>
    var $ = document.querySelector.bind(document),
        wrap = $('.js-wrap'),
        child = $('.js-child'),
        zhou = $('.js-zhou');

    wrap.insertBefore(zhou, child);
</script>

<!--运行后-->
<div class="js-wrap">
    <div class="js-zhou">zhou</div>
    <div class="js-child">child</div>
</div>
<script>
    var $ = document.querySelector.bind(document),
        wrap = $('.js-wrap'),
        child = $('.js-child'),
        zhou = $('.js-zhou');

    wrap.insertBefore(zhou, child);
</script>
```

## insertAfter的polyfill
原生javascript不支持insertAfter方法，可以用以下polyfill支持。
```javascript
// source: https://github.com/jserz/domPlus/blob/master/src/insertAfter()/insertAfter.js
Node.prototype.insertAfter = Node.prototype.insertAfter || function (newNode, referenceNode) {
  function isNode(node) {
    return node instanceof Node;
  }
  
  if(arguments.length < 2){
    throw(new TypeError("Failed to execute 'insertAfter' on 'Node': 2 arguments required, but only "+ arguments.length +" present."));
  }
  
  if(isNode(newNode)){
    if(referenceNode === null || referenceNode === undefined){
      return this.insertBefore(newNode, referenceNode);
    }
    
    if(isNode(referenceNode)){
      return this.insertBefore(newNode, referenceNode.nextSibling);
    }
    
    throw(new TypeError("Failed to execute 'insertAfter' on 'Node': parameter 2 is not of type 'Node'."));
  }
  
  throw(new TypeError("Failed to execute 'insertAfter' on 'Node': parameter 1 is not of type 'Node'."));
};
```

## 参考资料
1. [MDN: insertBefore][1]
2. [w3schools: insertBefore][2]
3. [stackoverflow: how to do insert after in javascript without using a library][3]


[1]: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
[2]: http://www.w3schools.com/jsref/met_node_insertbefore.asp
[3]: http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library
