# NonDocumentTypeChildNode.prototype.nextElementSibling

## W3C 标准
[DOM4: nextElementSibling](https://www.w3.org/TR/dom/#dom-nondocumenttypechildnode-nextelementsibling)，
[WHATWG: nextElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-nextelementsibling)

## 定义和用法
节点（Node）的nextElementSibling属性用于获取下一个兄弟元素节点，如果没有则返回null。

- 语法：Node.nextElementSibling
- 返回值：元素节点对象（A Element Node Object） 或 null

## 注意事项
1. nextElementSibling属性是只读的，赋值无效
2. nextElementSibling属性的值只能是元素节点或null，忽略文本节点和注释节点

## 兼容性和polyfill

> 兼容性：IE9+

**polyfill**
```javascript
var nextElementSibling = function (el) {
    if (el.nextElementSibling) {
        return el.nextElementSibling;
    }
    
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    
    return null;
}
```

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling
2. http://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
