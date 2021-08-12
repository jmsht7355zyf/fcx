---
title: Vue工程化基础配置
sidebar: auto
---

# <center>vue工程化基础配置</center>

## 项目结构

```项目结构
-project
	-node_modules
	-public（公共文件夹）							
	-src（主路径）
		-assets
			-scss
				-common.scss
		-component
		-pages(页面结构)
			-home
				-Home.vue
			-about
				-About.vue
		-router（路由）
			-index.js
		-store（状态管理）
			-index.js
		-App.vue
		-main.js（主js文件）
		-vue.config.js（vue配置文件）
	-gitgnore
	-index.html（入口html模板）
	-package-lock.json
	-package.json（项目配置文件）
	-vite.config.js（vite配置文件）
```

## 基本文件初始配置

### main.js

```javascript
// 引入 VUE
import { createApp } from 'vue'
import App from './App.vue'

//引入全局路由对象
import Router from "./router/index.js";

// 引入全局公共样式
import './assets/scss/common.scss'

// 定义挂载
const app = createApp(App)

// 使用
app.use(Router)
app.mount('#app')
```

### package.json

```json
{
  "name": "msyy",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "vue": "^3.0.5",
    "vue-router": "^4.0.11",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.3.0",
    "@vue/compiler-sfc": "^3.0.5",
    "sass": "^1.37.5",
    "vite": "^2.4.4"
  }
}
```

### router-index.js

```javascript
// 引入 ROUTER HISTORY模式
import {
    createRouter,
    createWebHistory
} from 'vue-router'

//创建路由对象
const routes = [

    //路由重定向
    {
        path: '/',
        redirect: '/home'
    },

    //home页面
    {
        path: '/home',
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */'../pages/home/Home.vue')
    },

    //about页面
    {
        path: '/about',
        name: "About",
        component: () => import(/* webpackChunkName: "about" */'../pages/about/About.vue')
    },

]

const router = createRouter({
    //路由模式
    history: createWebHistory(),
    routes

})

//导出路由对象
export default router
```

### store-index.js

```javascript
// 引入vuex
import {createStore} from 'vuex'

// 创建store对象
const store = createStore(options, {
    // 全局共享状态（数据）存放
    state: {
          
    },
    getters: {},
    // 同步提交状态
    mutations: {
       
    },
    // 提交操作（可以是同步也可以是异步）给mutations
    actions: {
        
       
    }
})

// 导出
export default store
```

