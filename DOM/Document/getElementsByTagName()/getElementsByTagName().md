# Document.prototype.getElementsByTagName

## 标准
[WHATWG: getElementsByTagName](https://dom.spec.whatwg.org/#dom-document-getelementsbytagname)

## 定义和用法
文档节点的 getElementsByTagName 方法用于获取给定标签名的元素集合，该元素集合是动态更新的。

- 语法：document.getElementsByTagName(tagName)
- 参数：标签名（DOMString）
- 返回值：HTMLCollection 对象


## 属性描述
getElementsByTagName 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'getElementsByTagName') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.getElementsByTagName
}
```
## 注意事项
1. `document.getElementsByTagName('*')` 返回文档中所有元素节点的集合。
2. tagName 不区分大小写。

## 示例代码
getElementsByTagName 返回的元素集合是动态更新的。
```html
<body>
  <div class="js-wrap">wrap</div>
  <script>
    var divs = document.getElementsByTagName('div');
    console.log(divs.length); // => 1
    document.body.appendChild(document.createElement('div'));
    console.log(divs.length); // => 2
  </script>
</body>
```

## 参考资料
1. [MDN: getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
