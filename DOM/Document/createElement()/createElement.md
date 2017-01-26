# Document.prototype.createElement()

## 标准
[WHATWG: createElement](https://dom.spec.whatwg.org/#dom-document-createelement)

## 定义和用法
文档节点的createElement方法用于创建元素节点。

- 语法：document.createElement(tagName,optional)
- 参数：
  - {DOMString} tagName 元素名称
  - {String} optional.is 自定义元素名称
- 返回值：元素节点

## 属性描述
createElement 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'createElement') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.createElement
}
```

## 示例代码
createElement方法用于创建元素节点。
```html
<!--运行前-->
<div class="js-wrap"></div>
<script>
  var newP = document.createElement('p');
  newP.textContent = 'newP';

  document.querySelector('.js-wrap').appendChild(newP);
</script>

<!--运行后-->
<div class="js-wrap">
  <p>newp</p>
</div>
<script>
  var newP = document.createElement('p');
  newP.textContent = 'newP';

  document.querySelector('.js-wrap').appendChild(newP);
</script>
```


## 参考资料
1. [MDN: createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
2. [google developer: customElement](https://developers.google.com/web/fundamentals/getting-started/primers/customelements#extendhtml)
