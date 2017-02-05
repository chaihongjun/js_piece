# Node.prototype.cloneNode

## 标准
[WHATWG: cloneNode](https://dom.spec.whatwg.org/#dom-node-clonenode)

## 定义和用法
节点的 cloneNode 方法用于复制节点。

- 语法：Node.cloneNode(deep)
- 参数：deep: boolean，true 表示复制后代节点，false 不复制后代节点，默认为 false
- 返回值：复制的节点对象

## 属性描述
cloneNode 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'cloneNode') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Node.prototype.cloneNode
}
```

## 注意事项
1. 对于事件，只有内联的事件绑定会复制，用 addEventListener 和给 onclick 赋值的方式绑定的事件都不会复制
2. 对于有 id 和 name 属性的节点复制，id 和 name 会重复，可以手动修改
3. 如果复制的是 script 元素，复制后的 script 元素里面的代码不会运行。

## 示例代码
cloneNode(deep) 方法用于复制节点。deep 默认为 false，表示不复制子节点；若 deep 为 true，则会复制子节点。
```html
<!--运行前-->
<body>
  <div class="js-wrap">wrap</div>
  <script>
    var wrap = document.querySelector('.js-wrap'),
      wrapClone = wrap.cloneNode(),
      wrapDeepClone = wrap.cloneNode(true),
      body = document.body;

    body.appendChild(wrapClone);
    body.appendChild(wrapDeepClone);
  </script>
</body>

<!--运行后-->
<body>
  <div class="js-wrap">wrap</div>
  <script>
    var wrap = document.querySelector('.js-wrap'),
      wrapClone = wrap.cloneNode(),
      wrapDeepClone = wrap.cloneNode(true),
      body = document.body;

    body.appendChild(wrapClone);
    body.appendChild(wrapDeepClone);
  </script>
  <div class="js-wrap"></div>
  <div class="js-wrap">wrap</div>
</body>
```

## 参考资料
1. [MDN: cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
2. [w3schools: cloneNode](http://www.w3schools.com/jsref/met_node_clonenode.asp)
