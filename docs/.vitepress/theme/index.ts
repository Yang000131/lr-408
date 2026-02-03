// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { Theme, inBrowser } from "vitepress";
import DefaultTheme from "vitepress/theme";
import busuanzi from "busuanzi.pure.js";
import ArticleMetadata from "./component/ArticleMetadata.vue";
import "./style/index.css";
import "virtual:group-icons.css";
import "vitepress-markmap-preview/dist/index.css";
import Notice from "./component/Notice.vue";
import { initComponent } from "vitepress-markmap-preview/component";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(Notice),
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
      };
    }
    app.component("ArticleMetadata", ArticleMetadata);
    initComponent(app);
  },
} satisfies Theme;
