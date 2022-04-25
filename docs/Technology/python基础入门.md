---
title: Python基础入门
sidebar: auto
---

# <center>Python基础入门</center>

## 变量

### 变量的基础使用

原则：先定义、后引用。

```python
name = 'yifan';
print(name);
```

### 变量的内存管理

内存管理机制：垃圾回收机制。

垃圾一般指代变量值被绑定的变量名的个数为0（即该变量名无法被访问到）。

#### 引用计数

- 引用计数增加

```python
x = 10;
y = x;
z = x;
```

- 引用计数减少

```python
x = 10;
del x;  #解除x 与10的绑定关系
```

### 变量值

1. id：反应的是变量值的内存地址（`id不同情况下，值有可能相同，即两块不同的内存空间里可以存相同的值；id相同的情况下，值一定相同。`）

2. type：不同类型代表不同状态

3. value：值本身

#### is 与 ==

is：比较左右两边的两个值的身份（id）是否相等

==：比较左右两边的两个值的值是否相等

#### 小整数池[-5,256]

从python解释器启动的那一刻起，就会在内存中申请好一系列内存空间，存放好常用的整数。

#### 在集成ide环境中

在集成pythonIDE环境中可以超出小整数池的范围，但在默认情况下或是在解释器的环境中，输出结果为false。

```python
x = -6;
y = -6;
print(id(x));
print(id(y));
print(x is y);

输出结果：
2255584354448
2255584354448
True
```

## 常量

注意：在python语法中没有常量的概念，但是在程序开发中会涉及常量的概念。

约定俗成：将所有的小写字母全部换成大写来代表常量。

## 基本数据类型

### 数字类型

#### 整数类型int

- 记录整数相关代表的具体事物。

```python
age = 18;
```

#### 浮点类型float

- 记录一般小数相关代表的具体事物。

```python
height = 1.87;
```

#### 数字类型的其他使用

基本的数学运算和简单的逻辑运算。

```python
level = 1;
level = level + 1;
```

### 字符串类型str

- 记录描述性质的状态。

```python
say = "我是字符串";
```

在python中，字符串的相加（拼接）效率极低，不推荐使用。

字符串相乘，可做简洁使用。

### 列表类型（数组与索引对应值）

```python
list = ["zyf","1.87","list"];
print(list[1]);

输出结果：1.87  #输出列表数组中的第二个值
```

### 字典类型（key对应值）

```python
zyf = {
    name: 'zyf',
    age: 18,
    weight: 60
}
```

### 布尔类型

True False对于事物的判断。

## 垃圾回收机制

GC是python解释器自带的一种机制，专门用来回收不可以的变量值所占用的内存空间。

### 直接引用与间接引用

1. 列表在内存的存储机制：列表中的每一项，纯粹于一个专门的堆，每一项为索引值与该项的内存地址，且该项指向某一个专门的内存空间。

2. 字典的存储机制与列表类似。

```python
x = 10;
l1 = ['a','b',x];
x = 123;
print(l1[2]);

输出结果：10
```

3. 引用计数：当引用次数为0时，会清除无对应的内存内容。

4. 循环引用次数过多会导致内存泄漏。所以在常规编程中尽量减少循环引用的情况。

```python
l1 = [111,];
l2 = [222,];
l1.append(l2);
print(l1);  

输出结果：[111, [222]]
```

### 标记清除

在特殊情况（内存超出或其他情况下），python会将多余的间接引用（栈没有对应的栈内存地址）的堆内存地址进行清除。

### 分代回收

基于引用计数的回收机制，需要把所有对象的引用计数遍历一遍，这是非常低效率的，分代回收用来提高效率，是以时间换空间的方式来达到提高效率的目的。

在经历多次扫描的情况下，都没有被回收的变量，GC默认该变量为常用变量，GC会对其的扫描频率降低。从而对变量进行一定的分类处理，但其存在一定的缺点。

## 简单用户交互

- 接收用户的输入与输出（在python3中，`input`的输入类型由用户决定，默认输出的类型为字符串）。

```python
username = input("请输入您的账号：");
print(username); 

输出结果：
请输入您的账号：zyf
zyf
```

- 字符串的格式化输出：预先确定好输出的格式，对输入类型进行格式化转换。
  
  - 值按照与`%s`一一对应。
  
  - 以字典的形势key值一一对应。
  
  - `format`方法

```python
x = input("you name:");
y = input("you age:");
res1 = "我的名字是 %s 我的年龄是 %s" %(x,y);
res2 = "我的名字是 %(name)s 我的年龄是 %(age)s" %{"name":x,"age":y};
res3 = "我的名字是 {} 我的年龄是 {}" .format(x,y);
res4 = "我的名字是 {0} 我的年龄是 {1}" .format(x,y);
res5 = "我的名字是 {name} 我的年龄是 {age}" .format(name = x,age = y);
print(res1);
print(res2);
print(res3);
print(res4);
print(res5);
```

## 基本运算符

### 算术运算符

加减乘除。

```python
print(10 + 3);
print(10 - 3);
print(10 * 3);
print(10 / 3);
print(10 // 3);  #只保留整数
print(10 % 3);  #取余数
print(10 ** 3);  #取模、取余数

输出结果：
13
7
30
3.3333333333333335
3
1
1000
```

### 比较运算符

```python
print(10 > 3);
print(10 < 3);
print(10 == 3);
print(10 >= 3);
print(10 <= 3);
print(10 != 3);

输出结果：
True
False
False
True
False
True
```

### 赋值运算符

```python
#增量赋值
age = 18;
age = age + 1;  #也可写作： age += 1;
print(age);
#链式赋值
z = y = x = 10; #也可写作：x = 10;y = x;z = y;  
print(x,y,z);
print(id(x),id(y),id(z));
#交叉赋值
m = 10;
n = 20;
m,n = n,m;  #也可写作：temp = m;m = n;n = temp;
print(m,n);
#解压赋值
num = [1,2,3,4,5];
num1,num2,num3,num4,num5 = num;  #也可写作：num1 = num[1];num2 = num[2];num3 = num[3];num4 = num[4];num5 = num[5];
numer1,numer2,numer3,*_ = num;  #取前3个值进行解压赋值，*代表将没有对应关系的变量存成列表，_一般代表即将废弃的变量名
print(num1,num2,num3,num4,num5); #变量名不能少于解压的值的个数
print(numer1,numer2,numer3);
dic = {a:1,b:2,c:3};  #解压字典默认解压key
a,b,c = dic;
print(a,b,c);

输出结果：
19
10 10 10
1911422478928 1911422478928 1911422478928
20 10
1 2 3 4 5
1 2 3
a b c
```

### 逻辑运算符

#### 可变不可变类型

1. 可变类型：值改变，id不变的具体数据类型（改变的是原值）

2. 不可变类型：值改变，id也改变的具体数据类型。（产生了新的值，原值是不可以被修改）

#### 类型分类

- 可变类型：列表、字典（字典中key为不可变类型、value可以是任意类型）。

- 不可变类型：数字类型（int、float），字符串类型、布尔类型。

#### 运算符and or not

优先级：not > and > or

### 成员运算符

``` python
print("zyf" in "zyf and or") ; # 判断小字符串是否存在于大字符串中
print(111 in [111,222,333]);
#判断key是否存在于字典中
print(111 in {"k1":111,"k2":222,"k3":333});
print("k1" in {"k1":111,"k2":222,"k3":333});

输出结果：
True
True
False
True
```

### 身份运算符

`is`判断的是id是否相等。

## 条件判断

案例1：

```python
age = 18;
is_beautiful = True;
star = "白羊座";
if age > 16 and age < 20 and is_beautiful and star == "白羊座":
    print("匹配成功！");

输出结果：匹配成功！
```

案例2：

```python
age = 60;
is_beautiful = True;
star = "白羊座";
if age > 16 and age < 20 and is_beautiful and star == "白羊座":
    print("匹配成功！");
else:
    print("匹配不成功！");

输出结果：匹配不成功！
```

案例3：

```python
score = input("请输入你的成绩：");
score = int(score);
if score < 0 or score > 100:
    print("你输入的成绩为不合规！");
elif score >= 90 and score < 100:
    print("你的成绩为优秀！");
elif score >= 80 and score < 90:
    print("你的成绩为良好！");
elif score >= 70 and score < 80:
    print("你的成绩为中等！");
elif score >= 60 and score < 70:
    print("你的成绩为及格！");
else:
    print("你的成绩为不及格！");

输出结果（多次输入数字）：
请输入你的成绩：-20
你输入的成绩为不合规！
请输入你的成绩：56
你的成绩为不及格！
请输入你的成绩：70
你的成绩为中等！
请输入你的成绩：80
你的成绩为良好！
请输入你的成绩：92
你的成绩为优秀！
```
