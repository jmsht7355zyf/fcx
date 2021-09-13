---
title: JavaScript高级
sidebar: auto
---

# <center>JavaScript高级</center>

## 面向对象

面向对象特性：封装性、继承性、多态性。

## 类与对象

### 类（class）

类抽象了对象的公共部分，它泛指某一大类。对象特指某一个类通过实例化一个具体的对象。

### 思维特点

1. 抽取（抽象）对象公共的属性和行为组织（封装）成一个类（模板）。
2. 对类进行实例化，获取类的对象。

### 创建类

```javascript
class name {
    //class body
}
```

### 构造函数 constructor

构造函数时一种特殊的函数，用于创建一类对象，*函数名一般首字母大写*。要与new配合使用。

`constructor()`方法是类的构造函数（默认方法），用于传递参数，返回实例对象，通过`new`命令生成对象实例时，自动调用该方法，如果没有显示定义，类内部会自动给我们创建一个`constructor()`。

```javascript
class People {
    constructor(name，age){
        this.name = name;
        this.age = age;
    }
}
var jmsht7355 = new People('郑依凡',28);
var zyf = new people('zyf',18);
```

### 类添加方法

```javascript
class People {
    constructor(name，age){
        this.name = name;
        this.age = age;
    }
    //添加方法
    sing(){
        console.log('唱歌！')
    }
}
```

**注意：**

1. 类里面所有的函数不需要写function。
2. 多个函数方法之间不需要用逗号隔开。

### 类的继承

`extends`

```javascript
class Father {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    money(){
        console.log(100);
         
    }
    sum (){
         console.log(this.x + this.y);
    }
}

class Son extends father{
    constructor(x,y){
        //调用父类中的构造函数
        super(x,y);
    }
}
var son = new Son();
son.money();
var son1 = new Son(1,2);
son.sum();
```

### 对象分类

1. 内建对象（ES内置对象）
2. 宿主对象（BOM、DOM、HTML对象）
3. 自定义对象

### 对象字面量

```javascript
var people = {
    name: 'jmsht',
    age: 18,
    sex: '男',
    doIt: function(){
        console.log('从事IT是个垃圾');
    }
}
```

### 创建对象

```javascript
//方式1 字面量
var people = {
    name: 'jmsht',
    age: 18,
    sex: '男',
    doIt: function(){
        console.log('从事IT是个垃圾');
    }
}

//方式2 new方法
var people = new People{};
people.name = 'jmsht';
people.age = 18;
people.sex = '男';
people.doIt = function(){
console.log('从事IT是个垃圾');
}

//方式3 工厂模式（工厂函数）
function createPerson (name,age,sex){
    var p = new Object();
    p.name = 'jmsht';
	p.age = 18;
	p.sex = '男';
    p.doIt = function(){
        console.log('从事IT是个垃圾');
    }
}

//方式4 自定义构造函数  常用方法（ES5）
function People (name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.doIt = function(){
    	console.log('从事IT是个垃圾');
	}
}
var person = new people('jmsht',18,'男')
```

### new 关键字

> 一般与构造函数一起配合使用。

**new的作用：**

1. 在内存中创建一个新的空对象。
2. `new`会让`this`指向这个新的对象。
3. 执行构造函数，给这个新的对象添加属性与方法
4. 返回这个新的对象。

### this 关键字

`this`类似于一个指针。

1. 普通函数执行时，内部`this`指向全局对象`windows`。
2. 函数在定义的时候`this`是不确定的，只有在调用时，才可以确定
3. 如果函数作为一个对象的方法，被该对象所调用，那么函数内的`this`则指向该对象。
4. 构造函数中的`this`是一个隐式对象，类似一个初始化的模型，所有方法和属性都挂载到了这个隐式对象上，后续通过`new`关键字来调用，从而实现实例化。

### 对象的使用

#### 遍历对象的属性

```javascript
var people = {
    name: 'jmsht',
    age: 18,
    sex: '男',
    doIt: function(){
        console.log('从事IT是个垃圾');
    }
}
//遍历访问对象的属性 for .. in..
for (var key in people){
    console.log(people.name);
}
```

#### 删除对象的属性

```javascript
var people = {
    name: 'jmsht',
    age: 18,
    sex: '男',
    doIt: function(){
        console.log('从事IT是个垃圾');
    }
}
//删除对象的属性
delete.people.name;
console.log(people);
```

## 堆与栈

### 数据分类

1. 基本数据类型又称值类型，在存储时，遍历中存储的是值本身。
2. 复杂数据类型，在存储时，变量中存储的仅仅时地址（引用），因此叫引用数据类型。

### 数据类型区别

- `JavaScript`的变量都是保存到栈内存中，基本数据类型的值直接在栈内存中存储，值与值之间是相互独立存在的，修改一个变量不会影响其他的变量。
- 对象是保持到堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，二变量保存的是对象的内存地址（对象的引用），如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响。

### 堆与栈

栈：由操作系统自动分配释放，存放函数的参数值，局部变量的值等。

堆：存储复杂类型，一般由编码者分配释放，若不释放，由垃圾回收机制回收。

**注意：**`JavaScript`中没有堆与栈的概念，只是用于方便理解。

## 内置对象

### 数组API

[详细内容访问JavaScript数组API](JavaScript数组API.md)

### Math对象

[详细内容访问JavaScriptMath对象](JavaScriptMath对象.md)

### String对象

[详细内容访问JavaScriptString对象](JavaScriptString对象.md)

### Date对象

[详细内容访问JavaScriptDate对象](JavaScriptDate对象.md)

### Dom对象

[详细内容访问JavaScriptDom对象](JavaScriptDom对象.md)

### Web API

[详细内容访问JavaScriptWebAPI](JavaScriptWebAPI.md)

### HTML Element 

[详细内容访问JavaScriptHTMLElement](JavaScriptHTMLElement.md)

## 正则表达式

### 概念

![正则](../.vuepress/public/zzdy.jpg)

### RegExp 对象

`RegExp `对象表示正则表达式，它是对字符串执行模式匹配的强大工具。

#### 直接量语法

```
/pattern/attributes
```

#### 创建 RegExp 对象的语法：

```
new RegExp(pattern, attributes);
```

#### 参数

参数 *pattern* 是一个字符串，指定了正则表达式的模式或其他正则表达式。

参数 *attributes* 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。`ECMAScript `标准化之前，不支持 m 属性。如果 *pattern* 是正则表达式，而不是字符串，则必须省略该参数。

#### 返回值

一个新的 `RegExp` 对象，具有指定的模式和标志。如果参数 *pattern* 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 `RegExp` 相同的模式和标志创建一个新的 `RegExp `对象。

如果不用 new 运算符，而将` RegExp() `作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 *pattern* 是正则表达式时，它只返回 *pattern*，而不再创建一个新的 `RegExp` 对象。

#### 抛出

`SyntaxError - `如果 *pattern* 不是合法的正则表达式，或 *attributes* 含有 "g"、"i" 和 "m" 之外的字符，抛出该异常。

`TypeError - `如果 *pattern* 是` RegExp `对象，但没有省略 *attributes* 参数，抛出该异常。

### 修饰符

| 修饰符                                                    | 描述                                                     |
| :-------------------------------------------------------- | :------------------------------------------------------- |
| [i](https://www.w3school.com.cn/jsref/jsref_regexp_i.asp) | 执行对大小写不敏感的匹配。                               |
| [g](https://www.w3school.com.cn/jsref/jsref_regexp_g.asp) | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m                                                         | 执行多行匹配。                                           |

### 方括号

方括号用于查找某个范围内的字符：

| 表达式                                                       | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [[abc\]](https://www.w3school.com.cn/jsref/jsref_regexp_charset.asp) | 查找方括号之间的任何字符。         |
| [[^abc\]](https://www.w3school.com.cn/jsref/jsref_regexp_charset_not.asp) | 查找任何不在方括号之间的字符。     |
| [0-9]                                                        | 查找任何从 0 至 9 的数字。         |
| [a-z]                                                        | 查找任何从小写 a 到小写 z 的字符。 |
| [A-Z]                                                        | 查找任何从大写 A 到大写 Z 的字符。 |
| [A-z]                                                        | 查找任何从大写 A 到小写 z 的字符。 |
| [adgk]                                                       | 查找给定集合内的任何字符。         |
| [^adgk]                                                      | 查找给定集合外的任何字符。         |
| (red\|blue\|green)                                           | 查找任何指定的选项。               |

### 元字符

元字符（Metacharacter）是拥有特殊含义的字符：

| 元字符                                                       | 描述                                        |
| :----------------------------------------------------------- | :------------------------------------------ |
| [.](https://www.w3school.com.cn/jsref/jsref_regexp_dot.asp)  | 查找单个字符，除了换行和行结束符。          |
| [\w](https://www.w3school.com.cn/jsref/jsref_regexp_wordchar.asp) | 查找单词字符。                              |
| [\W](https://www.w3school.com.cn/jsref/jsref_regexp_wordchar_non.asp) | 查找非单词字符。                            |
| [\d](https://www.w3school.com.cn/jsref/jsref_regexp_digit.asp) | 查找数字。                                  |
| [\D](https://www.w3school.com.cn/jsref/jsref_regexp_digit_non.asp) | 查找非数字字符。                            |
| [\s](https://www.w3school.com.cn/jsref/jsref_regexp_whitespace.asp) | 查找空白字符。                              |
| [\S](https://www.w3school.com.cn/jsref/jsref_regexp_whitespace_non.asp) | 查找非空白字符。                            |
| [\b](https://www.w3school.com.cn/jsref/jsref_regexp_begin.asp) | 匹配单词边界。                              |
| [\B](https://www.w3school.com.cn/jsref/jsref_regexp_begin_not.asp) | 匹配非单词边界。                            |
| \0                                                           | 查找 NUL 字符。                             |
| [\n](https://www.w3school.com.cn/jsref/jsref_regexp_newline.asp) | 查找换行符。                                |
| \f                                                           | 查找换页符。                                |
| \r                                                           | 查找回车符。                                |
| \t                                                           | 查找制表符。                                |
| \v                                                           | 查找垂直制表符。                            |
| [\xxx](https://www.w3school.com.cn/jsref/jsref_regexp_octal.asp) | 查找以八进制数 xxx 规定的字符。             |
| [\xdd](https://www.w3school.com.cn/jsref/jsref_regexp_hex.asp) | 查找以十六进制数 dd 规定的字符。            |
| [\uxxxx](https://www.w3school.com.cn/jsref/jsref_regexp_unicode_hex.asp) | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

### 量词

| 量词                                                         | 描述                                        |
| :----------------------------------------------------------- | :------------------------------------------ |
| [n+](https://www.w3school.com.cn/jsref/jsref_regexp_onemore.asp) | 匹配任何包含至少一个 n 的字符串。           |
| [n*](https://www.w3school.com.cn/jsref/jsref_regexp_zeromore.asp) | 匹配任何包含零个或多个 n 的字符串。         |
| [n?](https://www.w3school.com.cn/jsref/jsref_regexp_zeroone.asp) | 匹配任何包含零个或一个 n 的字符串。         |
| [n{X}](https://www.w3school.com.cn/jsref/jsref_regexp_nx.asp) | 匹配包含 X 个 n 的序列的字符串。            |
| [n{X,Y}](https://www.w3school.com.cn/jsref/jsref_regexp_nxy.asp) | 匹配包含 X 至 Y 个 n 的序列的字符串。       |
| [n{X,}](https://www.w3school.com.cn/jsref/jsref_regexp_nxcomma.asp) | 匹配包含至少 X 个 n 的序列的字符串。        |
| [n$](https://www.w3school.com.cn/jsref/jsref_regexp_ndollar.asp) | 匹配任何结尾为 n 的字符串。                 |
| [^n](https://www.w3school.com.cn/jsref/jsref_regexp_ncaret.asp) | 匹配任何开头为 n 的字符串。                 |
| [?=n](https://www.w3school.com.cn/jsref/jsref_regexp_nfollow.asp) | 匹配任何其后紧接指定字符串 n 的字符串。     |
| [?!n](https://www.w3school.com.cn/jsref/jsref_regexp_nfollow_not.asp) | 匹配任何其后没有紧接指定字符串 n 的字符串。 |

### RegExp 对象属性

| 属性                                                         | 描述                                     | FF   | IE   |
| :----------------------------------------------------------- | :--------------------------------------- | :--- | :--- |
| [global](https://www.w3school.com.cn/jsref/jsref_regexp_global.asp) | `RegExp` 对象是否具有标志 g。            | 1    | 4    |
| [ignoreCase](https://www.w3school.com.cn/jsref/jsref_regexp_ignorecase.asp) | `RegExp `对象是否具有标志 i。            | 1    | 4    |
| [lastIndex](https://www.w3school.com.cn/jsref/jsref_lastindex_regexp.asp) | 一个整数，标示开始下一次匹配的字符位置。 | 1    | 4    |
| [multiline](https://www.w3school.com.cn/jsref/jsref_multiline_regexp.asp) | `RegExp` 对象是否具有标志 m。            | 1    | 4    |
| [source](https://www.w3school.com.cn/jsref/jsref_source_regexp.asp) | 正则表达式的源文本。                     | 1    | 4    |

### RegExp 对象方法

| 方法                                                         | 描述                                               | FF   | IE   |
| :----------------------------------------------------------- | :------------------------------------------------- | :--- | :--- |
| [compile](https://www.w3school.com.cn/jsref/jsref_regexp_compile.asp) | 编译正则表达式。                                   | 1    | 4    |
| [exec](https://www.w3school.com.cn/jsref/jsref_exec_regexp.asp) | 检索字符串中指定的值。返回找到的值，并确定其位置。 | 1    | 4    |
| [test](https://www.w3school.com.cn/jsref/jsref_test_regexp.asp) | 检索字符串中指定的值。返回 true 或 false。         | 1    | 4    |

### 支持正则表达式的 String 对象的方法

| 方法                                                         | 描述                             | FF   | IE   |
| :----------------------------------------------------------- | :------------------------------- | :--- | :--- |
| [search](https://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。     | 1    | 4    |
| [match](https://www.w3school.com.cn/jsref/jsref_match.asp)   | 找到一个或多个正则表达式的匹配。 | 1    | 4    |
| [replace](https://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。     | 1    | 4    |
| [split](https://www.w3school.com.cn/jsref/jsref_split.asp)   | 把字符串分割为字符串数组。       |      |      |

## ES6新特性

### let声明

1. 变量不能重复声明。
2. 块级作用域。
3. 不存在变量提升。
4. 不影响作用域链。

```javascript
let name = 'jmsht7355';
{
    let name1 = 'zyf';
}
```

### const声明

1. 一定要赋初始值。
2. 一般常量使用大写。
3. 常量的值不能修改。
4. 块级作用域。
5. 对于数组与对象的元素修改，不算做对常量的修改，不会报错。

```javascript
const schppl = 'qinghua';
```

### 变量的解构

#### 数组的解构

```javascript
const people = ['zx','wf','hu','ah'];
let [x1,x2,x3,x4] = people;
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
```

输出结果：

```
'zx' 'wf' 'hu' 'ah'
```

#### 对象的解构

```javascript
const zheng = {
    name: 'zyf',
    age: 18,
    Learning: function(){
        console.log('html,css,js');
    }
};
let {name,age,learning} = zheng;
console.log(name);
console.log(age);
console.log(learning);
learning();
```

输出结果：

```
'zyf' 18 'html,css,js'
```

### 模板字符串

1. 内容中可以直接出现换行符。
2. 变量拼接。

```javascript
let str = `dfbjfdf ndf`
let htmlbq = `<h2>
				<ul>
					<li>ni hao</li>
					<li>ni hao</li>
				</ul>
				</h2>`

//变量拼接
let lovest = 'zxj';
let out = `${lovest}是我心目中最喜爱的女生！`
console.log(out);
```

输出结果：

```
zxj是我心目中最喜爱的女生！
```

### 对象的简化写法

1. `ES6`允许在大括号里，直接写入变量和函数，作为对象的属性和方法。

```javascript
let name = 'jmshtt';
let change = function(){
    console.log('我们拥有改变你的能力！');
}
const school = {
    name,
    change,
    changeLearning(){
        console.log('函数方法的简化！');
    }
}
```

### 箭头函数

1. `ES6`允许使用箭头定义函数。
2. `this` 是静态的，`this`始终是指向函数声明时所在函数作用域的`this`的值。
3. 不能作为构造函数实例化对象。
4. 不能使用`arguments`变量
5. 箭头函数简写
   - 省略小括号，**当形参有且只有一个的时候**。
   - 省略花括号（大括号）,**当代码体只有一条语句的时候，而且语句的执行结果就是函数的返回值**。

```javascript
//let fn = function(){}

let fn = (a,b)=>{
    return a + b;
}
//调用函数
let sum = fn(1,2);
console.log(sum);

//原箭头函数
let add = (n) =>{
    return 2 * n;
}
console.log(add(9));
//等价于上述箭头函数
let add = n =>{
    return 2 * n;
}
console.log(add(9));
//等价于上述箭头函数
let add = n => 2 * n;

```

#### 应用场景

1. 适合与`this`无关的回调，定时器，数组的方法。
2. 不适合与`this`有关的回调，事件回调，对象的方法。

### ES6函数参数默认值

1. 允许给函数参数赋值初始值。
2. 形参初始值具有默认值的参数要靠后（潜规则）
3. 可以与解构赋值结合。

```javascript
function add (a,b,c){
    return a + b + c;
}
let result = add(1,2);
console.log(result);

//与解构赋值结合
function connect({host = '127.0.0.1',username,password,port}){
    console.log(host);
    console.log(username);
    console.log(password);
    console.log(port);
}
onnect({
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 3306
})
```

### rest参数

`rest`参数必须要放到参数最后。

```javascript
function date(...args){
    console.log(agrs);
}
date('xh','jh','jk');
```

### 扩展运算符

`[...]`扩展运算符能将数组转化为逗号分割的参数序列

```javascript
const names = ['xj','hd','lh'];
function name(){
     console.log(agruments);
}
name(...names);
```

输出结果：

```
'xj','hd','lh'
```

#### 应用

```javascript
//数组合并
const kuaizi = ['王太利','肖央'];
const fenghuang = ['曾毅','玲花'];
const kzfh = [...kuaizi,...fenghuang];
console.log(kzfh);
```

```javascript
//数组克隆
const kuaizi = ['王太利','肖央'];
const xpg = [...kuaizi];
console.log(xpg);
```

```javascript
//将伪数组转为真数组
const divs = dociment.querySeleectorAll('div');
const divArr = [...divs];
console.log(divArr);
```

### symbol（原始数据类型）

它表示独一无二的值。是一种类似于字符串的数据类型。

1. 它的值是唯一的，用来解决命名冲突问题。
2. 它的值不能与其他数据进行运算。
3. 它定义的对象属性不能使用`for..in..`循环遍历，但可使用`Reflect.ownKeys`来获取对象的所有键名。

```javascript
//创建原始数据类型
let s1 = Symbol();
let s2 = Symbol('原始数据类型');
let s3 = Symbol.for('原始数据类型'，'循环遍历'); //symbol创建对象
```

#### 使用场景

```javascript
let game = {
    
}
let methods = {
    up:Symbol(),
    down:Symbol()
}
game.[methods.up] = function(){
    console.log('我可以向上');
}    
game.[methods.down] = function(){
    console.log('我可以向下');
}    
console.log(game);
```

#### 重要属性

1: `Symbol.hasInstance` 一个在执行` instanceof `时调用的方法，用于检测对象的继承信息
2: `Symbol.isConcatSpreadable` 一个布尔值，用于表示当传递一个集合作为`Array.prototype.concat()`的参数是，是否应该将集合内的元素拍平到同一层级
3: `Symbol.iterator `在迭代器和生成器那篇文章已经细讲过
4:` Symbol.match `一个在调用`String.prototype.match()`时调用的方法，用于比较字符串
5: `Symbol.replace `一个在调用`String.prototype.replace()`时调用的方法，用于替换字符串的子串
6: `Symbol.search `一个在调用`String.prototype.search()`时调用的方法，用于定位子串在字符串中的位置
7: `Symbol.split `一个在调用`String.prototype.split()`时调用的方法，用于分割字符串
8: `Symbol.species `用于创建派生对象的构造函数
9: `Symbol.toPrimitive `一个返回对象原始值的方法
10:` Symbol.toStringTag` 一个在调用`Object.prototype.toString()`时使用的字符换，用于创建对象的描述
11: `Symbol.unscopables `一个定义了一些不可被with语句引用的对象属性名称的对象集合

### 迭代器

迭代器是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署`Iterator`接口，就可以完成遍历操作。

1. `ES6`创造了遍历`for..of`循环，`Iterator`接口主要供`for..of`消费
2. 原生具备`Iterator`接口的数据。
   - Arrary
   - Arguments
   - Set
   - Map
   - String
   - TypeArray
   - NodeList
3. 工作原理
   1. 创建一个指针对象，指向当前数据结构的起始位置。
   2. 第一次调用对象的`next`方法，指针自动指向数据结构的第一个成员。
   3. 接下来不断调用`next`方法，指针一直往后移动，直到指向最后一个成员。

```javascript
const names = ['xh','kj','lq','hd','df'];
//使用for..of..遍历
for (let v of names){
    console.log(v);
}
```

### 生成器（函数）

生成器其实就是一个特殊的函数。

```javascript
function * gen(){
   	yield '这是1'
   // console.log('这是1');
    yield '这是2'
  //  console.log('这是2');
    yield '这是3'
   // console.log('这是3');
}

for (let v of gen()){
    console.log(v);
}
```

#### 参数传递

```javascript
function * gen(aaa){
   	yield '这是1'
    yield '这是2'
    yield '这是3'
}
let iterator = gen(aaa);
console.log(iterator.next('123'));
console.log(iterator.next('456'));
console.log(iterator.next('789'));
```

#### 实例

```javascript
//3秒，每秒分别输出111，222，333
function one(){
    setTimeout(()=>{
        console.log('111'));
    },1000)
    iterator.next();
}
function two(){
     setTimeout(()=>{
        console.log('222'));
    },1000)
    iterator.next();
}
function three(){
    setTimeout(()=>{
        console.log('333'));
    },1000)
    iterator.next();
}
function * gen(aaa){
   	yield one();
    yield two();
    yield three();
}
//调用生成器函数
let iterator = gen();
iterator.next();
```

### Promise

`ES6`引入的异步编程解决方案，语法上`Promise`是一个构造函数。用来封装异步操作，并获取其成功或是失败的结果。

1. Promise构造函数：`Promise(excutor){}`
2. `Promise.prototype.then`方法
3. `Promise.prototype.catch`方法

```javascript
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = '数据库中的用户数据';
        // resolve
        resolve(data);
      //  let err = '数据调取失败';
      // reject(err)
    }, 1000)

    p.then(function (value) {
            console.log(value);
        }),
        function (reason) {
            console.error(reason);
        }
})
```

```javascript
//使用ajax获取接口
// 接口地址：https//api.apiopen.top/getJoke
// 创建对象
const xhr = new XMLHttpRequest();
// 初始化
xhr.open('GET','https//api.apiopen.top/getJoke');
// 发送
xhr.send();
// 绑定事件，处理响应结果
xhr.onreadystatechange = function(){
    //判断
    if(xhr .readyState === 4){
        //判断响应状态码 200-299 
        if (xhr.status >= 200 && xhr.status  < 300) {
            //成功
            console.log(xhr.response);
        }else{
            //失败
            console.error(xhr.status);
        }
    }
}
```

```javascript
//使用Promise方法获取接口
// 接口地址：https//api.apiopen.top/getJoke
const p = new Promise((resolve, reject) => {
    // 创建对象
    const xhr = new XMLHttpRequest();
    // 初始化
    xhr.open('GET', 'https//api.apiopen.top/getJoke');
    // 发送
    xhr.send();
    // 绑定事件，处理响应结果
    xhr.onreadystatechange = function () {
        //判断
        if (xhr.readyState === 4) {
            //判断响应状态码 200-299 
            if (xhr.status >= 200 && xhr.status < 300) {
                //成功
                console.log(xhr.response);
            } else {
                //失败
                console.error(xhr.status);
            }
        }
    }

    p.then(function (value) {
        console.log(value);
    }, function (reason) {
        console.log(reason);
    })

});
```

