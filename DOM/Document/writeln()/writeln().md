# Document.prototype.writeln()

## W3C 标准
[WHATWG: writeln()](https://html.spec.whatwg.org/#dom-document-writeln)

## 定义和用法
文档节点的writeln()方法用于写入文档内容并在最后一个参数末尾加一个换行符（\n），可以传多个参数，写入的字符串会按HTML解析。

- 语法：document.writeln()
- 参数：字符串，可以传多个字符串参数
- 返回值：undefined

## 注意事项
1. 运行document.writeln()方法时，如果文档已经加载完成，则先打开文档（清空文档），再把字符串+换行符插入文档。

[示例代码](./writeln().js)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln