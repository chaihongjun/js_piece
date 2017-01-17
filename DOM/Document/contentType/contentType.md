# Document.prototype.contentType

## 标准
[WHATWG: contentType](https://dom.spec.whatwg.org/#dom-document-contenttype)

## 定义和用法
文档节点的contentType属性用于获取文档的文件类型，返回值由文件类型决定。

- 语法：document.contentType
- 返回值：文件类型(DOMString)

文件类型 | 返回值
--- | ---
.bmp | image/bmp
.png | image/png
.gif | image/gif
.jpg | image/jpeg
.css | text/css
.html | text/html
.txt | text/plain
.xml | application/xml
。。。 | 。。。

## 属性描述
contentType 属性可配置，可枚举，可取值，不可赋值。

```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'contentType') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    get: function () { /*[native code]*/ },
    set: undefined
}
```

## 注意事项
1. contentType 属性是只读的，赋值无效。

## 示例代码
contentType属性用于获取文档的文件类型，返回值由文件类型决定。
```javascript
var iframe = document.createElement('iframe');
iframe.addEventListener('load', function () {
    console.log(iframe.contentDocument.contentType); // => image/png
}, false);
iframe.src = "./resources/t.png";
document.body.appendChild(iframe);
```

## 参考资料
1. [MDN: contentType](https://developer.mozilla.org/en-US/docs/Web/API/Document/contentType)
2. [web-platform-tests: contentType][1]

[1]: https://github.com/w3c/web-platform-tests/tree/master/dom/nodes/Document-contentType/contentType