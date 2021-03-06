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
  {
    title: "cnpm",
    link: "https://npmmirror.com/",
  },
  {
    title: "华为镜像",
    link: "https://mirrors.huaweicloud.com/",
  },
  {
    title: "tldraw",
    link: "https://www.tldraw.com/",
  },
  {
    title:"一篇让你完全够用TS的指南",
    link:"https://juejin.cn/post/7088304364078497800"
  }
]);
let interest = reactive({
  title: "Five动漫",
  link: "https://www.fivedongman.com/",
});

let work=reactive({
  title:"软2",
  link:"http://www.xmsoft.com/pzt/fg/index.html?parkCd=02"
});

export default {
  blog,
  code,
  good,
  interest,
};
