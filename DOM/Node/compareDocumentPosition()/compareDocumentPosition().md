# Node.prototype.compareDocumentPosition

## 标准
[WHATWG: compareDocumentPosition](https://dom.spec.whatwg.org/#dom-node-comparedocumentposition)

## 定义和用法
节点的 compareDocumentPosition 方法用于比较两个节点在文档中的位置。

- 用法：n1.compareDocumentPosition(n2)
- 参数：节点对象
- 返回值：整数

返回值 | 对应常量 | 意义
--- | --- | ---
0 | 无 | 同一节点
1 | Node.DOCUMENT_POSITION_DISCONNECTED | 没有位置关系，一般表示两个节点不在同一个文档中
2 | Node.DOCUMENT_POSITION_PRECEDING |  n2在n1的前面
4 | Node.DOCUMENT_POSITION_FOLLOWING | n2在n1的后面
8 | Node.DOCUMENT_POSITION_CONTAINS | n2包含n1
16 | Node.DOCUMENT_POSITION_CONTAINED_BY | n2包含于n1
32 | Node.DOCUMENT_POSITIOIN_IMPLIMENTATION_SPECIFIC  | 没有位置关系，或n2和n1是同一元素的属性节点

## 属性描述
compareDocumentPosition 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'compareDocumentPosition') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.compareDocumentPosition
}
```


## 注意事项
1. 返回值可能会组合以上几种情况并返回它们的和。比如 n2 是 n1 的父元素，包括两种情况：n2 包含 n1（8）和 n2 在 n1 的前面（2），结果返回10
2. 如果 n2 和 n1 是同一节点，则返回0

## 示例代码
同一节点返回值为 0。
```html
<div class="js-wrap"></div>
<script>
  var wrap = document.querySelector('.js-wrap');

  console.log(wrap.compareDocumentPosition(wrap)); // => 0
</script>
```

## 参考资料
1. [MDN: compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
2. [w3schools: compareDocumentPosition](http://www.w3schools.com/jsref/met_node_comparedocumentposition.asp)
3. http://help.dottoro.com/ljgoeost.php
4. https://segmentfault.com/a/1190000004177042#articleHeader2
