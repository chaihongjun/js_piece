# Document.prototype.getElementsByClassName

## 标准
[WHATWG: getElementsByClassName](https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname)

## 定义和用法
文档节点的 getElementsByClassName 方法用于获取给定类名的元素集合，该元素集合是动态更新的。

- 语法：document.getElementsByClassName(classNames)
- 参数：类名（DOMString）,多个类名用空格分隔
- 返回值：HTMLCollection 对象（类数组对象）

## 属性描述
getElementsByClassName 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'getElementsByClassName') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.getElementsByClassName
}
```
## 注意事项
1. 元素节点也有 getElementsByClassName 方法。

## 示例代码
getElementsByClassName 返回的元素集合是动态更新的。
```html
<body>
  <div class="js-wrap">wrap</div>
  <script>
    var divs = document.getElementsByClassName('js-wrap'),
      newDiv = document.createElement('div');

    console.log(divs.length); // => 1

    newDiv.className = 'js-wrap';
    document.body.appendChild(newDiv);
    console.log(divs.length); // => 2
  </script>
</body>
```
多个类名用空格分隔。如下：表示获取同时含有类名 js-wrap 和 js-parent 的元素集合。
```html
<body>
  <div class="js-wrap js-parent"></div>
  <div class="js-wrap"></div>
  <script>
    console.log(document.getElementsByClassName('js-wrap js-parent').length); // => 1
  </script>
</body>
```
元素节点也有 getElementsByClassName 方法。
```html
<body>
  <div class="js-wrap">
    <div class="js-child">child</div>
  </div>
  <script>
    var child = document.querySelector('.js-child'),
      wrap = document.querySelector('.js-wrap');
    console.log(wrap.getElementsByClassName('js-child')[0] === child); // => true
  </script>
</body>
```

## 参考资料
1. [MDN: getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
