// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from "vue";
import { Theme, inBrowser, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import busuanzi from "busuanzi.pure.js";
import ArticleMetadata from "./component/ArticleMetadata.vue";
import "./style/index.css";
import "virtual:group-icons.css";
import "vitepress-markmap-preview/dist/index.css";
import "nprogress-v2/dist/index.css";
import Notice from "./component/Notice.vue";
import { initComponent } from "vitepress-markmap-preview/component";
import mediumZoom from "medium-zoom";
import { NProgress } from "nprogress-v2/dist/index.js";

let homePageStyle: HTMLStyleElement | undefined;

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(Notice),
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      // 卜算子统计
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
      };
      // 进度条
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start();
      };
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
        NProgress.done();
      };
    }
    // 彩虹色卡
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/"),
        { immediate: true },
      );
    }
    // 文章元数据
    app.component("ArticleMetadata", ArticleMetadata);
    // MarkMap
    initComponent(app);
  },
  // 图片放大
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
} satisfies Theme;

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;
    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
