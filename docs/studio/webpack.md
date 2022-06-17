## 配置webpack中的chainWebpack

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