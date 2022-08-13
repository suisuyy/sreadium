
documentis edited with google doc, better to read the original document :

[https://docs.google.com/document/d/1X-FXNhC4CyYq0W51ok1uEHcL0JQ8f9RhBHXyC2Le6yA/edit?usp=sharing](https://docs.google.com/document/d/1X-FXNhC4CyYq0W51ok1uEHcL0JQ8f9RhBHXyC2Le6yA/edit?usp=sharing)



# Table of Contents

- [Introduction](#introduction)
- [Basic use:](#basic-use:)
- [Deploy](#deploy)
- [advantage](#advantage)
- [Defect:](#defect)
- [Detailed introduction:](#detailed-introduction:)
  * [About readium-js-viewer](#about-readium-js-viewer)
  * [sreadium](#sreadium)
    + [Mainly added functions:](#mainly-added-functions:)
  * [Modification description](#modification-description)
- [中文简介](#简介)
- [基本使用](#基本使用)
- [部署](#部署)
- [优势](#优势)
- [缺陷：](#缺陷：)
- [详细介绍：](#详细介绍：)
  * [关于readium-js-viewer](#关于readium-js-viewer)
  * [sreadium](#sreadium)
    + [主要增加功能：](#主要增加功能：)
  * [修改说明](#修改说明)



# Introduction

**Readium-js-viewer** is the official epub standard developer The project, a web epub reading tool

**sreadium**is a web Epub reader based on the magic modification of the Readium-js-viewer project. It

mainly increases **bookmark function**and **pwa**offline use support, and

modifies some ui **to be****more suitable for mobile phones**.

 

# Basic use:

recommended to use the chrome browser to open

[https://sread.pages.dev/?](https://sread.pages.dev/?)

**Drag**the Epub file to the browser window to start reading, and

menu bar on the smartphone **file button**to open

 

# Deploy

it in the project folder and start the http server 

# advantage

**web application****s****, which is convenient and fast**

**native app experience**

. After opening sreadium for the first time, it will be automatically cached locally, and then it can be used **offline**(yes, sreadium can), and the loading speed will improve the

mobile browser. After opening sreadium, there will be **installation option****s**. After installation, you can start

**readium based on the launcher, w****h****i****ch****h****as****good compatibility****.**

 

# Defect

does not support uploading books

At present, sreadium, like readium, is a **pure front-end project**, so you cannot add local books to the library.

You can deploy an opds library by imitating /epub_content, and then let readium open it through the url, the format is similar to[https://sreadium .vercel.app/?epubs=](https://sreadium.vercel.app/?epubs=https://your_libraray.opds)[https://your_libraray.opds](https://sreadium.vercel.app/?epubs=https://your_libraray.opds)

the   

highlighted part of the link should be replaced accordingly

. Comments that are not supported

at present can be considered using[http://hypothes.is/](http://hypothes.is/), install the plug-in provided by it, you can achieve all The function of highlighting web content and annotation notes

may be provided in the future. Access similar to Google network disk to open Epub and save annotations

 

 

# Detailed introduction:

 

## About readium-js-viewer

[https://github.com/readium/readium-js-viewer](https://github.com/readium/readium-js-viewer)

The readium-js-viewer project provides a basic web reader, the

main functions are:

**book library**(can not add local files to book library, read Local files can only use drag-drop to drag files to the window)

**r****eading and commenting**(the commenting function is defective)

**d****irectory**

**sharing****the c****urrent reading page**

**f****ull screen mode**

 

**Official**Surge deployment

[https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds](https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds)

 

## sreadium

adds some important functions on the basis of readium-js-viewer, and optimizes some ui to be more suitable for mobile phones.

### Mainly added functions:

**bookmarks**(unbelievable that readium-js-viewer does not provide bookmark functions),

**offline use functions**(through service work and Caches)

**pwa support similar to the native app experience**(offline use, can be installed, and then opened through the mobile phone launcher, supported by service work and Caches)

**Other modifications:**

the table of contents supports folding the

home page library menu bar to hide the add local book button (because it is useless )

The top menu bar will not disappear when moved to the bottom (convenient for mobile phones)

Add a button to open local files (convenient for mobile phones, and the computer can use drag and drop directly) The

upper navigation bar is always on the left

 

## Modification description

sreadium is an abnormal web development,

but a hack modification, which

is to modify the style and html after readium renders the epub content, add some js, and put the main file in /sreadiumhack/

sreadium rarely modify the readium code directly 

Readium source code directly Use its released minify js bundle ([https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip](https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip))


使用说明/readme

文档使用 google doc 编辑,原文档链接

[https://docs.google.com/document/d/1X-FXNhC4CyYq0W51ok1uEHcL0JQ8f9RhBHXyC2Le6yA/edit?usp=sharing](https://docs.google.com/document/d/1X-FXNhC4CyYq0W51ok1uEHcL0JQ8f9RhBHXyC2Le6yA/edit?usp=sharing)


# 简介

**Readium-js-viewer** 是epub标准制定方官方项目,一个 web epub 阅读工具

**sreadium**是基于Readium-js-viewer项目魔改的 web Epub 阅读器，

主要增加 **书签功能**和 **pwa**离线使用支持,

修改了部分 ui **更适合手机**使用。

 

# 基本使用

推荐使用 chrome 浏览器打开

[https://sread.pages.dev/?](https://sread.pages.dev/?)

**拖拽**Epub 文件到浏览器窗口开始阅读，

智能手机点击菜单栏 **文件按钮**打开

 

# 部署

在项目文件夹启动 http server 

# 优势

**web 应用，方便快****速**

**原生app体验**

第一次打开 sreadium 后会自动缓存到本地，之后可 **离线使用**（是的，sreadium 能），同时加载速度提升

手机浏览器打开 sreadium 后会有 **安装选项**，安装后可在launcher 启动

**基于** **readium，兼容性好**

 

# 缺陷

不支持上传书籍

目前 sreadium 和 readium 一样,是一个 **纯前端项目**，所以不能添加本地图书到书库，

可以仿照 /epub_content 单独部署一个opds书库,然后让readium通过url打开,格式类似[https://sreadium.vercel.app/?epubs=](https://sreadium.vercel.app/?epubs=https://your_libraray.opds)[https://your_libraray.opds](https://sreadium.vercel.app/?epubs=https://your_libraray.opds)

链接高亮部分要相应替换

不支持批注

目前批注可以考虑使用[http://hypothes.is/](http://hypothes.is/),安装其提供的插件,可以实现对所有 web 内容高 亮和批注笔记功能

后续可能会提供接入类似谷歌网盘打开 Epub 和保存批注

 

 

# 详细介绍

 

## 关于readium-js-viewer

[https://github.com/readium/readium-js-viewer](https://github.com/readium/readium-js-viewer)

readium-js-viewer项目提供了一个基本的 web 阅读器,

主要功能有：

**书库**（不能添加本地文件到书库，阅读本地文件只能使用drag-drop 拖拽文件到窗口）

**阅读和批注**（批注功能有缺陷）

**目录**

**分享当前阅读页面**

**全屏模式**

 

**官方**Surge deployment

[https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds](https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds)

 

## sreadium

在 readium-js-viewer 基础上增加了一些重要功能，优化了一些ui更适合手机使用

### 主要增加功能：

**书签**（难以置信readium-js-viewer 不提供书签功能），

**离线使用功能**（通过service work 和Caches）

**类似原生app体验的 pwa 支持**（离线使用，可安装,之后通过手机launcher 打开，由service work 和Caches 提供支持）

**其它修改：**

目录表 支持折叠

首页书库菜单栏隐藏添加本地书籍按钮（因为没用）

顶部菜单栏移动到底部不会消失（方便手机使用）

增加打开本地文件按钮（方便手机使用，电脑可直接使用拖拽）

上方导航栏始终靠左

 

## 修改说明

sreadium 是非正常web 开发,

而是一种hack 修改,

是在readium渲染好epub 内容后修改style 和html ,添加一些js,主要文件放在/sreadiumhack/

sreadium 很少对readium代码直接修改 

Readium 源码直接使用其发布的minify js bundle([https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip](https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip))

