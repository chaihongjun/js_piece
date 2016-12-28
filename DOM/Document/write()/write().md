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

[示例代码](./write().js)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/write