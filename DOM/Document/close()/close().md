# Document.prototype.close

## 标准
[WHATWG: close](https://html.spec.whatwg.org/#dom-document-close)

## 定义和用法
文档节点的 close 方法用于关闭文档，这时停止写入数据。

- 语法：document.close()
- 参数：无
- 返回值：undefined

## 属性描述
close 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'close') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.close
}
```

## 注意事项
1. close 方法用于关闭文档，这时停止写入数据，如果用 document.write 再写入数据会先清空文档。

## 参考资料
1. [MDN: close](https://developer.mozilla.org/en-US/docs/Web/API/Document/close)
