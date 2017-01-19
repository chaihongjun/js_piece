# Document.prototype.createAttribute()

## 标准
[WHATWG: createAttribute](https://dom.spec.whatwg.org/#dom-document-createattribute)

## 定义和用法
文档节点的createAttribute方法用于创建属性节点。

- 语法：document.createAttribute()
- 参数：字符串（DOMString），表示属性名
- 返回值：属性节点

## 属性描述
createAttribute方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'createAttribute') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.createAttribute
}
```

## 示例代码
createAttribute方法用于创建属性节点。
```html
<div class="js-wrap">wrap</div>
<script>
  var wrap = document.querySelector('.js-wrap'),
    newAttrNode = document.createAttribute('abc');

  newAttrNode.nodeValue = 1;
  wrap.setAttributeNode(newAttrNode);
  console.log(wrap.getAttribute('abc')); // => 1
</script>
```

## 参考资料
1. [MDN: createAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute)
