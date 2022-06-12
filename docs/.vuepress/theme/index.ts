import type { Theme } from "@vuepress/core";
import { defaultTheme } from "@vuepress/theme-default";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

export const chenccTheme = (options: DefaultThemeOptions): Theme => {
  // 清除样式
  return {
    name: "vuepress-theme-chencc",
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, "layouts/index.vue"),
    },
  };
};
