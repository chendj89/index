import { reactive } from "vue";
/**
 * 收藏的链接
 */
let blog = reactive([
  {
    title: "Vue3！ElementPlus！更加优雅的使用Icon",
    link: "https://blog.csdn.net/wang_yu_shun/article/details/123650469",
  },
]);

let code = reactive([
  {
    title: "vue2官方文档",
    link: "https://cn.vuejs.org/",
  },
  {
    title: "vue3官方文档",
    link: "https://staging-cn.vuejs.org/",
  },
]);

export default {
  blog,
  code,
};
