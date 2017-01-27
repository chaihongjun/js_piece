# Node.prototype.isEqualNode()

## 标准
[WHATWG: isEqualNode](https://dom.spec.whatwg.org/#dom-node-isequalnode)

## 定义和用法
节点（node）的isEqualNode()方法用于判断两个节点是否相等。如果是同一个节点，则返回true；如果是不同节点，则比较标签，属性和子节点，如果都一样则返回true，否则返回false；如果参数为null或undefined，则返回false。

- 语法：node.isEqualNode()
- 参数：节点对象，null 或 undefined
- 返回值：true 或 false

## 属性描述
isEqualNode 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'isEqualNode') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.isEqualNode
}
```

## 示例代码
如果是不同节点，则比较标签，属性和子节点，如果都一样则返回true
```html
<div class="first">first</div>
<div class="first">first</div>
<script>
  var firsts = document.querySelectorAll('.first');
  
  console.log(firsts[0].isEqualNode(firsts[0])); // => true
  console.log(firsts[0] === (firsts[0])); // => true

  console.log(firsts[0].isEqualNode(firsts[1])); // => true
  console.log(firsts[0] === (firsts[1])); // => false

  var cloneNode = firsts[0].cloneNode(true);
  console.log(firsts[0].isEqualNode(cloneNode)); // => true
</script>
```


## 参考资料
1. [MDN: isEqualNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode)
2. [w3schools: isEqualNode](http://www.w3schools.com/Jsref/met_node_isequalnode.asp)
