# Document接口

## W3C 标准
- [WHATWG-DOM: Document](https://dom.spec.whatwg.org/#interface-document)
- [WHATWG-HTML: document](https://html.spec.whatwg.org/multipage/dom.html#the-document-object)
- [DOM4: Document](https://www.w3.org/TR/dom/#interface-document)

## 概述
Document 接口暴露在 window 上，同时它是一个构造器。

- 父类：[Node](../Node/Node.md)
- 子类：HTMLDocument

## Document.prototype 的属性

- [implementation--获取文档的 DOMImplementation 对象](./implementation/implementation.md)
- [URL--获取文档的 url 地址](./URL/URL.md)
- [documentURI--获取文档的 url 地址](./documentURI/documentURI.md)
- [activeElement--获取获得焦点的元素](./activeElement/activeElement.md)
- [body--获取和替换 body 元素](./body/body.md)
- [characterSet--获取文档当前的字符编码类型](./characterSet/characterSet.md)
- [compatMode--获取文档的渲染模式](./compatMode/compatMode.md)
- [contentType--获取文档的文件类型](./contentType/contentType.md)
- [cookie--获取和设置 cookie](./cookie/cookie.md)
- [doctype--获取文档的文档类型节点](./doctype/doctype.md)
- [documentElement--获取文档的根元素节点](./documentElement/documentElement.md)

## Document.prototype 的方法

- [adoptNode()--导入外部文档中的节点](./adoptNode()/adoptNode().md)
- [importNode()--复制外部文档中的节点](./importNode()/importNode().md)
- [open()--打开文档或打开新的窗口](./open()/open().md)
- [close()--关闭文档](./close()/close().md)
- [write()--写入文档内容](./write()/write().md)
- [writeln()--写入文档内容并在最后一个参数末尾加一个换行符](./writeln()/writeln().md)
- [createAttribute()--创建属性节点](./createAttribute()/createAttribute().md)
- [createComment()--创建注释节点](./createComment()/createComment().md)
- [createDocumentFragment()--创建文档片段节点](./createDocumentFragment()/createDocumentFragment().md)
- [createElement()--创建元素节点](./createElement()/createElement.md)


## 参考资料
1. [MDN: Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
2. [defed: Document对象](https://defed.github.io/原生DOM系列-Document对象/)
