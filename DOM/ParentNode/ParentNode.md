# ParentNode接口

## 标准
[WHATWG: ParentNode 接口](https://dom.spec.whatwg.org/#interface-parentnode)

## 概述
ParentNode 接口是一个 Mixin 类，目的是给父节点添加特有的属性和方法。

  - 实现的接口：**Element 接口**，**Document 接口** 和 **DocumentFragment 接口**

## ParentNode.prototype 的属性

  - [childElementCount--获取子元素节点的数量](./childElementCount/childElementCount.md)
  - [children--获取子元素节点的集合](./children/children.md)
  - [firstElementChild--获取第一个子元素节点](./firstElementChild/firstElementChild.md)
  - [lastElementChild--获取最后一个子元素节点](./lastElementChild/lastElementChild.md)

## ParentNode.prototype 的方法

  - [append()--在内容末尾插入零个或多个节点](./append()/append().md)
  - [prepend()--在内容开头插入零个或多个节点](./prepend()/prepend().md)
  - [querySelector()--获取与选择器匹配的第一个后代元素节点](./querySelector()/querySelector().md)
  - [querySelectorAll()--获取与选择器匹配的后代元素节点的集合](./querySelectorAll()/querySelectorAll().md)


## 参考资料

  1. [MDN: ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode)
