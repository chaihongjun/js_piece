# Node.prototype.hasChildNodes()

## W3C 标准
[WHATWG：hasChildNodes](https://dom.spec.whatwg.org/#dom-node-haschildnodes)

## 定义和用法
节点的hasChildNodes方法用于判断指定节点是否包含子节点。返回值为布尔值，true表示有子节点，false表示没有子节点。

- 语法：node.hasChildNodes()
- 参数：无
- 返回值：true 或 false

## 属性描述
hasChildNodes方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'hasChildNodes') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.hasChildNodes
}
```

## 注意事项
1. hasChildNodes()方法不需要传参数
2. 子节点可以是元素节点，文本节点，注释节点

## 判断是否有子节点的方法总结
1. node.firstChild !== null
2. node.childNodes.length > 0 
3. node.hasChildNodes()

## 
```html
<div class="js-textWrap"> </div>
<div class="js-commentWrap"><!--注释 comment--></div>
<div class="js-elementWrap"><div class="js-child"></div></div>
<script>
    var log = console.log.bind(console),
        $ = document.querySelector.bind(document),
        textWrap = $('.js-textWrap'),
        commentWrap = $('.js-commentWrap'),
        elementWrap = $('.js-elementWrap'),
        child = $('.js-child');

    // textWrap 包括一个空格（文本节点），所以为true
    log(textWrap.hasChildNodes()); // true
    // commentWrap 包括一个注释节点，所以为true
    log(commentWrap.hasChildNodes()); // true
    // elementWrap 包括child，所以为true
    log(elementWrap.hasChildNodes()); // true
    // child 不包括子节点，所以为false
    log(child.hasChildNodes()); // false

    //判断是否有子节点的方法总结
    log(textWrap.hasChildNodes()); // true
    log(textWrap.firstChild !== null); // true
    log(textWrap.childNodes.length > 0 ); // true
</script>
```

## 参考资料
1. [MDN: hasChildNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes)
2. [w3schools: hasChildNodes](http://www.w3schools.com/jsref/met_node_haschildnodes.asp)
3. [stackoverflow: how to check if element has any children in javascript](http://stackoverflow.com/questions/2161634/how-to-check-if-element-has-any-children-in-javascript)