# Node.prototype.isConnected

## 标准
[WHATWG: isConnected](https://dom.spec.whatwg.org/#dom-node-isconnected)

## 定义和用法
节点（node）的isConnected属性用于判断指定节点是否在文档中，在则返回true，不在则返回false。指定节点可以是DOM的节点或ShadowDOM的节点。

- 语法：node.isConnected
- 返回值：true 或 false

```javascript
    var unAppend = document.createElement('div');
    // unAppend未插入文档中，返回false
    console.log(unAppend.isConnected); // false
```

## 属性描述
isConnected 属性可配置，可枚举，可取值，不可赋值。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected') 的结果如下：
var result = {
  configurable: true,
  enumerable: true,
  get: function () { /*[native code]*/ },
  set: undefined
}
```

## 注意事项
1. isConnected 是只读的，赋值无效。
2. 目前发现有三种情况返回false：
    - 指定节点被创建了，但未插入文档中。
    - 指定节点为属性节点
    - 指定节点为文档片段节点

## 兼容性和polyfill
> 兼容性：Chrome 52+ ，Opera 39+，Firefox 50+

- polyfill地址在[这里][1]

```javascript
(function(isSupport) {
  if(isSupport){
    return;
  }
  
  Object.defineProperty(Node.prototype, 'isConnected', {
    configurable: true,
    enumerable: true,
    get: function() {
      return document.contains(this);
    },
    set: undefined
  });
})('isConnected' in Node.prototype);
```

## 参考资料
1. [chromestatus: isConnected](https://www.chromestatus.com/feature/5676110549352448)
2. [stackoverflow: reliabilty of isconnected field in dom node][1]

[1]: http://stackoverflow.com/questions/37588326/reliabilty-of-isconnected-field-in-dom-node

