# ParentNode.prototype.append()

## W3C 标准
[WHATWG: append()](https://dom.spec.whatwg.org/#dom-parentnode-append)

## 定义和用法
节点的append()方法用于在内容末尾插入零个或多个子节点，可以把字符串转换为文本节点再插入。

- 语法：node.append()
- 参数：零个或多个节点或其他数据类型
- 返回值：undefined

## 注意事项
1. 只有元素节点，文档节点和文档片段节点有append()方法
2. append()可以不传参数，这时什么都没有做
3. 如果参数不是节点对象也不是字符串，则会先转换成字符串再转换为文本节点再插入

## 兼容性和polyfill
- 兼容性：Chrome 54+，Firefox 49+，Opera 39+
- polyfill
```javascript
    (function (arr) {
        arr.forEach(function (item) {
            item.append = item.append || function () {
                var argArr = Array.prototype.slice.call(arguments);
                argArr.forEach(function (argItem) {
                    if(typeof(argItem) === 'object' && argItem !== null && argItem.nodeType > 0){
                        this.appendChild(argItem);
                        return;
                    }
                    this.appendChild(document.createTextNode(String(argItem)));
                }.bind(this));
            };
        });
    })([Document.prototype, Element.prototype, DocumentFragment.prototype]);
```
## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append#Browser_compatibility