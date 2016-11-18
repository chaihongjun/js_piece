# Node.baseURI

## W3C 标准
> **baseURI of type DOMString, readonly, introduced in DOM Level 3**
>
> The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI. This value is computed as described in Base URIs. However, when the Document supports the feature "HTML" [DOM Level 2 HTML], the base URI is computed using first the value of the href attribute of the HTML BASE element if any, and the value of the documentURI attribute from the Document interface otherwise.

## 定义和用法
节点（Node）的baseURI属性用于获取文档的**基URL**（就是文档中相对地址的参考地址），默认值为window.location.href。在HTML文档中,如果包含base标签，则Node.baseURI的值为base标签href属性的值。作用是利于img，a等标签中的相对地址获得基URL。

> 语法：Node.baseURI

> 返回值：DOMString 或 null

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>baseURI</title>
</head>
<body>
    <div id="div">wrap</div>
<a href="/" id="link">github</a>
    <script>
        var div = document.querySelector('#div');
        var nextSibling = div.nextSibling; // 文本节点：'\n'
        var link = document.querySelector('#link');

        console.log(window.location.href);
        // 下面三个打印的结果一样，都是打印出window.loaction.href
        console.log(div.baseURI);
        console.log(nextSibling.baseURI);
        console.log(link.baseURI);
        console.log('1.============================================');

        // <base href="https://github.com" target="_blank">
        // 把上面这行代码插入head标签中，点击a标签，就跳转到github网站
        var baseElement = document.createElement('base');
        baseElement.setAttribute('href','https://github.com'); // 若未设置href，还是打印出window.loaction.href
        baseElement.setAttribute('target','_blank');
        document.head.appendChild(baseElement);

        console.log(window.location.href);

        // 下面三个打印的结果一样，都会打印出：https://github.com
        console.log(div.baseURI);
        console.log(nextSibling.baseURI);
        console.log(link.baseURI);
    </script>
</body>
</html>
```

## 注意事项
1. Node.baseURI属性是只读（readonly）的
2. Node.baseURI属性可能随时会改变

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI
2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
3. http://www.w3schools.com/jsref/prop_doc_baseuri.asp
4. https://www.quora.com/What-are-the-differences-between-document-baseURI-document-documentURI-and-document-URL