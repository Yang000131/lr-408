// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { Theme,inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import busuanzi from 'busuanzi.pure.js'
import WDocTitleMeta from './component/WDocTitleMeta.vue'
import './style/index.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // if (inBrowser) {
    //   // 访问量统计，路由加载完成，在加载页面组件后（在更新页面组件之前）调用
    //   router.onAfterRouteChange = () => {
    //     busuanzi.fetch()
    //   }
    // }
    // // ...
    //  app.component('weiz-title-meta', WDocTitleMeta)
  }
} satisfies Theme
