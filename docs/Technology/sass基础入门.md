---
title: sass基础入门
sidebar: auto
---

# <center>sass基础入门</center>

## 安装

```shell
npm install  -g sass -D
```

## sassScript

### 变量

定义变量：

```scss
$boxWidth: 1200px;
$boxColor: white;
```

调用变量：

```scss
width:$boxWidth
color:$boxColor
```

### 变量作用域

变量支持块级作用域，嵌套规则内定义的变量智能在规则内使用（局部变量），不在嵌套规则内定义的变量则可以在任意处使用（全局变量），将局部变量转换为全局变量可以添加`!global`声明。

### 数据类型

- 数字
- 字符串
- 颜色
- 布尔类型
- 空值（null）
- 数组（list）
- maps,相当于JavaScript的object

#### 字符串

```scss
$name: 'zyf';
```

#### 数字

```scss
$age: 18;
$boxHight: 500px;
```

#### 空值

```scss
$value: null;
```

#### 布尔类型

```scss
$isTrue: true;
```

#### 数组

```scss
const arr1 = [1,2,3,4];
const arr2 = [1,2],[3,4];
```

#### 映射maps

```scss
const map = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}
```

## 运算

### 数字运算符

（+，-，*，/，%）

### 关系运算符

（>,<,==,>=,<=,!=）

### 布尔运算符

（and or not）

### 运算优先级

## 嵌套语法

```scss
body{
	margin: 0;
    padding:0;
	.box{
		font-size:19px;
        h1{
            font-size:24px;
        }
	}
}
```

## 其他语法

### 插值语法

通过`#{}`可在选择器、属性名和属性值中使用变量。

大多数情况下，使用属性值可能不如直接使用变量方便，但使用`#{}`可避免sass运行运算表达式，直接编译

```scss
$name:foo;
$attr: border;
p.#{name}{
    #{attr}-color:$name;
}

//编译结果
p.foo{
    border-color:foo;
}
```

### & in sassScript

&为父选择器

```scss
button {
	background-color: red;
	&hover {
	background-color: green;
	}
}
```

### 继承@extend

```scss
.a{
    color:red;
}
.b{
    @extend .a
}
```

### 三元运算符

```
p{
	color: if(1+1 == 2,green,yellow);
}
```

### @if

```scss
p{
    @if 1-1 != 2 {
        color: red;
    }@else{
        color:blue;
    }
}
```

### @for

```scss
@for $i from 1 through 3 {
    .item-#{$i}{width:2em * $i;}
}

//编译结果
.item-1{
    width:2en;
}
.item-2{
    width:2en;
}
.item-3{
    width:2en;
}
```

### @while

```scss
$i:6;
@while $i > 0 {
    .item-#{$i}{width:2em * $i;}
    $i: $i - 2;
}
//编译结果
.item-6{
    width:2en;
}
.item-4{
    width:2en;
}
.item-2{
    width:2en;
}
```

### @mixin

```scss
//定义
@mixin box {
    color: red;
    font-size:16px;
}
//调用
box {
    @include box;
}

//添加参数
@mixin box （$text-color,$text-size）{
    color:$text-color;
    font-size:$text-size;
}
box {
    @include box(red,16px);
}
```

### 自定义函数@function

```scss
$colors:(light:white,dark:black);
@function color($key){
    @return map-get($colors,$key);
}
body{
    background-color: color(light);
}
```





