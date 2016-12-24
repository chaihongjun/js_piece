# Document接口

## W3C 标准
[WHATWG-DOM: Document](https://dom.spec.whatwg.org/#interface-document)
[WHATWG-HTML: ](https://html.spec.whatwg.org/multipage/dom.html#the-document-object)
[DOM4: Document](https://www.w3.org/TR/dom/#interface-document)

## 概述
Document接口暴露在window上，同时它是一个构造器。

- 父类：[Node](../Node/Node.md)
- 子类：HTMLDocument

## Document.prototype的属性

- [implementation--获取文档的DOMImplementation对象](./implementation/implementation.md)
- [URL--获取文档的url地址](./URL/URL.md)
- [documentURI--获取文档的url地址](./documentURI/documentURI.md)
- [activeElement--获取获得焦点的元素](./activeElement/activeElement.md)
- [body--获取和替换body元素](./body/body.md)
- [characterSet--获取文档当前的字符编码类型](./characterSet/characterSet.md)

## Document.prototype的方法

- [adoptNode()--导入外部文档中的节点](./adoptNode()/adoptNode().md)
- [importNode()--复制外部文档中的节点](./importNode()/importNode().md)


## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document