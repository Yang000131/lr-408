import { DefaultTheme, defineConfig } from "vitepress";
import { MermaidMarkdown, MermaidPlugin } from "vitepress-plugin-mermaid";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { nav, sidebarDS, sidebarOS, searchOptions } from "./theme/config";

export default defineConfig({
  title: "LR-408",
  lang: "zh-CN",
  description: "LR-408",
  themeConfig: {
    logo: { src: "/art/lr-408.svg", width: 24, height: 24 },
    search: {
      provider: "local",
      options: searchOptions,
    },
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/Yang000131" },
      { icon: "gitee", link: "https://gitee.com/yang_311414/lr-408" },
      { icon: "wechat", link: "" },
      { icon: "qq", link: "https://jq.qq.com/?_wv=1027&k=5n0k1fZJ" },
    ],
    sidebar: {
      "/ds/": { base: "/ds/", items: sidebarDS },
      "/os/": { base: "/os/", items: sidebarOS },
    },
    outline: {
      level: [2, 4],
      label: "页面导航",
    },
    editLink: {
      pattern: "https://gitee.com/yang_311414/lr-408/blob/doc/:path",
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
      copyright: "Copyright © 2025-2026 LR-Software.",
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
  locales: {
    root: { label: "简体中文", lang: "zh-Hans", dir: "ltr" },
    en: { label: "English", lang: "en-US", dir: "ltr" },
  },
  vite: {
    plugins: [MermaidPlugin(), groupIconVitePlugin()],
    optimizeDeps: {
      include: ["mermaid"],
    },
    ssr: {
      noExternal: ["mermaid"],
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
    },
  },
});
