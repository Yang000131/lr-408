import { DefaultTheme } from "vitepress";

export const sidebarOS: DefaultTheme.SidebarItem[] = [
  {
    text: "操作系统",
    items: [
      { text: "大纲", link: "index" },
      {
        text: "核心重点",
        items: [
          { text: "临界区互斥问题", link: "core/critical-section-problem" },
        ],
      },
      {
        text: "经典同步问题",
        items: [
          {
            text: "生产者-消费者问题",
            link: "classic_sync/producer-consumer-problem",
          },
          { text: "橘子-苹果问题", link: "classic_sync/orange-apple-problem" },
          {
            text: "哲学家进餐问题",
            link: "classic_sync/dinning-philosophers-problem",
          },
          { text: "读者-写者问题", link: "classic_sync/reader-writer-problem" },
          { text: "理发师问题", link: "classic_sync/sleeping-barber-problem" },
          { text: "吸烟者问题", link: "classic_sync/smokers-problem" },
          { text: "实现前驱关系", link: "classic_sync/precedence-graph" },
        ],
      },
      {
        text: "操作系统真题答案",
        collapsed: true,
        items: [
          {
            text: "2019年（哲学家进餐问题）",
            link: "os_408_answer/answer-2019.md",
          },
          {
            text: "2022年 (实现前驱关系)",
            link: "os_408_answer/answer-2022.md",
          },
          {
            text: "2024年（单生产者-消费者问题）",
            link: "os_408_answer/answer-2024.md",
          },
          {
            text: "2025年（多生产者-消费者问题）",
            link: "os_408_answer/answer-2025.md",
          },
        ],
      },
      {
        text: "拓展",
        collapsed: true,
        items: [
          {
            text: "动态优先数调度算法",
            link: "extend/dynamic-priority-scheduling-algorithm",
          },
        ],
      },
    ],
  },
];
