# Document.prototype.createElement()

## 标准
[WHATWG: createElement](https://dom.spec.whatwg.org/#dom-document-createelement)

## 定义和用法
文档节点的 createElement 方法用于创建元素节点。

- 语法：document.createElement(tagName[,options])
- 参数：
  - {DOMString} tagName 元素名称
  - {DOMString} options.is 自定义元素名称
- 返回值：元素节点

## 属性描述
createElement 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'createElement') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.createElement
}
```

## 示例代码
createElement 方法用于创建元素节点。
```javascript
var newP = document.createElement('p');
newP.textContent = 'jszhou';

console.log(newP.nodeType); // => 1
console.log(newP.outerHTML); // => <p>jszhou</p>
```
参数 tagName 是由 数字、字母、下划线、连字符 组成的字符串且不能以 连字符、数字 开头，详情可以看[这里](https://www.w3.org/TR/xml/#NT-Name)。如果 tagName 不是字符串，则自动转换为字符串。如果 tagName 是未定义的元素名称，则用 HTMLUnknownElement 创建元素节点。
```javascript
var newEl = document.createElement(null);

console.log(newEl.outerHTML); // => <null></null>
console.log(newEl.constructor.name); // => HTMLUnknownElement
```

## 参考资料
1. [MDN: createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
2. [whatwg: Custom Elements v1 spec](https://html.spec.whatwg.org/multipage/scripting.html#custom-elements)
3. [google developer: Custom elements v1: reusable web components](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)
4. [html5rocks: Custom Elements v0](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
