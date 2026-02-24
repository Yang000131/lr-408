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
  head: [["link", { rel: "icon", href: "/lr-408.svg" }]],
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
      { icon: "gitee", link: "https://gitee.com/yang_311414" },
      { icon: "bilibili", link: "https://space.bilibili.com/516750485" },
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
      pattern: "https://gitee.com/yang_311414/lr-408/blob/doc/docs/:path",
      text: "在Gitee编辑本页",
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
