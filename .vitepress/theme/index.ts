// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { Theme, inBrowser } from "vitepress";
import DefaultTheme from "vitepress/theme";
import busuanzi from "busuanzi.pure.js";
import ArticleMetadata from "./component/ArticleMetadata.vue";
import "./style/index.css";
import "virtual:group-icons.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
      };
    }
    app.component("ArticleMetadata", ArticleMetadata);
  },
} satisfies Theme;
