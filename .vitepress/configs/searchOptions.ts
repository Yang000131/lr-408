import { DefaultTheme } from "vitepress";

export const searchOptions: DefaultTheme.LocalSearchOptions = {
  translations: {
    button: {
      buttonText: "搜索文档",
      buttonAriaLabel: "搜索文档",
    },
    modal: {
      noResultsText: "无法找到相关结果",
      resetButtonTitle: "清除查询条件",
      footer: {
        selectText: "选择",
        navigateText: "切换",
        closeText: "关闭",
      },
      displayDetails: "显示详细信息",
      backButtonTitle: "返回上一级",
    },
  },
};
