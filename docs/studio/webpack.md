## 配置webpack中的chainWebpack

```json
//指定版本
 {
    "sass": "^1.52.3",
    "sass-loader": "^10.1.1",
    "string-replace-loader": "^3.1.0",
  }
```

```js
// 引入模块
const StringReplacePlugin = require("string-replace-loader");
// 相应的打包工具中使用工具
chainWebpack(config, isServer) {
    config.module
      .rule("strReplace")
      .test(/\.vue$/)
      .use("tring-replace-loader")
      .loader("string-replace-loader")
      .options({
        search: "/deep/",
        replace: "::v-deep",
      });
  }
```