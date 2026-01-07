import { DefaultTheme } from "vitepress";

export const sidebarDS: DefaultTheme.SidebarItem[] = [
  {
    text: "数据结构",
    items: [
      {
        text: "基础知识",
        collapsed: false,
        items: [
          {
            text: "线性表",
            collapsed: true,
            items: [
              { text: "顺序表", link: "base/linear/Seq List" },
              { text: "链表", link: "base/linear/Linked List" },
              { text: "栈", link: "base/linear/Stack" },
              { text: "队列", link: "base/linear/Queue" },
              { text: "优先队列", link: "base/linear/Priority Queue" },
              { text: "字符串", link: "base/linear/String" },
            ],
          },
          {
            text: "树",
            collapsed: true,
            items: [],
          },
          {
            text: "图",
            items: [
              { text: "图的定义", link: "base/graph/Graph Define" },
              { text: "图的遍历", link: "base/graph/Graph Traversal" },
            ],
          },
          {
            text: "查找",
            link: "base/search/Search",
            collapsed: true,
            items: [
              { text: "线性查找", link: "base/search/Linear Search" },
              { text: "二分查找", link: "base/search/Binary Search" },
              { text: "并查集", link: "base/search/Union Find Set" },
            ],
          },
          {
            text: "排序",
            link: "base/sort/Sort",
            collapsed: true,
            items: [
              { text: "冒泡排序", link: "base/sort/Bubble Sort" },
              { text: "选择排序", link: "base/sort/Select Sort" },
              { text: "插入排序", link: "base/sort/Insert Sort" },
              { text: "快速排序", link: "base/sort/Quick Sort" },
              { text: "堆排序", link: "base/sort/Heap Sort" },
              { text: "归并排序", link: "base/sort/Merge Sort" },
              { text: "基数排序", link: "base/sort/Radix Sort" },
              { text: "希尔排序", link: "base/sort/Shell Sort" },
              { text: "计数排序", link: "base/sort/Count Sort" },
              { text: "桶排序", link: "base/sort/Bucket Sort" },
            ],
          },
        ],
      },
      {
        text: "C++ STL",
        items: [{ text: "无序哈希集合", link: "stl/Unordered Set" }],
      },
      {
        text: "LeetCode",
      },
    ],
  },
];
