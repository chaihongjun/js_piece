# Document.prototype.characterSet

## W3C 标准
[WHATWG: characterSet](https://dom.spec.whatwg.org/#dom-document-characterset)

## 定义和用法
文档节点的characterSet属性用于获取文档当前的字符编码类型。

- 语法：document.characterSet
- 返回值：字符串（字符编码类型的名称）

## 注意事项
1. characterSet属性是只读的，赋值无效，但是可以通过浏览器改变字符编码类型

[示例代码](./characterSet.html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/characterSet