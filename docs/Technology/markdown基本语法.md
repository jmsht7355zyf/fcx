---
title: markdomn基本语法
sidebar: auto
---

# <center>markdomn基本语法</center>

## 标题

在想要设置为标题的文字前面加`#`来表示

```markdown
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

## 字体

```markdown
要加粗的文字左右分别用两个星号包起来
**加粗**
要倾斜的文字左右分别用一个星号包起来
*倾斜*
要倾斜和加粗的文字左右分别用三个星号包起来
***倾斜加粗***
要加删除线的文字左右分别用两个~号包起来
~~删除文字~~

```

## 空格缩进

```markdown
中文缩进
&emsp;&emsp;
英文缩进
&ensp;&ensp;
```

## 引用

在引用的文字前加`>`即可

```markdown
>这是引用的内容
```

## 分割线

```markdown
---
----
***
*****
```

## 图片

```markdown
![图片alt](图片地址 ''图片title'')
```

## 超链接

```markdown
[超链接名](超链接地址 "超链接title")
title可加可不加
```

## 图片加链接

```markdown
[![图片alt]图片路径](超链接地址)

[![ajax](../.vuepress/public/ajax.png)](ajax入门.md)	
```

## 列表

- ### 无序列表

```markdown
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```

- ### 有序列表

```markdown
1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
```

## 表格

```markdown
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

## 代码

```markdown
单行代码：代码之间分别用一个反引号包起来
`代码内容`

代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行
​```
  代码...
  代码...
  代码...
​```
```

