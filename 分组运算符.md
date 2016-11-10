# 分组运算符

## ECMA-262 5.1 标准
英文版
> [11.1.6 The Grouping Operator](http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.6)
>
> The production PrimaryExpression : ( Expression ) is evaluated as follows:
>
> Return the result of evaluating Expression. This may be of type Reference.
>
> **NOTE** This algorithm does not apply GetValue to the result of evaluating Expression. The principal motivation for this is so that operators such as delete and typeof may be applied to parenthesised expressions.

中文版

> 11.1.6 分组运算符
>
> 产生式 PrimaryExpression : ( Expression ) 按照下面的过程执行 :
>
> 返回执行Expression的结果，它可能是Reference类型。
>
> **备注** 这一算法并不会作用GetValue于执行Expression的结果。这样做的原则是确保delete和typeof这样的运算符可以作用于括号括起来的表达式。

## 参考资料
1. http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.6
