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

1. 可变类型：值改变，id不变的具体数据类型（改变的是原值）。

2. 不可变类型：值改变，id也改变的具体数据类型。（产生了新的值，原值是不可以被修改）。

#### 类型分类

- 可变类型：列表、字典（字典中key为不可变类型、value可以是任意类型）。

- 不可变类型：数字类型（int、float），字符串类型、布尔类型。
  
#### 深、浅拷贝

1. 浅拷贝：是把原列表（不可变类型与可变类型）的内存地址*不加区分*地拷贝给新列表。

```python
lsit1 = ["sha","ren","la",15];
list2 = list1.copy();
```

2. 深拷贝：是把原列表中的不可变类型的内存地址拷贝给新列表，可变类型的内存地址*发生改变*（即产生新的内存地址），再拷贝给新列表。

```python
import copy
lsit1 = ["sha","ren","la",15];
list2 = copy.deepcopy(list1);
```

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
## 循环语句

### while循环

简单案例1：

```python
count = 0;
while count < 5:
    print(count);
    count += 1;

输出结果：
0
1
2
3
4
```

### 死循环与运行效率

纯计算没有IO参与的运算会导致致命的效率问题。

### while循环基本应用与简单示例

#### while+break

案例1：输入对应的姓名密码，并输出完成操作。

```python

usrname = 'zyf';
password = '12345';

while True:
    inp_name = input("请输入您的姓名：");
    inp_pwd = input("请输入您的密码：");
    if inp_name == usrname and inp_pwd == password:
        print("登录成功！");
        break;
    else:
        print("您的输入有误，请重新输入！");

print("您已完成操作！");

输出结果（成功输入）：
请输入您的姓名：zyf
请输入您的密码：12345
登录成功！
您已完成操作！
```

案例2：输入对应的姓名密码，并输入q字符命令，结束程序。

```python

usrname = 'zyf';
password = '12345';

while True:
    inp_name = input("请输入您的姓名：");
    inp_pwd = input("请输入您的密码：");
    if inp_name == usrname and inp_pwd == password:
        print("登录成功！");
        while True:
            cmd = input("请输入指令：");
            if cmd == 'q':
                break;
            print("命令{x}正在运行!".format(x = cmd));
        break;
    else:
        print("您的输入有误，请重新输入！");

print("您已完成操作！");

输出结果：
请输入您的姓名：zyf
请输入您的密码：12345
登录成功！
请输入指令：a
命令a正在运行!
请输入指令：q
您已完成操作！
```
#### 同一判断变量控制循环
案例3：输入对应的姓名密码，并输入q字符命令，结束程序（另外一种方式）。
```python
usrname = 'zyf';
password = '12345';
tag = True;
while tag:
    inp_name = input("请输入您的姓名：");
    inp_pwd = input("请输入您的密码：");
    if inp_name == usrname and inp_pwd == password:
        print("登录成功！");
        while tag:
            cmd = input("请输入指令：");
            if cmd == 'q':
                tag = False;
            else:
                print("命令{x}正在运行!".format(x = cmd));
        
    else:
        print("您的输入有误，请重新输入！");

print("您已完成操作！并退出!");

输出结果：
请输入您的姓名：zyf
请输入您的密码：12345
登录成功！
请输入指令：a
命令a正在运行!
请输入指令：q
您已完成操作！并退出!
```

#### while+continue

案例4：打印0·5的数，其中跳过4的打印。
```python
count = 0;
while count < 6:
    if count == 4:
        count += 1;
        continue;
    print(count);
    
```

#### while+else

若while循环中，针对break，用else跳出循环。

案例5：
```python
usrname = 'zyf';
password = '12345';
count = 0;
tag = True;
while tag:
    if count == 3:
        print("输入错误次数过多！");
        break;
    inp_name = input("请输入您的姓名：");
    inp_pwd = input("请输入您的密码：");
    if inp_name == usrname and inp_pwd == password:
        print("登录成功！");
        while tag:
            cmd = input("请输入指令：");
            if cmd == 'q':
                tag = False;
            else:
                print("命令{x}正在运行!".format(x = cmd));
    else:
        print("您的输入有误，请重新输入！");
        count += 1;
print("您已完成操作！并退出!");

输出结果：
请输入您的姓名：asdf
请输入您的密码：fsdf
您的输入有误，请重新输入！
请输入您的姓名：dfsd
请输入您的密码：sdf
您的输入有误，请重新输入！
请输入您的姓名：sdf
请输入您的密码：sdf
您的输入有误，请重新输入！
输入错误次数过多！
您已完成操作！并退出!
```

案例6：不用tag作为所有循环的控制条件，来实现案例5的效果。
```python
usrname = 'zyf';
password = '12345';
count = 0;
tag = True;
while count < 3:
    inp_name = input("请输入您的姓名：");
    inp_pwd = input("请输入您的密码：");
    if inp_name == usrname and inp_pwd == password:
        print("登录成功！");
        while True:
            cmd = input("请输入指令：");
            if cmd == 'q':
                break;
            else:
                print("命令{x}正在运行!".format(x = cmd));
        break;
    else:
        print("您的输入有误，请重新输入！");
        count += 1;
else:
    print("输入错误次数过多！")        
print("您已完成操作！并退出!");
```

### for循环

`for`循环在取值方面，比`while`循环取值更加方便，在书写理解方面效果更高（如遍历取值）。

终止`for`循环只有break一种方式。

#### 可迭代对象

列表、字典、字符串、元组、集合。

案例1：循环取值

```python
for x in ['asdvx','asdb','adghsd']:
    print(x);

输出结果：
asdvx
asdb
adghsd
```

案例2：用while循环来实现

```python
l = ['asdvx','asdb','adghsd'];
i = 0;
while i < 3:
    print(l[i]);
    i += 1;

输出结果：
asdvx
asdb
adghsd
```

#### for + range

案例3：控制循环次数

```python
for x in range(3):
    print('zyf');

输出结果：
zyf
zyf
zyf
```

案例4：
```python
usrname = 'zyf';
password = '12345';
count = 0;
for i in range(3):
    inp_name = input("请输入您的姓名：");
    inp_pwd = input("请输入您的密码：");
    if inp_name == usrname and inp_pwd == password:
        print("登录成功！");
        while True:
            cmd = input("请输入指令：");
            if cmd == 'q':
                break;
            else:
                print("命令{x}正在运行!".format(x = cmd));
        break;
    else:
        print("您的输入有误，请重新输入！");
        count += 1;
else:
    print("输入错误次数过多！")        
print("您已完成操作！并退出!");
```

#### for + continue

案例5：

```python
for i in range(6):
    if i == 4:continue;
    print(i)

输出结果：
0
1
2
3
5
```

### for循环嵌套

案例6：

```python
for i in range(3):
    print('外循环-->',i);
    for j in range(5):
        print('内循环-->',j);

输出结果：
外循环--> 0
内循环--> 0
内循环--> 1
内循环--> 2
内循环--> 3
内循环--> 4
外循环--> 1
内循环--> 0
内循环--> 1
内循环--> 2
内循环--> 3
内循环--> 4
外循环--> 2
内循环--> 0
内循环--> 1
内循环--> 2
内循环--> 3
内循环--> 4
```

## 数字类型

### int类型

数字中的整数类型。

```python
age = 10;  # age = int(10)
```

#### 类型转换

用`int()`转换为数字整数类型。

```python
#其他类型转int类型
res1 = int('101010');
print(res1);
#10进制转2进制
print(bin(23));
#10进制转8进制
print(oct(23));
#10进制转16进制
print(hex(23));
#2进制转10进制
print(int('0b10010',2));
#8进制转10进制
print(int('0o10010',8));
#16进制转10进制
print(int('0x10010',16));

输出结果：
101010
0b10111
0o27
0x17
18
4104
65552
```

### float类型

数字中的小数（浮点）类型。

#### 类型转换

用`float()`转换为数字小数（浮点）类型。

```python
print(float('324.45'));
```

## 字符串类型

### 类型转换

用`str()`转换为字符串类型。

### 内置方法

#### 按索引取值、

```python
#正向取值
msg = 'hello world';
print(msg[0]);
#反向取值
print(msg[-1]);

输出结果：
h
d
```

#### 字符串大小写转换

```python
msg = 'Hello World'
print(msg.lower());
print(msg.upper());
#首字母大写
print(msg.capitalize());
#每个单词字母大写
print(msg.title());
#大小写转换
print(msg.swapcase());

输出结果：
hello world
HELLO WORLD
Hello world
Hello World
hELLO wORLD
```

#### 切片方法

```python
msg = 'hello world';
#切片
print(msg[0:5]);
#步长
print(msg[0:5:2]);
#反向步长
print(msg[11:5:-2]);

输出结果：
hello
hlo
drw
```
#### 移除两侧多余符号

```python
#移除字符串左右两边的符号
msg1 = '***hello world***'
print(msg1.strip('*'));
print(msg1.lstrip('*'));
print(msg1.rstrip('*'));

输出结果：
hello world
hello world***
***hello world
```

#### 切分方法

```python
#切分
info1 = 'zyf 18 male';
#默认分割符为空格
print(info1.split());
info2 = 'zyf 18 male';
print(info2.split(':'));

输出结果：
['zyf', '18', 'male']
['zyf', '18', 'male']
```

#### 把列表拼接成字符串

```python
list = ['zyf', '18', 'male'];
res = ':'.join(list);
print(res);

输出结果：
zyf:18:male
```

#### 字符串替换方法

```python
msg = 'zyf is 18';
print(msg.replace('zyf','ZYF'));

输出结果：ZYF is 18
```

#### 判断字符串是否由纯数字组成

```python
print('124454'.isdigit());
print('1244A4'.isdigit());

输出结果：
True
False
```

#### 判断首尾字符串

```python
print('zyf is 18'.startswith('zyf'));
print('zyf is 18'.endswith('18'));

输出结果：
True
True
```

案例1：规避空格带来的输入错误
```python
inp_usr = input('your name:').strip();
inp_pwd = input('your password:').strip();
if inp_usr == 'zyf' and inp_pwd == '123':
    print('登录成功！');
else:
    print('账号密码错误！');  
```

#### 查找字符串

返回要查找的字符串在大字符串的起始索引,`index`与`find`的区别在于在无法找到索引时，`index`会使程序停止或奔溃。

```python
msg ='zyf is a cool boy';
print(msg.find('z'));
print(msg.find('zyf'));
print(msg.find('a'));
print(msg.index('z'));
print(msg.index('zyf'));
print(msg.index('a'));

输出结果：
0
0
7
0
0
7
```

#### 字符串计数

```python
msg ='zyf is a cool boy';
print(msg.count('z'));

输出结果：1
```

#### 字符串填充

```python
msg ='zyf is a cool boy';
print('zyf is a cool boy'.center(30,'*'));
print('zyf is a cool boy'.ljust(30,'*'));
print('zyf is a cool boy'.rjust(30,'*'));
print('zyf is a cool boy'.zfill(30));

输出结果：
******zyf is a cool boy*******
zyf is a cool boy*************
*************zyf is a cool boy
0000000000000zyf is a cool boy
```

#### 字符串is方法

```python
msg = 'Hello World'
#判断是否全为小写
print(msg.islower());
#判断是否全为大写
print(msg.isupper());
#判断单词首字母是否全为大写
print(msg.istitle());
#判断是否全为字母或数字组成
print(msg.isalnum());
#判断是否全为字母组成
print(msg.isalpha());
#判断是否全为空格
print(msg.isspace());
#判断是否为内置关键字 或合法的标识符（自定义标识符判断）
print(msg.isidentifier());

输出结果：
False
False
True
False
False
False
False
```

## 列表类型

### 类型转换

```python
#list方法 不同的类型转换为list会有不同的结果
res1 = list('hello');
res2 = list({'k1':'111','k2':'222'});
print(res1,res2);

输出结果：
['h', 'e', 'l', 'l', 'o'] ['k1', 'k2']
```

### 内置方法

列表的增删改查：

```python
# 按照索引取值
l1 = ['zyf','hello','world'];
#正反向取值
print(l1[1],l1[-1]);
#添加值
l1.append(20);
print(l1);
#插入值
l1.insert(1,'jmsht');
#列表合并插入
l2 = [1,2,3];
l1.extend(l2);
print(l1);
#删除值 通用删除方法，没有任何返回值
del l1[-1]; #不支持赋值
print(l1);
# .pop() 删除方法 根据索引删除，不传入值，则默认删除最后一个值
res1 = l1.pop(-2);
# 该方法返回值为删除的值
print(res1);
# .remove 根据元素删除
l1.remove(2);
print(l1);
#切片 相当于浅拷贝
print(l1[0:4:2]);
# 长度 及是否为成员
print(len(l1));
print('zsx' in l1);

输出结果：
hello world
['zyf', 'hello', 'world', 20]
['zyf', 'jmsht', 'hello', 'world', 20, 1, 2, 3]
['zyf', 'jmsht', 'hello', 'world', 20, 1, 2]
1
['zyf', 'jmsht', 'hello', 'world', 20]
['zyf', 'hello']
5
False
```

其他列表基本操作：

```python
l1 = ['zyf','hello','world'];
# 统计个数
print(l1.count('zyf'));
# 查找索引
print(l1.index('zyf'));
#反转列表
l1.reverse();
print(l1);
# 排序
l2 = [22,11,46,23,24];
#降序
l2.sort(reverse=True);
print(l2);
#清空列表
l1.clear();
print(l1);

输出结果：
1
0
['world', 'hello', 'zyf']
[46, 24, 23, 22, 11]
[]
```

## 元组类型

某种程度而言，元组就是一种不可变的列表。按照索引存放多个值，只用于读不用于改。

注意：如果元组中只有一个元素，必须加逗号分割。

### 定义

```python
t = (1,3.1,'zyf',[1,2,3]);
print(t,type(t));

输出结果：
(1, 3.1, 'zyf', [1, 2, 3]) <class 'tuple'>
```

### 类型转换

```python
print(tuple('hello'));
print(tuple([1,2,3]));
print(tuple({'a1':'zyf','a2':123}));

输出结果：
('h', 'e', 'l', 'l', 'o')
(1, 2, 3)
('a1', 'a2')
```

### 内置方法

```python
# 按索引取值
t = ('zyf','world',18,'60kg');
print(t[0]);
print(t[-1]);
#切片
print(t[0:2]);
print(t[::-1]);
#长度
print(len(t))
#成员问题
print('zyf' in t);
print('za' in t);
#其他方法
print(t.index('zyf'));
print(t.count(t));

输出结果：
zyf
60kg
('zyf', 'world')
('60kg', 18, 'world', 'zyf')
4
True
False
0
0
```

## 字典类型

### 定义

`{}`内用逗号分割，key值为不可变类型，value为任意类型。

```python
d1 = {'k1':111,'k2':(1,2,3)};
d2 = dict(x = 1,y = 2,z = 3);
print(d1,type(d1),'\n',d2,type(d2));

输出结果：
{'k1': 111, 'k2': (1, 2, 3)} <class 'dict'> 
{'x': 1, 'y': 2, 'z': 3} <class 'dict'>
```

### 类型转换

#### 列表转化为字典

方法1：传统循环方式转换

```python
list1 = [
    ['name','zyf'],
    ['age',18],
    ['weight','60kg']
]; 
d = {};
for k,v in list1:
    d[k] = v;
print(d);

输出结果：
{'name': 'zyf', 'age': 18, 'weight': '60kg'}
```

方法2：内置方法

```python
list1 = [
    ['name','zyf'],
    ['age',18],
    ['weight','60kg']
]; 
res = dict(list1);
print(res);

输出结果：
{'name': 'zyf', 'age': 18, 'weight': '60kg'}
```

方法3：对于key确定，value不确定的列表，转换为字典。（快速初始化字典）

```python
keys = ['name','age','weight'];
d1 = {};
# 方式一
for k in keys:
    d1[k] = None;
print(d1);
# 方式2
d2 = {}.fromkeys(keys,None);
print(d2);

输出结果：
{'name': None, 'age': None, 'weight': None}
{'name': None, 'age': None, 'weight': None}
```

### 内置方法

常用方法：

```python
d1 = {  'name': None, 
        'age': None, 
        'weight': None};
# 赋值操作
d1['name'] = 'zyf';
d1['age'] = 18;
d1['weight'] = '60kg';
d1['height'] = '170cm';
print(d1);
#统计key个数
print(len(d1));
#删除
#根据key删除 返回删除key对应的value
d1.pop('weight');
print(d1);
#随机删除 返回元组
d1.popitem();
# 循环字典中的key,index,item
print(list(d1.keys()));
print(list(d1.values()));
print(list(d1.items()));

输出结果：
{'name': 'zyf', 'age': 18, 'weight': '60kg', 'height': '170cm'}
4
{'name': 'zyf', 'age': 18, 'height': '170cm'}
['name', 'age']
['zyf', 18]
[('name', 'zyf'), ('age', 18)]
```

其他方法：
```python
d1 = {'k1':111};
d2 = {'k1':111,'k2':222};
#清空字典内的内容
d1.clear();
print(d1);
#更新扩容字典
d2.update({'k3':333});
print(d2) ;
print(d2.get('k3')); #key不存在，返回none
#key存在,则不用做添加操作，若不存在，则将内容添加
print(d2.setdefault('k1',333)); 
print(d2.setdefault('k4',333)); 
print(d2);   

输出结果：
{}
{'k1': 111, 'k2': 222, 'k3': 333}
333
111
333
{'k1': 111, 'k2': 222, 'k3': 333, 'k4': 333}
```

## 集合类型

### 定义

在`{}`内用逗号分割多个元素，多个元素满足以下条件：

- 集合内元素必须为不可变类型
- 集合内元素无序
- 集合内元没有重复

### 类型转换

```python
s1 = set('hello');
s2 = set({'k1':111,'k2':222});
# 输出结果无序，因为集合本身就是无序的
print(s1);  
print(s2);  

输出结果：
{'l', 'e', 'o', 'h'}
{'k1', 'k2'}
```

### 内置方法

```python
s = {1,2,3};
# 删除集合内的元素
s.discard(3);
print(s);
# 删除元素不存在则会报错
s.remove(2);
print(s);
# 更新集合，添加新集合进入原集合
s.update({1,2,3,4});
print(s);
# 添加元素
s.add(5);
print(s);
#判读两个集合完全独立，没有共同部分，返回true
s1 = {11,12,13};
print(s.isdisjoint(s1));

输出结果：
{1, 2}
{1}
{1, 2, 3, 4}
{1, 2, 3, 4, 5}
True
```

案例1：取出共同的好友，成立一个新的列表。

```python
friends1 = ['zyf','had','jmsht','lilin','heze'];
friends2 = ['zyf','hadsa','jmsht','lilindf','hezecv'];
l = [];
for x in friends1:
    if x in friends2:
        l.append(x);
print(l);

输出结果：
['zyf', 'jmsht']
```

案例2：用集合运算的方法来获取。

```python
friends1 = {'zyf','had','jmsht','lilin','heze'};
friends2 = {'zyf','hadsa','jmsht','lilindf','hezecv'};
#求交集 共同好友
res = friends1 & friends2
print(res);

输出结果：
{'jmsht', 'zyf'}
```

### 关系运算

案例3：取出两者好友的相关集合运算。

```python
friends1 = {'zyf','had','jmsht','lilin','heze'};
friends2 = {'zyf','hadsa','jmsht','lilindf','hezecv'};
# 所有的好友
# friends1.union(friends2);
print(friends1 | friends2); 
# friends1独有的好友
# friends1.difference(friends2);
print(friends1 - friends2);
# friends2独有的好友
# friends2.difference(friends1);
print(friends2 - friends1);
# 两者独有的好友(去掉共有的好友)
# friends1.symmetric_difference(friends2);
print(friends2 ^ friends1);
# 判断父子集合
s1 = {1,2,3,4,5};
s2 = {1,2,3};
print(s1 > s2);
print(s1.issuperset(s2));
print(s2.issuperset(s1));

输出结果：
'lilindf', 'had', 'lilin', 'zyf', 'hezecv', 'heze', 'hadsa', 'jmsht'}
{'lilin', 'heze', 'had'}
{'hadsa', 'lilindf', 'hezecv'}
{'lilindf', 'hezecv', 'heze', 'had', 'hadsa', 'lilin'}
True
True
False
```

### 去重

集合去重的局限性：

1. 只能针对不可变类型去重。
2. 无法保证原来的顺序。

案例4：对以下列表进行去重。

```python
l1 = [
    {'name':'lolo','age':18,'sex':'male'},
    {'name':'jack','age':12,'sex':'male'},
    {'name':'lol','age':18,'sex':'female'},
    {'name':'lolo','age':18,'sex':'male'},
    {'name':'loloa','age':128,'sex':'male'},
    {'name':'lolo','age':11,'sex':'female'},
    {'name':'lolo','age':18,'sex':'female'},
    {'name':'lolo','age':18,'sex':'male'}
]

new_l = [];
for dic in l1:
    if dic not in new_l:
        new_l.append(dic);

print(new_l);

输出结果：
[{'name': 'lolo', 'age': 18, 'sex': 'male'}, {'name': 'jack', 'age': 12, 'sex': 'male'}, {'name': 'lol', 'age': 18, 'sex': 'female'}, {'name': 'loloa', 'age': 128, 'sex': 'male'}, {'name': 'lolo', 'age': 11, 'sex': 'female'}, {'name': 'lolo', 'age': 18, 'sex': 'female'}]
```

## 数据类型分类

按照不同的属性与不同的操作方式来对数据类型进行区分。

#### 按顺序分类：

- 直接访问：数字
- 有序：字符串、列表、元组
- 无序（映射类型）：字典、集合

#### 按存值个数分类：

- 只存一个值（标量/原子类型）：数字、字符串
- 存放多个值（容器类型）：列表、元组、字典、集合

#### 按可变不可变分类：

- 可变类型：列表、字典、集合
- 不可变类型：数字、字符串、元组