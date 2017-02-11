## Document.prototype.compatMode

## 标准
[WHATWG: compatMode](https://dom.spec.whatwg.org/#dom-document-compatmode)

## 定义和用法
文档节点的 compatMode 属性用于获取文档的渲染模式。返回值为'BackCompat' 或 'CSS1Compat'，BackCompat 表示怪异模式，CSS1Compat 表示标准模式或接近标准模式。

- 语法：document.compatMode
- 返回值：'BackCompat' 或 'CSS1Compat'

## 属性描述
compatMode 属性可配置，可枚举，可取值，不可赋值。

```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'compatMode') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    get: function () { /*[native code]*/ },
    set: undefined
}
```

## 注意事项
1. compatMode 属性是只读的，赋值无效。

## 示例代码
文档节点的 compatMode 属性由文档类型声明决定。推荐声明：`<!DOCTYPE html>`。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>standardMode</title>
</head>
<body>
    <script>
        console.log(document.compatMode); // => CSS1Compat
    </script>
</body>
</html>
```
在没有文档类型声明时，会开启怪异模式。
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>quirkMode</title>
</head>
<body>
    <script>
        console.log(document.compatMode); // => BackCompat
    </script>
</body>
</html>
```

## 参考链接
1. [w3help: DOCTYPE 与浏览器模式分析](http://w3help.org/zh-cn/casestudies/002)
2. [MDN: compatMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode)
3. [MDN: Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)
4. [https://hsivonen.fi/doctype/](https://hsivonen.fi/doctype/)
