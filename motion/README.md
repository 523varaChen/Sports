## STD Frontend Project Built with Taro

### 介绍

运动+商城项目，使用[UniApp](https://uniapp.dcloud.net.cn/)框架，可编译成 H5/微信小程序/支付宝小程序/百度小程序等。

### 前提

1. Node 版本 >8
2. yarn / npm
3. [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 本地开发

1. `点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器`
2. 启动小程序 点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具

### 首次启动小程序

1. 如果是第一次使用，需要先配置小程序 ide 的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径

### 如何升级 HBuilder

1. 更新 HBuilder 工具：

```
手动更新
```

### 部署

1. 测试环境
2. 在 HBuilderX 工具栏，点击发行，选择原生 app-云端打包，如下图：

- Lain3: [](https://uniapp.dcloud.net.cn/quickstart-hx.html#%E8%BF%90%E8%A1%8Cuni-app)

2. 线上

- TODO: 待补充

### 开发注意点

1. 转译多端时部分语法不相通

- 原因：由于微信小程序的 ，百度，头条等多种容易造成语法不相通；
- 参考文档：[](https://uniapp.dcloud.net.cn/matter.html)

### map 地理位置

1. 高德地图

- 第一次获取位置不收费，后续多次获取按需收费
