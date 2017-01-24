# Document.prototype.createDocumentFragment()

## 标准
[WHATWG: createDocumentFragment](https://dom.spec.whatwg.org/#dom-document-createdocumentfragment)

## 定义和用法
文档节点的createDocumentFragment方法用于创建文档片段节点。文档片段节点一般用于高性能地批量插入DOM节点，过程是先创建一个空文档节点，再把要插入的DOM节点插入新建的文档片段节点中，这样不会引起回流，最后把新建的文档片段节点插入文档中。文档片段节点插入文档以后，文档片段节点会被清空。

- 语法：document.createDocumentFragment()
- 参数：无
- 返回值：文档片段节点

## 实例代码
文档片段节点插入文档以后，文档片段节点会被清空。
```javascript
var docFrag = document.createDocumentFragment();
console.log(docFrag.childNodes.length); // => 0

docFrag.appendChild(document.createElement('p'));
console.log(docFrag.childNodes.length); // => 1

// 文档片段节点插入文档以后，文档片段节点会被清空。
document.querySelector('.wrap').appendChild(docFrag);
console.log(docFrag.childNodes.length); // => 0
```
## 参考资料
1. [MDN: createDocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
2. []()

