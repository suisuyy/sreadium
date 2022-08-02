





[https://github.com/suisuyy/sreadium](https://github.com/suisuyy/sreadium)



中文说明

# 简介

**Readium-js-viewer**是epub标准制定方官方项目,一个web epub阅读工具

**sreadium**是基于Readium-js-viewer项目魔改的web Epub阅读器，主要增加**书签功能**和**pwa**离线使用支持。

 

# 基本使用：

浏览器打开

[https://sread.pages.dev/?](https://sread.pages.dev/?)

**拖拽**Epub文件到浏览器窗口开始阅读，

手机使用上方菜单栏**文件按钮**打开

 

 

# 优势

**web 应用，方便快捷**

**原生app体验**

第一次打开sreadium后会自动缓存到本地，之后可**离线使用**（是的，sreadium能），同时加载速度提升

手机可以打开浏览器菜单会有**安装选项**，安装后可在launcher启动

**基于readium，兼容性好**

 

# 缺陷：

不支持上传书籍

目前sreadium和readium一样,是一个**纯前端项目**，所以不能添加图书到书库，

有需要可以自己手动添加Epub到/epub_content,再相应修改/epub_content/epub_library.opds文件,最后重新部署，

免费部署推荐vercel和cloudflare pages。

不支持批注

目前批注可以考虑使用[http://hypothes.is/](http://hypothes.is/),安装其提供的插件,可以实现对所有web内容高 亮和批注笔记功能

后续可能会提供接入类似谷歌网盘打开Epub和保存批注

 

 

# 详细介绍：

 

## 关于readium-js-viewer

[https://github.com/readium/readium-js-viewer](https://github.com/readium/readium-js-viewer)

readium-js-viewer项目提供了一个基本的web阅读器,

主要功能有：

**书库**（不能添加本地文件到书库，阅读本地文件只能使用drag-drop拖拽文件到窗口）

**阅读和批注**（批注功能有缺陷）

**目录**跳转

**分享当前阅读页面**

**全屏模式**

 

**官方**Surge deployment

[https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds](https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds)

 

## sreadium

在readium-js-viewer基础上增加了一些重要功能，优化了一些ui更适合手机使用，

### 主要增加功能：

**书签**（难以置信readium-js-viewer不提供书签功能），

**离线使用功能**（通过service work和Caches）

**类似原生app体验的pwa支持**（离线使用，可安装放到launcher打开，由service work和Caches提供支持）

**其它修改：**

首页书库菜单栏隐藏添加本地书籍按钮（因为没用）

阅读时上方菜单栏不会消失（方便手机使用）

增加打开本地文件按钮（主要方便手机使用，电脑直接使用拖拽）

优化书籍目录界面

上方导航栏始终靠左

 

## 修改说明

sreadium是非正常web开发,是一种hack修改,是在readium渲染好epub内容后修改style和html,添加一些js,主要文件放在/sreadiumhack/

 

Readium源码直接使用其发布的minify js bundle([https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip](https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip)),

基本没有对readium代码直接修改

 

 





English Readme

# Introduction

**Readium-js-viewer**is the official project of the epub standard developer, a web epub reading tool

**sreadium**is a modified web Epub reader based on the Readium-js-viewer project. It mainly adds **bookmark function**and **PWA**offline support.

 

# Basic use:

browser open

[https://sread.pages.dev/?](https://sread.pages.dev/?)

**Drag and drop**the Epub file to the browser window to start reading,

**file button on**the upper menu bar to open the phone

 

 

# Advantage

**web application, convenient and fast**

**Native app experience**

After opening sreadium for the first time, it will be automatically cached locally, and then it can be used **offline**(yes, sreadium can), and the loading speed is improved.

The mobile phone can open the browser menu and there will be **an installation option**. After installation, it can be started in the launcher.

**Based on readium, good compatibility**

 

# defect:

Uploading books is not supported

At present, sreadium, like readium, is a **pure front-end project**, so you cannot add books to the library.

If necessary, you can manually add Epub to /epub_content, then modify the /epub_content/epub_library.opds file accordingly, and finally redeploy it.

Free deployment recommends vercel and cloudflare pages.

Annotations are not supported

At present, you can consider using [http://hypothes.is/ for annotation ](http://hypothes.is/), and install the plug-in provided by it, which can realize the functions of highlighting and annotating all web content

Follow-up may provide access to a similar Google network disk to open Epub and save annotations

 

 

# Detailed introduction:

 

## About readium-js-viewer

[https://github.com/readium/readium-js-viewer](https://github.com/readium/readium-js-viewer)

The readium-js-viewer project provides a basic web reader,

The main functions are:

**Library**(you cannot add local files to the library, you can only use drag-drop to drag files to the window to read local files)

**Reading and Annotation**(Annotation feature is buggy)

**directory**jump

**Share current reading page**

**full screen mode**

 

**Official**Surge deployment

[https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds](https://readium-master.surge.sh/?epubs=https%3A%2F%2Freadium.firebaseapp.com%2Fepub_content%2Fepub_library.opds)

 

## sreadium

On the basis of readium-js-viewer, some important functions have been added, and some ui have been optimized to be more suitable for mobile phones.

### Major additions:

**bookmarks**(unbelievable readium-js-viewer doesn't offer bookmarks),

**Offline usage functionality**(via service work and Caches)

**Pwa support similar to native app experience**(offline use, can be installed and opened in launcher, supported by service work and Caches)

**Other modifications:**

The homepage library menu bar hides the add local book button (because it is useless)

The upper menu bar will not disappear when reading (convenient for mobile phone use)

Add a button to open a local file (mainly convenient for mobile phones, drag and drop directly on the computer)

Optimize the book catalog interface

The upper navigation bar is always on the left

 

## Modify the description

Sreadium is an abnormal web development. It is a hack modification. After readium renders the epub content, the style and html are modified, some js are added, and the main file is placed in /sreadiumhack/

 

The Readium source code directly uses the minify js bundle released by it ( [https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip ](https://github.com/readium/readium-js-viewer/releases/download/v0.32.0/Readium_cloud-reader.zip)),

There is basically no direct modification to the readium code


