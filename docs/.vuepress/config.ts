import path from "path";
import { defineUserConfig } from "@vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { visualizer } from "rollup-plugin-visualizer";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { mdPlugin } from "./md";
// 自定义主题
import { chenccTheme } from "./theme";
import { viteMockServe } from "vite-plugin-mock";
export default defineUserConfig({
  base: process.env.NODE_ENV !== "production" ? "/" : "/index/",
  lang: "zh-CN",
  title: "文档",
  port: 9090,
  // 自定义主题
  theme: chenccTheme({
    // 默认主题配置项
  }),
  // md文档中的别名
  alias: {
    "@docs": path.resolve(__dirname, ".."),
    "@public": path.join(__dirname, "/public"),
  },

  // md配置
  markdown: {
    importCode: {
      handleImportPath: (str) => {
        // 代码段支持@docs
        return str.replace(/^@docs/, path.resolve(__dirname, ".."));
      },
    },
    code: {
      // 关闭序号
      lineNumbers: false,
    },
  },
  extendsMarkdown: (md) => {
    mdPlugin(md);
  },
  plugins: [
    // 根据组件文件或目录自动注册 Vue 组件
    registerComponentsPlugin({
      // 组件的根目录为当前目录
      componentsDir: path.join(__dirname),
      // 只有匹配的目录，目录下的组件才会自动注册
      componentsPatterns: [
        "examples",
        "theme/layouts/components",
        "theme/layouts/components/navbar",
      ],
      getComponentName: (filename) => {
        console.log(filename);
        // 修改组件注册名称
        filename = filename
          .replace("examples/", "")
          .replace("theme/layouts/components/navbar/", "")
          .replace("theme/layouts/components/", "")
          .replace(".vue", "");
        filename = filename.replace(/\/|\\/g, "-");
        return filename;
      },
    }),
  ],
  // vite配置
  bundler: viteBundler({
    // vite配置
    viteOptions: {
      resolve: {
        alias: {
          // 代码中的别名
          "@docs": path.resolve(__dirname, "./docs"),
        },
      },
      // 配置icon
      plugins: [
        Components({
          dirs: ["./.vuepress"],
          deep: true,
          allowOverrides: true,
          resolvers: [IconsResolver()],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),
        Icons({ compiler: "vue3", autoInstall: true }),
        // 分析包
        // visualizer({
        //   open: true,
        //   brotliSize: true,
        //   filename: "report.html",
        // }),
        viteMockServe({
          // https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md
          mockPath: "./docs/.vuepress/mock",
          localEnabled: true,
        }),
      ],
      css: {
        // 开启sourcemap 有利于定位
        devSourcemap: true,
        preprocessorOptions: {
          scss: {},
        },
      },
    },
  }),
});
