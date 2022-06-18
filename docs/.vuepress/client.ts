import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
// import Antd from "ant-design-vue";
import "element-plus/dist/index.css";
// import "ant-design-vue/dist/antd.css";

import "./theme/styles/css-vars.scss";
import "./theme/styles/app.scss";
import "./theme/index.scss";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus);
    // app.use(Antd);
  },
  setup() {},
  rootComponents: [],
});
