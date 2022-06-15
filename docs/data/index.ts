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
let good = reactive([
  {
    title: "在线预览制作xmind",
    link: "https://xiaojuzi.fun/Xminder/edit.html",
  },
  {
    title: "BEJSON2011",
    link: "https://www.bejson.com/",
  },
]);
let interest = reactive({
  title: "Five动漫",
  link: "https://www.fivedongman.com/",
});

export default {
  blog,
  code,
  good,
  interest,
};
