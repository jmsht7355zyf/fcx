---
title: JavaScript基础入门
sidebar: auto
---

# <center>JavaScript基础入门</center>

## JavaScript组成

### 计算机语言分类：

- 编译型语言、解释性语言
- 动态类型语言、静态类型语言

**JavaScript语言组成：**`ECMAscript`、`DOM`、`BOM`

### JavaScript使用范围

- 网页交换
- 服务端开发（`node.js`）
- 命令行工具
- 桌面程序
- 移动端app、小程序
- 游戏开发

## 编写位置（html内）

1. 在`HTML`元素中直接执行。
2. 在元素内声明`JavaScript`。
3. 在`head`、`body`标签内添加`script`标签，在标签内书写。
4. 外部引入，`script`标签内添加src。

### **注意：**

`script`标签为双标签，不能用单标签表示。

## 交互方式

1. 弹出弹窗
2. 控制台打印
3. DOM操作
4. 接收用户输入的内容

## 变量

### 定义变量

```javascript
var 变量名称 = 变量赋值;
var name = ‘jmsht7355';
```

### 变量重写赋值

```javascript
var name = ‘jmsht7355';
name = 'newname';
```

### 声明赋值多个变量

```javascript
//方法1
var num1 , num2 , num3;
num1 = 1;
num2 = 2;
num3 = 3;
//方法2
var numA = 10, numB = 20, numC =30;
```

### 变量命名规则与规范

#### 命名规则：

1. 首个字符必须为字母或`_`或`$`。
2. 其他字符没有1中的限制。
3. 不能使用关键字和保留字。

#### 命名规范：

1. 多个单词使用驼峰标识。
2. 尽量不要用拼音作为变量名。

#### 变量交换

```javascript
//方法1 引入临时变量
var num1 = 100;
var num2 = 200;
var temp;
temp = num1;
num1 = mum2;
num2 = temp;
//方法2 利用加减特性进行交换(只对于数字有效)
var num1 = 100;
var num2 = 200;
num1 = num1 + num2;  //num1==300
num2 = num1 - num2; //num2==100
num1 = num1 - num2; //num1==200
```

