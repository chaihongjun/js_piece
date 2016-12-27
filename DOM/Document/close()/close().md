# Document.prototype.close()

## W3C 标准
[WHATWG: close()](https://html.spec.whatwg.org/#dom-document-close)

## 定义和用法
文档节点的close()方法用于关闭文档，这时停止写入数据。

- 语法：document.close()
- 参数：无
- 返回值：undefined

## 注意事项
1. close()方法用于关闭文档，这时停止写入数据，如果用document.write()再写入数据会先清空文档。

[示例代码](./close().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/close