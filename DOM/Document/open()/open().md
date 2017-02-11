# Document.prototype.open

## 标准
[WHATWG: open](https://html.spec.whatwg.org/#dom-document-open)

## 定义和用法
文档节点的 open 方法用于打开文档或打开新的窗口。

- 打开文档
    - 语法：document.open([type[,replace]])
    - 参数：
        - type：字符串，可选，
        - replace：字符串，可选，
    - 返回值：文档节点对象
    
- 打开新的窗口
    - 语法：document.open(url, name, features)
    - 参数：
        - url：字符串，必填，url 地址
        - name：字符串，必填，新窗口的名称
        - features: 字符串，必填，新窗口的特征
    - 返回值：window 对象

## 属性描述
open 方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Document.prototype, 'open') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Document.prototype.open
}
```

## 注意事项
1. 文档在加载中，运行 document.open 没有任何效果；文档加载完了，运行 document.open 会清空文档


## 参考资料
1. [MDN: Document.open](https://developer.mozilla.org/en-US/docs/Web/API/Document/open)
2. [MDN: window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
3. [stackoverflow: are document open and document close necessary](http://stackoverflow.com/questions/27854494/are-document-open-and-document-close-necessary)
