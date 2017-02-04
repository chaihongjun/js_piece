# Node.prototype.childNodes

## 标准
[WHATWG: childNodes](https://dom.spec.whatwg.org/#dom-node-childnodes)

## 定义和用法
节点的 childNodes 属性用于获取子节点的集合。获得的子节点集合是动态的，会随子节点的改变而改变。如果只想获得子元素节点集合可以用 node.children 属性。

- 用法：Node.childNodes
- 返回值：NodeList（类数值对象）

## 属性描述
childNodes属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'childNodes') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    get: function () { /*[native code]*/ },
    set: undefined
}
```

## 注意事项
1. childNodes 属性是只读的，赋值无效
2. childNodes 属性获得的是一个动态的子节点集合（a live collection of child nodes）
3. 子节点集合可以包括元素节点，文本节点，注释节点和文档类型节点

## 示例代码
childNodes 属性获得的是一个动态的子节点集合
```html
<body>
  <div class="js-wrap">wrap<div class="child"></div><!-- comment --></div>
  <script>
    var wrap = document.querySelector('.js-wrap'),
      wrapChilds = wrap.childNodes;
    
    console.log(wrapChilds.length); // => 3

    wrap.appendChild(document.createElement('p'));

    console.log(wrapChilds.length); // => 4
  </script>
</body>
```

## 参考资料
1. [MDN: childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
2. [w3schools: childNodes](http://www.w3schools.com/jsref/prop_node_childnodes.asp)
3. [stackoverflow:What is the difference between children and childNodes in JavaScript?](http://stackoverflow.com/questions/7935689/what-is-the-difference-between-children-and-childnodes-in-javascript)
4. [stackoverflow:best way to get child nodes](http://stackoverflow.com/questions/10381296/best-way-to-get-child-nodes)
