# Document.prototype.write()

## W3C 标准
[WHATWG: write()](https://html.spec.whatwg.org/#dom-document-write)

## 定义和用法
文档节点的write()方法用于写入文档内容，可以传多个参数，写入的字符串会按HTML解析。

- 语法：document.write()
- 参数：字符串，可以传多个字符串参数
- 返回值：undefined

## 注意事项
1. 运行document.write()方法时，如果文档已经加载完成，则先打开文档（清空文档），再把字符串插入文档。

## 示例代码
在head中运行document.write()，则参数写在body内容的开头。
```html
<!--运行前-->
<head>
    <script>
        document.write('<p>test</p>');
    </script>
</head>
<body>
    <h2>write()</h2>
</body>

<!--运行后-->
<head>
    <script>
        document.write('<p>test</p>');
    </script>
</head>
<body>
    <p>test</p>
    <h2>write()</h2>
</body>
```

在body中运行document.write()，则参数写在运行的script后面
```html
<!--运行前-->
<div>
    <script>
        document.write('<p>test</p>');
    </script>
    <p>content</p>
</div>

<!--运行后-->
<div>
    <script>
        document.write('<p>test</p>');
    </script>
    <p>test</p>
    <p>content</p>
</div>
```

同步引用外部js，参数也是写在运行的script后面
```javascript
// syncWrite.js
document.write('<p>test</p>');
```
```html
<!--syncWrite.html-->
<!--运行前-->
<body>
    <script src="syncWrite.js"></script>
    <p>content</p>
</body>

<!--运行后-->
<body>
    <script src="syncWrite.js"></script>
    <p>test</p>
    <p>content</p>
</body>
```

异步引用外部js，必须先运行document.open()清空文档，然后才能运行document.write()，参数写在body内容的开头。
如果不先运行document.open()，直接运行document.write()，则无效且Chrome有如下提示：
![](./img/asyncWriteTip.png)
```javascript
// asyncWrite.js
document.open();
document.write('<p>test</p>');
```
```html
<!--asyncWrite.html-->
<!--运行前-->
<body>
    <script src="asyncWrite.js" async></script>
</body>

<!--运行后-->
<body>
    <p>test</p>
</body>
```

如果document.write()在window的onload的回调函数中，则不管是在head中，body中，同步js，异步js，
都会先清空文档，然后运行document.write()，参数写在body内容的开头
```html
<!--运行前-->
<body>
    <script>
        window.onload = function () {
            document.write('<p>test</p>');
        };
    </script>
</body>

<!--运行后-->
<body>
    <p>test</p>
</body>
```


## 参考资料
1. https://segmentfault.com/a/1190000006197157
2. http://web.jobbole.com/83288/
3. https://developer.mozilla.org/en-US/docs/Web/API/Document/write
