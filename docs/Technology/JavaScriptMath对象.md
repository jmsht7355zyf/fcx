---
title: JavaScriptMath对象
sidebar: auto
---

# <center>JavaScriptMath对象</center>

## Math 对象

Math 对象用于执行数学任务。

### 使用 Math 的属性和方法的语法：

```
var pi_value=Math.PI;
var sqrt_value=Math.sqrt(15);
```

**注释：**Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。

## Math 对象属性

| 属性                                                         | 描述                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [E](https://www.w3school.com.cn/jsref/jsref_e.asp)           | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
| [LN2](https://www.w3school.com.cn/jsref/jsref_ln2.asp)       | 返回 2 的自然对数（约等于0.693）。                |
| [LN10](https://www.w3school.com.cn/jsref/jsref_ln10.asp)     | 返回 10 的自然对数（约等于2.302）。               |
| [LOG2E](https://www.w3school.com.cn/jsref/jsref_log2e.asp)   | 返回以 2 为底的 e 的对数（约等于 1.414）。        |
| [LOG10E](https://www.w3school.com.cn/jsref/jsref_log10e.asp) | 返回以 10 为底的 e 的对数（约等于0.434）。        |
| [PI](https://www.w3school.com.cn/jsref/jsref_pi.asp)         | 返回圆周率（约等于3.14159）。                     |
| [SQRT1_2](https://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。       |
| [SQRT2](https://www.w3school.com.cn/jsref/jsref_sqrt2.asp)   | 返回 2 的平方根（约等于 1.414）。                 |

## Math 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [abs(x)](https://www.w3school.com.cn/jsref/jsref_abs.asp)    | 返回数的绝对值。                                             |
| [acos(x)](https://www.w3school.com.cn/jsref/jsref_acos.asp)  | 返回数的反余弦值。                                           |
| [asin(x)](https://www.w3school.com.cn/jsref/jsref_asin.asp)  | 返回数的反正弦值。                                           |
| [atan(x)](https://www.w3school.com.cn/jsref/jsref_atan.asp)  | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](https://www.w3school.com.cn/jsref/jsref_atan2.asp) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](https://www.w3school.com.cn/jsref/jsref_ceil.asp)  | 对数进行上舍入。                                             |
| [cos(x)](https://www.w3school.com.cn/jsref/jsref_cos.asp)    | 返回数的余弦。                                               |
| [exp(x)](https://www.w3school.com.cn/jsref/jsref_exp.asp)    | 返回 e 的指数。                                              |
| [floor(x)](https://www.w3school.com.cn/jsref/jsref_floor.asp) | 对数进行下舍入。                                             |
| [log(x)](https://www.w3school.com.cn/jsref/jsref_log.asp)    | 返回数的自然对数（底为e）。                                  |
| [max(x,y)](https://www.w3school.com.cn/jsref/jsref_max.asp)  | 返回 x 和 y 中的最高值。                                     |
| [min(x,y)](https://www.w3school.com.cn/jsref/jsref_min.asp)  | 返回 x 和 y 中的最低值。                                     |
| [pow(x,y)](https://www.w3school.com.cn/jsref/jsref_pow.asp)  | 返回 x 的 y 次幂。                                           |
| [random()](https://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。                                    |
| [round(x)](https://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。                                 |
| [sin(x)](https://www.w3school.com.cn/jsref/jsref_sin.asp)    | 返回数的正弦。                                               |
| [sqrt(x)](https://www.w3school.com.cn/jsref/jsref_sqrt.asp)  | 返回数的平方根。                                             |
| [tan(x)](https://www.w3school.com.cn/jsref/jsref_tan.asp)    | 返回角的正切。                                               |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_math.asp) | 返回该对象的源代码。                                         |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_math.asp) | 返回 Math 对象的原始值。                                     |

