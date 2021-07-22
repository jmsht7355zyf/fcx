---
title: vim简单配置
sidebar: auto
---

# <center>vim简单配置</center>

## vim配置文件存放位置

系统`vimrc`配置文件存放在`Vim`的安装目录，默认路径为/usr/share/vim/.vimrc。

```shell
sudo vim ~/.vimrc
```

## **基本配置**

  1.支持中文不乱码

  ```shell
  '设置编码'
  set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
  set termencoding=utf-8
  set encoding=utf-8
  ```

  2.显示行号

  ```shell
  '显示行号'
  set nu
  set number
  ```

  3.突出显示当前行

  ```shell
  set cursorline
  set cul          'cursorline的缩写形式'
  ```

  4.突出显示当前列

  ```shell
  set cursorcolumn
  set cuc          'cursorcolumn的缩写形式'
  ```

  5.启用鼠标

  ```shell
  set mouse=a
  set selection=exclusive
  set selectmode=mouse,key
  ```

  6.显示括号匹配

  ```shell
  set showmatch
  ```

  7.设置缩进

  ```shell
  '设置Tab长度为4空格'
  set tabstop=4
  '设置自动缩进长度为4空格'
  set shiftwidth=4
  '继承前一行的缩进方式，适用于多行注释'
  set autoindent
  ```

  8.设置粘贴模式

  ```shell
  '通过set paste可以在插入模式下粘贴内容时不会有任何格式变形、胡乱缩进等问题。'
  set paste
  ```

  9.显示状态栏和光标当前位置

  ```shell
  '总是显示状态栏'
  set laststatus=2
  '显示光标当前位置'
  set ruler
  ```

  10.打开文件类型检测

  ```shell
  filetype plugin indent on
  ```

  11.Vim配置变更立即生效

  ```shell
  '让vimrc配置变更立即生效'
  autocmd BufWritePost $MYVIMRC source $MYVIMRC
  ```