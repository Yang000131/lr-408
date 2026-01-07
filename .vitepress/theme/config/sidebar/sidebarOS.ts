import { DefaultTheme } from "vitepress";

export const sidebarOS: DefaultTheme.SidebarItem[] = [
  {
    text: "操作系统",
    items: [
      { text: "大纲", link: "Index" },
      { text: "临界区互斥问题", link: "Critical Section Problem" },
      {
        text: "经典同步问题",
        collapsed: true,
        items: [
          {
            text: "生产者-消费者问题",
            link: "classic_sync/Producer-Consumer Problem",
          },
          { text: "橘子-苹果问题", link: "classic_sync/Orange-Apple Problem" },
          {
            text: "哲学家进餐问题",
            link: "classic_sync/Dinning Philosophers Problem",
          },
          { text: "读者-写者问题", link: "classic_sync/Reader-Writer Problem" },
          { text: "理发师问题", link: "classic_sync/Sleeping-Barber Problem" },
          { text: "吸烟者问题", link: "classic_sync/Smokers Problem" },
          { text: "实现前驱关系", link: "classic_sync/Precedence Graph" },
        ],
      },
      {
        text: "操作系统真题答案",
        collapsed: true,
        items: [
          {
            text: "2019年（哲学家进餐问题）",
            link: "os_408_answer/answer_2019.md",
          },
          {
            text: "2022年 (实现前驱关系)",
            link: "os_408_answer/answer_2022.md",
          },
          {
            text: "2024年（单生产者-消费者问题）",
            link: "os_408_answer/answer_2024.md",
          },
          {
            text: "2025年（多生产者-消费者问题）",
            link: "os_408_answer/answer_2025.md",
          },
        ],
      },
      {
        text: "拓展",
        collapsed: true,
        items: [
          {
            text: "动态优先数调度算法",
            link: "/os/Dynamic Priority Scheduling Algorithm",
          },
        ],
      },
    ],
  },
];
