---
title: Vue基础入门
sidebar: auto
---

# <center>Vue 基础入门</center>

## 简述

该文档内容是以`Vue3.x`为基准的相关内容。更多涉及基础概念，详细内容请访问[**官方文档**](https://v3.cn.vuejs.org/guide/introduction.html)。

## 安装3.0版本

更多安装方式请访问[**官方文档**](https://v3.cn.vuejs.org/guide/introduction.html)。
### npm安装

```shell
npm install vue@next
```

## 常用指令（模板语法）

`Vue.js` 使用了基于 `HTML` 的模板语法，允许开发者声明式地将 DOM 绑定至底层组件实例的数据。所有·`Vue.js` 的模板都是合法的 `HTML`，所以能被遵循规范的浏览器和 `HTML` 解析器解析。

在底层的实现上，`Vue` 将模板编译成虚拟 `DOM `渲染函数。结合响应性系统，`Vue` 能够智能地计算出最少需要重新渲染多少组件，并把 `DOM `操作次数减到最少。

详细内容可访问[相关文档](https://v3.cn.vuejs.org/guide/template-syntax.html#%E6%8F%92%E5%80%BC)。

### v-if 与v-show（条件渲染）

`v-if`是真正的条件渲染，它会保证在切换过程中，条件块内的事件监听器和子组件适当的被销毁和重建，`v-show`不管初始条件是什么，元素总是会被渲染，并且只是简单地基于`css`进行切换，如果需要频繁切换`v-show`较为实用。

### v-if

根据表达式的真假值来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 `<template>`，将提取它的内容作为条件块。

当条件变化时该指令触发过渡效果。

2.x 版本中在一个元素上同时使用 `v-if` 和 `v-for` 时，`v-for` 会优先作用。

3.x 版本中 `v-if` 总是优先于 `v-for` 生效。

### v-show

根据表达式的真假值，切换元素的 `display` `CSS property`。

当条件变化时该指令触发过渡效果。

### v-for 遍历（列表渲染）

### v-for

基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression`，为当前遍历的元素提供别名：

```html
<div v-for="item in items">
  {{ item.text }}
</div>
```

另外也可以为数组索引指定别名 (或者用于对象的键)：

```html
<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

`v-for` 的默认行为会尝试原地修改元素而不是移动它们。要强制其重新排序元素，你需要用特殊 attribute `key` 来提供一个排序提示：

```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 items 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

```html
<ul id="array-rendering">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

```js
Vue.createApp({
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
}).mount('#array-rendering')
```

> **现实开发中常适用绑定key来避免未知的Bug**。

详细内容可访问[列表渲染](https://v3.cn.vuejs.org/guide/list.html#%E7%94%A8-v-for-%E6%8A%8A%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E5%AF%B9%E5%BA%94%E4%B8%BA%E4%B8%80%E7%BB%84%E5%85%83%E7%B4%A0)。

### v-bind（Class 与 Style 绑定）

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，`Vue.js` 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组.

### v-bind

动态地绑定一个或多个 attribute，或一个组件 `prop` 到表达式。

在绑定 `class` 或 `style` attribute 时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。

在绑定 `prop `时，`prop `必须在子组件中声明。可以用修饰符指定不同的绑定类型。

没有参数时，可以绑定到一个包含键值对的对象。注意此时 `class` 和 `style` 绑定不支持数组和对象。

详细内容可访问[Class 与 Style 绑定](https://v3.cn.vuejs.org/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-html-class)。

### v-on（事件处理）

我们可以使用 `v-on` 指令 (通常缩写为 `@` 符号) 来监听 DOM 事件，并在触发事件时执行一些 `JavaScript`。用法为 `v-on:click="methodName"` 或使用快捷方式 `@click="methodName"`。

绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

用在普通元素上时，只能监听[原生 DOM 事件](https://developer.mozilla.org/en-US/docs/Web/Events)。用在自定义元素组件上时，也可以监听子组件触发的**自定义事件**。

详细内容可访问[事件处理](https://v3.cn.vuejs.org/guide/events.html)。

### v-model（双向绑定）

## 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。对于任何包含响应式数据的复杂逻辑，你都应该使用[**计算属性**](https://v3.cn.vuejs.org/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)。

计算属性本质上是属性，写法如函数，命名如属性。多用于页面上多个属性进行运算。

>计算属性(computed)与函数(methods)的区别：计数属性会缓存属性结果，如果多次调用，计算属性只会运算一次，而方法则会有多次运算。

## 组件化开发

### 组件基础

详细内容可访问[组件基础](https://v3.cn.vuejs.org/guide/component-basics.html)。

### 注册组件

一般步骤：1.创建`vue`实例。2.定义组件。3.挂载`vue`实例。4.注册组件。

详细内容可访问[组件注册](https://v3.cn.vuejs.org/guide/component-registration.html)。

### 全局组件与局部组件

详细内容可访问[全局注册](https://v3.cn.vuejs.org/guide/component-registration.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)和[局部注册](https://v3.cn.vuejs.org/guide/component-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)。

### 父子组件与组件传值（Prop）

#### 基本通信原则

1. 不要在子组件中直接修改父组件的状态数据。
2. 数据和处理数据的函数应该在同一模块内。

#### 通信方式

1. `props`(父->子组件通信)
2. 自定义事件(父<--子组件通信)
3. 消息订阅与发布
4. `vuex`

#### props

1. 只指定名称
2. 指定名称和类型
3. 指定名称/类型/必要性/默认值

**注意事项：**

1. 数据验证。
2. 用于父组件向子组件传值。
3. 所有标签属性都会成为组件对象的属性，模板页面可以直接引用。
4. 如果需要向非子后代传递数据必须多层逐级传递。
5. 兄弟组件间不能直接Props通信，必须借助父组件才能实现。

详细内容可访问[Props](https://v3.cn.vuejs.org/guide/component-props.html)。

#### 自定义事件

1. 该方法只适用于子组件向父组件发送消息。
2. 不适用于隔代组件或兄弟组件间通信。

#### $root与$parent的使用

###  动态组件 & 异步组件

详细内容可访问[动态组件 & 异步组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)。

### 组件的生命周期

下图展示了实例的生命周期。

![官方-组件生命周期图](../.vuepress/public/live.svg)

### 插槽

`Vue` 实现了一套内容分发的` API`，这套 `API` 的设计灵感源自 [Web Components 规范草案](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)，将 `<slot>` 元素作为承载分发内容的出口。

插槽是子组件中的提供给父组件使用的一个占位符，用`<slot></slot>`表示。父组件可以在这个占位符中填充任何模板代码，如`HTML`、组件等。

详细内容可访问[插槽](https://v3.cn.vuejs.org/guide/component-slots.html#%E6%8F%92%E6%A7%BD)。

#### 具名插槽

详细内容可访问[具名插槽](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)。

#### 作用域插槽

详细内容可访问[作用域插槽](https://v3.cn.vuejs.org/guide/component-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)。

- 渲染作用域
  1. 父级模板里的所有内容都是在父级作用域中编译。
  2. 子模板里的所有内容都是在子作用域中编译的。
- 作用域插槽的使用
  1. 父组件替换插槽中的标签。
  2. 使用的是子组件中的数据。

## Vue过度动画

`Vue `提供了一些抽象概念，可以帮助处理过渡和动画，特别是在响应某些变化时。这些抽象的概念包括：

- 在 `CSS` 和 `JS` 中，使用内置的 `<transition>` 组件来钩住组件中进入和离开 DOM。
- 过渡模式，以便你在过渡期间编排顺序。
- 在处理多个元素位置更新时，使用 `<transition-group>` 组件，通过 FLIP 技术来提高性能。
- 使用 `watchers` 来处理应用中不同状态的过渡。

详细内容可访问[过渡动画](https://v3.cn.vuejs.org/guide/transitions-overview.html)。

## 组合式API

详细内容可访问[组合式API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E7%BB%84%E5%90%88%E5%BC%8F-api-%E5%9F%BA%E7%A1%80)。

### Mixin

`Mixin `提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。一个 `mixin `对象可以包含任意组件选项。当组件使用 `mixin` 对象时，所有` mixin `对象的选项将被“混合”进入该组件本身的选项。

详细内容可访问[Mixin](https://v3.cn.vuejs.org/guide/mixins.html)。

### 自定义指令

- 自定义全局指令
- 自定义局部指令

详细内容可访问[自定义指令](https://v3.cn.vuejs.org/guide/custom-directive.html)。

### 渲染函数

`Vue` 推荐在绝大多数情况下使用模板来创建你的` HTML`。然而在一些场景中，你真的需要 `JavaScript` 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。

详细内容可访问[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)。

## Vue工程化基础

### Vue-cli

`Vue CLI` 是一个基于 `Vue.js` 进行快速开发的完整系统。对于`vue3.x`，要使用`npm`上可用`vue-cli 4.5v`以上

#### 安装

```bash
npm install -g @vue/cli
```

详细内容可访问[Vue-cli官方文档](https://cli.vuejs.org/)

### Vite

`Vite `(法语意为 "快速的"，发音 `/vit/`) 是一种新型前端构建工具，能够显著提升前端开发体验。

Vite 需要 [Node.js](https://nodejs.org) 版本 >= 12.0.0。

#### 安装

```shell
npm init vite@latest
```

详细内容可访问[Vite官方文档](https://cn.vitejs.dev/)。

### Vue Router

`Vue Router` 是 [Vue.js](http://v3.vuejs.org/) 的官方路由。它与` Vue.js `核心深度集成，让用` Vue.js `构建单页应用变得轻而易举。功能包括：

- 嵌套路由映射
- 动态路由选择
- 模块化、基于组件的路由配置
- 路由参数、查询、通配符
- 展示由` Vue.js `的过渡系统提供的过渡效果
- 细致的导航控制
- 自动激活` CSS `类的链接
- `HTML5 history `模式或` hash` 模式
- 可定制的滚动行为
- `URL `的正确编码

#### 安装

```shell
npm install vue-router@4
```

详细内容可访问[Vue Router官方文档](https://next.router.vuejs.org/zh/index.html)。

#### history 模式与hash模式的区别

![history `模式或` hash` 模式](../.vuepress/public/hashHis.jpg)

#### 前端路由

**单页面应用程序**（SPA）：整个站点只有一个网页，请求时，一次性把整个网页请求下来，找打前端路由系统，根据映射表，对应`URL`展示对应的页面。

#### 导航与路由出口

**简单案例**

```vue
<template>
    <div>
        <!-- 导航 -->
        <div id="nav">
            <router-link to="/home"></router-link>
            <router-link to="/about"></router-link>
            <!-- 路由出口 -->
            <router-view></router-view>
        </div>
    </div>
</template>
```

#### 路由模板与重定向

```javascript
// 引入
import {createRenderer,createWebHashHistory,createWebHistory} from 'vue-router'
import home from './../components/Home.vue'
import home from './../components/About.vue'

// 创建路由对象
const routers = [
    // 路由重定向
    {path: '/', redirect: '/Home'},

    {path: 'Home', component: '/Home'},
    {path: 'About', component:'/About'},
]

const router = createRenderer(
    {
        history: createWebHashHistory(),
        routers
    }
)

// 导出路由对象
export default router
```

#### 动态路由

在某些场景下一个页面的path路径可能是不确定的。

```javascript
{path: '/news/:id', component:'/News'},
```

#### 路由懒加载

![懒加载](../.vuepress/public/ljz.jpg)

```javascript
//路由懒加载
const Home = ()=>import('./../components/Home.vue')
const About = ()=>import('./../components/About.vue')

//另一种方式
const routers = [
    // 路由重定向
    {path: '/', redirect: '/Home'},

    {path: '/', component: '()=>import('./../components/Home.vu'},
    {path: '/', component: '()=>import('./../components/About.vue'},
]
```

#### 路由嵌套

```javascript
// 引入
import {createRenderer,createWebHashHistory,createWebHistory} from 'vue-router'
import home from './../components/Home.vue'
import About from './../components/About.vue'
import News from './../components/News.vue'
import Msg from './../components/Msg.vue'
import Order from './../components/Order.vue'

// 创建路由对象
const routers = [
    // 路由重定向
    {path: '/', redirect: '/Home'},

    {path: '/', component: '/Home'},
    {path: 'About', component:'/About'},
    {path: 'News', 
     component:'/News'
     children: [
    	 //路由重定向
     	{path: '/News', redirect: '/News/Msg'},
    	//子路由
     	{path:'Msg',component:Msg},
    	{path:'Order',component:Order},
     ]
    },
]
```

#### 参数传递

![参数传递](../.vuepress/public/cscd.jpg)

#### Router与Route对象

![route and router](../.vuepress/public/route-router.jpg)

#### 全局守卫

**路由（导航）守卫**

```javascript
//全局路由前置守卫
router.beforeEach(
    guard:(to:RouteLocationNormalized,
    from:RouteLocationNormalized,
    next:NavigationGuardNext)=>{
    //放行
    next()
}
)
//全局路由后置守卫
router.afterEach(
    guard:(to:RouteLocationNormalized,
    from:RouteLocationNormalized)=>{
}
)
```

**组件内的守卫**

详细内容可访问[组件内的守卫](https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB)

#### keep-alive 过度动效

```vue
<router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
</router-view>
```

### Promise

![promise](../.vuepress/public/promise-1.jpg)

#### 三种状态

![三种状态](../.vuepress/public/promise-2.jpg)

###  Axios

#### 安装

```shell
npm install axios
```

#### 发起get请求

```javascript
import axios from 'axios'
export default{
    setup() {
        
        const getReq = ()=>{
            // 发起get请求
            //方法1
          //  axios.get(url,'www.demo.com',config).then((res)=>{
           // 	params: {
        //   		 id: zy001,
         //  		 name: 'fcx'
     //   }

         //   }).catch((error)=>{
         //       console.log(error);
         //   })
             //方法2
            axios({
                method: 'get',
                url: 'https://www.demo.com',
                params: {
        			id: zy001,
   		 			name: 'fcx'
    				  }
            }).then((res)=>{
                
            }).catch((error)=>{
                
            })
        }
       return {
           getReq
       }
        
    }
}
```

#### 发起post请求

```javascript
axios({
        method: 'post',
        url: 'https://www.demo.com',
        data: {
        			id: zy001,
   		 			name: 'fcx'
    				  }
         }).then((res)=>{
                
         }).catch((error)=>{
                
         })
```

#### 并发请求

```javascript
const allReq = ()=>{
    axios.all([
        //并发多个get请求
        axios({url:https://www.demo1.com }),
        axios({url:https://www.demo2.com }),
    ]).then((res)=>{
            
    }).catch((error)=>{
            
        })
}
```

#### 常用配置选项

![常用配置](../.vuepress/public/axios-1.jpg)

#### 全局配置

```javascript
import axios from 'axios'
export default{
    setup() {
        axios.defults.baseURL = 'https://www.demo.com/api'
        axios.defults.timeout = 1000ms
        const getReq = ()=>{
          
            axios({
                method: 'get',
                url: 'https://www.demo.com',
                params: {
        			id: zy001,
   		 			name: 'fcx'
    				  }
            }).then((res)=>{
                
            }).catch((error)=>{
                
            })
        }
       return {
           getReq
       }
        
    }
}
```

详细内容访问[Axios中文文档](http://www.axios-js.com/zh-cn/docs/)

### Vuex

`Vuex `是一个专为` Vue.js `应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

详细内容访问[Vuex中文文档](https://next.vuex.vuejs.org/zh/index.html)

#### 安装

```shell
npm install vuex@next --save
```

#### Vuex 组成

![vue组成](../.vuepress/public/vuex.jpg)

![vue组成](../.vuepress/public/vuex-1.jpg)

![vue组成](../.vuepress/public/vuex-2.jpg)

####  State

详细内容访问[state](https://next.vuex.vuejs.org/zh/guide/state.html)

#### Getter

详细内容访问[Getter](https://next.vuex.vuejs.org/zh/guide/getters.html)

#### Mutation

详细内容访问[Mutation](https://next.vuex.vuejs.org/zh/guide/mutations.html)

#### Action

详细内容访问[Action](https://next.vuex.vuejs.org/zh/guide/actions.html)

####  Module

详细内容访问[Module](https://next.vuex.vuejs.org/zh/guide/modules.html)

#### 简单案例:计数器

```javascript
// 引入vuex
import {createStore} from 'vuex'

// 创建store对象
const store = createStore(options, {
    // 全局共享状态（数据）存放
    state: {
            counter: 0,
    },
    getters: {},
    // 同步提交状态
    mutations: {
        // 加一
        INCREMENT(state){
            state.counter++;
        },
        // 减一
        DECREMENT(state){
            state.counter--;
        },
    },
    // 提交操作（可以是同步也可以是异步）给mutations
    actions: {
         // 加一
        increment({commit}){
           commit('INCREMENT')
        },
        // 减一
        decrement({commit}){
            commit('DECREMENT')
        },
    }
})


// 导出
export default store
```

为同步操作时可精简

####  

