# Node.isConnected

## W3C 标准
[WHATWG: isConnected](https://dom.spec.whatwg.org/#dom-node-isconnected)

## 定义和用法
节点（node）的isConnected属性用于判断指定节点是否在文档中，在则返回true，不在则返回false。指定节点可以是DOM的节点或ShadowDOM的节点。目前发现一种情况返回false：就是指定节点被创建了，但未插入文档中。

- 语法：node.isConnected
- 返回值：true 或 false

```javascript
    var unAppend = document.createElement('div');
    // unAppend未插入文档中，返回false
    console.log(unAppend.isConnected); // false
```
[示例代码](./isConnected.html)

## 兼容性和polyfill
- Chrome 52+ ，Opera 39+，Firefox 50+
- polyfill地址在[这里](http://stackoverflow.com/questions/37588326/reliabilty-of-isconnected-field-in-dom-node)

```javascript
(function(supported) {
    if(supported){
        return;
    }
    
    Object.defineProperty(window.Node.prototype, 'isConnected', {
        get: function() {
            return document.contains(this);
        }
    });
})('isConnected' in window.Node.prototype);
```

## 参考资料
1. https://www.chromestatus.com/feature/5676110549352448
2. http://stackoverflow.com/questions/37588326/reliabilty-of-isconnected-field-in-dom-node