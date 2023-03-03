---
title: 'Mac 前端开发基础环境'
---


# Mac 前端开发基础环境

## Node.js
> 现代化前端开发框架和脚手架都依赖于NodeJS,`PS: 不会Node的前端不是好前端 `  

从官网直接下载安装即可
 [NodeJs官网](https://nodejs.org/en/)
### 基础用法

``` sh
 # 查看版本
 node -v
 # 运行js文件
 node 文件路径
```

## pnpm
> pnpm 是一个非常好用的包管理器,性能相较于npm和yarn提升近两倍,并且modules小,缓存机制优秀,monorepo也很简单好用   
>`Node16开始支持了corepack,可以不用刻意下载,进阶配置中会讲解`   

### 安装
``` zsh 
# 安装好node后,使用npm 全局安装pnpm
npm install pnpm -g

```

### 基础用法

与npm 等效的语法
| npm | pnpm | 
| ------ | ------ | 
| `npm install` | `pnpm install` |
| `npm i <pkg>` | `pnpm add <pkg>` | 
| `npm run <cmd>` | `pnpm <cmd>` | 

安装软件包及其依赖的任何软件包。 默认情况下，任何新软件包都安装为生产依赖项。

| Command | 含义 | 
| ------ | ------ | 
| `pnpm add <pkg>` | 保存到 dependencies |
| `pnpm  add  -D <pkg>` | 保存到 devDependencies | 
| `pnpm  add  -O <pkg>` | 保存到 optionalDependencies | 
| `pnpm  add  -S <pkg>` | 保存到 dependencies | 
| `pnpm  add  <pkg> -w` | 保存到 workspace | 
| `pnpm install <pkg> -g` | 安装到全局 | 
| `pnpm add <pkg>@next` | 安装 next tag | 
| `pnpm add <pkg>@3.0.0` | 安装指定版本 3.0.0 | 

::: tip
"dependencies"表示开发和上线都需要的第三方包，用-S   
"devdependencies"表示仅在开发阶段需要的第三方包，用-D
:::

## vue-cli
> Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统,它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

### 安装
``` sh
npm install -g @vue/cli
```

### 基本使用
``` sh
# 创建项目
vue create hello-world
# 使用图形化界面
vue ui
```


## mac 常用快捷键
``` 
Mac 和 Windows 按键对应关系
control             ctrl
option              Alt
command             功能键，即苹果键

// 访达
Command + Shift + 3                // 截取全屏到桌面
Command + Shift + 4                // 截取所选区域到桌面
Command + Shift + N                // 新建文件夹
Command + Shift + .                // 显示/隐藏 隐藏文件
Command + Shift + G                // 调出窗口，可输入绝对路径直达文件夹
Command +  C                       // 复制文件
Command +  V                       // 粘贴文件
Command + Option + V               // 剪切文件，需要先复制文件
Command + Option + C               // 复制选中文件的路径

// 浏览器
Command + L                        // 光标直接跳至地址栏
Command + T                        // 打开一个新标签页
Command + 数字键 N                  // 切换到第 N 个标签页
Command + '+-'                     // 放大/缩小页面
Command + 左右箭头                  // 返回上一页或者下一页
Control + Tab                      // 转向下一个标签页
Control + Shift + Tab              // 转向上一个标签页

// 应用程序
Command + H                        // 隐藏非全屏的应用程序
Command + W                        // 关闭当前应用窗口
Command + Q                        // 完全退出当前应用
Command + N                        // 新建当前应用窗口
Command + ,                        // 打开当前应用的偏好设置
Command + 空格											// 打开聚焦搜索
Command + Option + esc             // 打开强制退出的窗口
Command + control + F              // 应用全屏
Command + control + 空格            // 打开表情符号选择界面

// 其他
Command + control + Q              // 锁定屏幕
option  + 空格	
```
