# NonElementParentNode.prototype.getElementById()

## W3C 标准
[DOM4: getElementById()](https://www.w3.org/TR/dom/#dom-nonelementparentnode-getelementbyid)，
[WHATWG: getElementById()](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid)

## 定义和用法
文档节点或文档片段节点的getElementById(id)方法用于获取与id匹配的第一个元素节点，如果没有匹配则返回null。

- 语法：document.getElementById() 或 docFrag.getElementById()
- 参数：id {DOMString}，必填
- 返回值：与id匹配的第一个元素节点 或 null

## 注意事项
1. 只有Document接口和DocumentFragment接口实现了getElementById()方法
2. getElementById()方法只返回第一个匹配的元素节点

[示例代码](./getElementById().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
2. http://www.w3schools.com/jsref/met_document_getelementbyid.asp