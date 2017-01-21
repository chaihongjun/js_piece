# Document.prototype.createComment()

## 标准
[WHATWG: createComment](https://dom.spec.whatwg.org/#dom-document-createcomment)

## 定义和用法
文档节点的 createComment 方法用于创建注释节点。

- 语法：document.createComment(data)
- 参数：字符串（DOMString），表示注释文本
- 返回值：注释节点

## 属性描述
createComment 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'createComment') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.createComment
}
```

## 注意事项
1. createComment方法的参数必须是字符串，如果不是字符串，会自动转换成字符串。

## 示例代码
createComment方法用于创建注释节点。
```html
<!--运行前-->
<div class="js-wrap"></div>
<script>
  var wrap = document.querySelector('.js-wrap'),
    newCommentNode = document.createComment('wrap');
    
  wrap.appendChild(newCommentNode);
</script>

<!--运行后-->
<div class="js-wrap"><!--wrap--></div>
<script>
  var wrap = document.querySelector('.js-wrap'),
      newCommentNode = document.createComment('wrap');

  wrap.appendChild(newCommentNode);
</script>
```
createComment方法的参数必须是字符串，如果不是字符串，会自动转换成字符串
```javascript
var newCommentNode = document.createComment({
  name: 'jszhou'
});
// 对象转换为字符串的结果为：'[object Object]'
console.log(newCommentNode.data); // => [object Object]

```

## 参考资料
1. [MDN: createComment](https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment)