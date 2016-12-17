# Node接口

## W3C 标准
[WHATWG: Node](https://dom.spec.whatwg.org/#interface-node)，
[DOM4: Node](https://www.w3.org/TR/dom/#interface-node)

## 概述
Node接口暴露在window上。

- 父类： [EventTarget](https://dom.spec.whatwg.org/#eventtarget)
- 子类：
        [Element](https://dom.spec.whatwg.org/#element)，
        [Attr](https://dom.spec.whatwg.org/#attr)，
        [CharacterData](https://dom.spec.whatwg.org/#characterdata)，
        [Document](https://dom.spec.whatwg.org/#document)，
        [DocumentType](https://dom.spec.whatwg.org/#documenttype)，
        [DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)，

## Node.prototype的属性

- [baseURI--获取节点的基URI](./baseURI/baseURI.md)
- [childNodes--获取子节点的集合](./childNodes/childNodes.md)
- [firstChild--获取第一个子节点](./firstChild/firstChild.md)
- [isConnected--判断节点是否在文档中](./isConnected/isConnected.md)
- [lastChild--获取最后一个子节点](./lastChild/lastChild.md)
- [nextSibling--获取下一个兄弟节点](./nextSibling/nextSibling.md)
- [nodeName--获取节点名称](./nodeName/nodeName.md)
- [nodeType--获取节点类型](./nodeType/nodeType.md)
- [nodeValue--获取和设置节点值](./nodeValue/nodeValue.md)
- [ownerDocument--获取最顶层的文档对象](./ownerDocument/ownerDocument.md)
- [parentElement--获取父元素节点](./parentElement/parentElement.md)
- [parentNode--获取父节点](./parentNode/parentNode.md)
- [previousSibling--获取上一个兄弟节点](./previousSibling/previousSibling.md)
- [textContent--获取和设置文本内容](./textContent/textContent.md)

## Node.prototype的方法

- [appendChild()--在内容末尾插入节点](./appendChild()/appendChild().md)
- [cloneNode()--复制节点](./cloneNode()/cloneNode().md)
- [compareDocumentPosition()--比较两个节点在文档中的位置](./compareDocumentPosition()/compareDocumentPosition().md)
- [contains(other)--判断other是否是指定节点的后代节点](./contains()/contains().md)
- [getRootNode()--获得根节点](./getRootNode()/getRootNode().md)
- [hasChildNodes()--判断是否有子节点](./hasChildNodes()./hasChildNodes().md)
- [insertBefore()--在指定子节点之前插入节点](./insertBefore()/insertBefore().md)
- [isEqualNode()--判断两个节点是否相等](./isEqualNode()/isEqualNode().md)
- [isSameNode()--判断两个节点是否为同一节点](./isSameNode()/isSameNode().md)
- [normalize()--规范化后代文本节点](./normalize()/normalize().md)
- [removeChild()--删除子节点](./removeChild()/removeChild().md)
- [replaceChild()--替换子节点](./replaceChild()/replaceChild().md)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node