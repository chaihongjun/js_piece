# ParentNode.prototype.append()

## W3C 标准
[WHATWG: append()](https://dom.spec.whatwg.org/#dom-parentnode-append)

## 定义和用法
节点的append()方法用于在内容末尾插入零个或多个子节点，它会先把字符串转换为文本节点再插入。
如果要插入的节点已经在文档中则先剪切再插入。

append()方法的原理：先把所有参数按顺序插入一个文档片段节点的内容末尾，再把文档片段节点插入内容末尾。

- 语法：node.append()
- 参数：零个或多个节点或其他数据类型
- 返回值：undefined

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有append()方法
2. append()可以不传参数，这时什么都没有做
3. 如果参数不是节点对象也不是字符串，则会先转换成字符串再转换为文本节点再插入

## 兼容性和polyfill
> 兼容性：Chrome 54+，Firefox 49+，Opera 39+

**polyfill**
```javascript
(function (arr) {
    arr.forEach(function (item) {
        item.append = item.append || function () {
            var argArr = Array.prototype.slice.call(arguments),
                docFrag = document.createDocumentFragment();
            
            argArr.forEach(function (argItem) {
                var isNode = argItem instanceof Node;
                docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
            });
            
            this.appendChild(docFrag);
        };
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
```
## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append#Browser_compatibility