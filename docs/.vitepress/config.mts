import { defineConfig } from "vitepress";
import { MermaidMarkdown, MermaidPlugin } from "vitepress-plugin-mermaid";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import {
  nav,
  sidebarDS,
  sidebarCO,
  sidebarOS,
  sidebarCN,
  searchOptions,
} from "./theme/config";
import vitepressProtectPlugin from "vitepress-protect-plugin";
import { vitepressMarkmapPreview } from "vitepress-markmap-preview";

export default defineConfig({
  base: "/lr-408/",
  title: "LR-408",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "public/lr-408.svg" }]],
  description: "LR-408",
  themeConfig: {
    logo: { src: "/lr-408.svg", width: 24, height: 32, alt: "LR-408" },
    search: {
      provider: "local",
      options: searchOptions,
    },
    externalLinkIcon: true,
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/Yang000131" },
      {
        icon: {
          svg: '<svg t="1770367623208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1560" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="1561"></path></svg>',
        },
        link: "https://gitee.com/yang_311414",
      },
      {
        icon: {
          svg: '<svg t="1722175138562" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23425" width="256" height="256"><path d="M234.908525 9.656195a80.468288 80.468288 0 0 1 68.398044 0 167.374038 167.374038 0 0 1 41.84351 30.577949l160.936576 140.819503H621.156306L782.092881 40.234144a168.983404 168.983404 0 0 1 41.84351-30.577949 80.468288 80.468288 0 0 1 107.022823 66.788678 80.468288 80.468288 0 0 1-17.703024 53.913753 449.817728 449.817728 0 0 1-35.406046 32.187315 232.553351 232.553351 0 0 1-22.531121 18.507706h100.58536a170.59277 170.59277 0 0 1 118.288383 53.10907A171.397453 171.397453 0 0 1 1128.106519 352.4511v462.692655a325.896565 325.896565 0 0 1-4.023415 70.00741 178.639599 178.639599 0 0 1-80.468288 112.655603 173.006819 173.006819 0 0 1-92.53853 25.749852H212.377404a341.18554 341.18554 0 0 1-72.421459-4.023415 177.834916 177.834916 0 0 1-111.046237-80.468287A172.202136 172.202136 0 0 1 1.550491 846.526387V388.66183A360.497929 360.497929 0 0 1 1.550491 321.873151a177.030233 177.030233 0 0 1 160.936575-143.233552h105.413457c-16.89834-12.070243-31.382632-26.554535-46.671607-39.429461a80.468288 80.468288 0 0 1-25.749852-65.983996A80.468288 80.468288 0 0 1 234.908525 9.656195M216.400819 321.873151a80.468288 80.468288 0 0 0-63.569948 57.937167 108.632188 108.632188 0 0 0 0 30.577949v380.615001a80.468288 80.468288 0 0 0 55.523119 80.468288 106.21814 106.21814 0 0 0 34.601364 5.63278h654.207179a80.468288 80.468288 0 0 0 76.444873-47.47629 112.655603 112.655603 0 0 0 8.046829-53.10907v-354.060465a135.186723 135.186723 0 0 0 0-38.624779 80.468288 80.468288 0 0 0-52.304387-54.718435 129.553943 129.553943 0 0 0-49.890338-7.242146H254.220914a268.764081 268.764081 0 0 0-37.820095 0z m0 0" fill="#20B0E3" p-id="23426"></path><path d="M348.368811 447.40368a80.468288 80.468288 0 0 1 55.523118 18.507706 80.468288 80.468288 0 0 1 28.163901 59.546533v80.468287a80.468288 80.468288 0 0 1-16.093658 51.499705 80.468288 80.468288 0 0 1-131.967992-9.656195 104.608774 104.608774 0 0 1-10.460877-54.718436v-80.468287a80.468288 80.468288 0 0 1 70.00741-67.593362z m416.021047 0a80.468288 80.468288 0 0 1 86.101068 75.64019v80.468288a94.147897 94.147897 0 0 1-12.070243 53.10907 80.468288 80.468288 0 0 1-132.772675 0 95.757262 95.757262 0 0 1-12.874926-57.132485v-80.468287a80.468288 80.468288 0 0 1 70.00741-70.812093z m0 0" fill="#20B0E3" p-id="23427"></path></svg>',
        },
        link: "https://space.bilibili.com/516750485",
      },
    ],
    sidebar: {
      "/ds/": { base: "/ds/", items: sidebarDS },
      "/co/": { base: "/co/", items: sidebarCO },
      "/os/": { base: "/os/", items: sidebarOS },
      "/cn/": { base: "/cn/", items: sidebarCN },
    },
    outline: {
      level: [2, 4],
      label: "页面导航",
    },
    editLink: {
      pattern: "https://github.com/Yang000131/lr-408/blob/doc/docs/:path",
      text: "在Github编辑本页",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "由一可爱小白兔支持",
      copyright: `Copyright © 2021-${new Date().getFullYear()} LR-Software.`,
    },
    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
  cleanUrls: true,
  vite: {
    plugins: [
      MermaidPlugin(),
      groupIconVitePlugin(),
      vitepressProtectPlugin({
        disableF12: true,
        disableCopy: true,
        disableSelect: true,
      }),
    ],
    optimizeDeps: {
      include: ["mermaid"],
    },
    ssr: {
      noExternal: ["mermaid"],
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    codeCopyButtonTitle: "复制代码",
    config: (md) => {
      md.use(MermaidMarkdown);
      md.use(groupIconMdPlugin);
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === "h1") htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
      vitepressMarkmapPreview(md);
    },
  },
});
