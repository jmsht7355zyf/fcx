---
title:git基础及命令
---

# <center>git基础及命令</center>

***

## 常用命令

```shell
git init  #初始化
git commit -m '备注内容'
git clone <repo>  #克隆远程仓库
git config --global user.name "用户名"
git config --global user.email "邮箱"
```

## 分支管理

```shell
git branch (branchname)  #创建分支
git branch  #查看所有分支
git checkout (branchname) #切换分支
git branch -d (branchname)  #删除分支
git merge (branchname)  #分支合并
```

## 新建仓库

```shell
git init  #初始化仓库
git add .  #添加文件到暂存区  
git commit  #将暂存区内容添加到仓库中
```

## 常规推送

```shell
git add .
git commit -m “备注内容”
git push
```

## 强制使用远程仓库代码覆盖本地仓库

```shell
git fetch --all
git reset --hard origin/master
git pull

#并行使用
git fetch --all && git reset --hard origin/master && git pull
```

## 覆盖后重新推送

```shell
git add .
git commit -m “备注内容”
#push到远程服务器之前，先将本地仓库的变化连接到远程仓库主分支
git pull origin master
git push -u origin master  #把本地仓库的文件推送到远程仓库
```