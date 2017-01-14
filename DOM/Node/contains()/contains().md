# Node.prototype.contains()

## W3C 标准
[WHATWG: contains](https://dom.spec.whatwg.org/#dom-node-contains)

## 定义和用法
节点（Node）的contains(other)方法用于判断other是否是指定节点的后代节点，是返回true，不是返回false。

- 语法：node.contains(other)
- 参数：节点对象，null 或 undefined
- 返回值：true 或 false

## 属性描述
contains方法可配置，可枚举，可重写。
```javascript
// Object.getOwnPropertyDescriptor(Node.prototype, 'contains') 的结果如下：
var result = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: Node.prototype.contains
}
```

## 注意事项
1. 如果other是指定节点本身，返回true
2. 如果other是null或undefined，返回false
3. other可以是元素节点，文本节点，注释节点
4. other如果是属性节点都返回false

## 示例代码
```html
<div class="parent">
    <div class="child">
        <div class="grandchild"></div><!-- 注释 comment -->
    </div>
</div>
<script>
    var log = console.log.bind(console),
        $ = document.querySelector.bind(document),
        parent = $('.parent'),
        child = $('.child'),
        grandchild = $('.grandchild');

    log(parent.contains(parent)); // true
    log(parent.contains(child)); // true
    log(parent.contains(grandchild)); // true

    log(parent.contains(null));// false
    log(parent.contains(undefined)); // false
    log(child.contains(parent)); // false

    log(child.nextSibling); // 文本节点
    log(parent.contains(child.nextSibling)); // true

    log(grandchild.nextSibling); // 注释节点
    log(parent.contains(grandchild.nextSibling)); // true

    log(child.getAttributeNode('class')); // 属性节点
    log(parent.contains(child.getAttributeNode('class'))); // false
</script>
```

## 参考资料
1. https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
2. http://www.w3schools.com/jsref/met_node_contains.asp