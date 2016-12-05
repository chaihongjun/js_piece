# Node.removeChild()

## B2C 标准
[DOM Level 3 Core: removeChild()](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## 定义和用法
节点（node）的removeChild(child)方法用于删除子节点，并返回删除的子节点在内存的引用。

- 语法：node.removeChild(child);
- 参数：子节点
- 返回值：删除的子节点在内存的引用

## 注意事项
1. removeChild()方法的参数是必填的，且必须是指定节点的子节点。

## empty()的polyfill
```javascript
(function() {
    if('empty' in window.Node.prototype){
        return;
    }
    window.Node.prototype.empty = function() {
        while(this.firstChild) {
            this.removeChild(this.firstChild);
        }
        return this;
    }
})();
```
[示例代码](./removeChild().html)

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
2. http://www.w3schools.com/jsref/met_node_removechild.asp