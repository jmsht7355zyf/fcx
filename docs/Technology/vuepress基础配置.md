---
title: vuepress基配置
sidebar: auto
---

# <center>vuepress基配置</center>

## 安装

```shell
npm install -D vuepress
```

安装前，新建文件夹，并初始化。

```shell
npm init
```

## 脚本

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 图片等公共资源路径

公共资源一般放在public文件夹，在markdown中引用，一般使用以下路径：

```html
<img :src="$withBase('/test.png')" alt="test">
```

## 部署到GitHub pages

在根目录下，新建脚步文件deploy.sh。

```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

## 配置

### base

部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 应该被设置成 `"/bar/"`。

###  title

网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。

###  description

网站的描述，它将会以 `<meta>` 标签渲染到当前页面的 HTML 中。

## 主题

### themeConfig

为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。

### 基本配置

默认主题配置详情查询官网[相关配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)。

## 静态页面强制刷新缓存

```html
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">
```

