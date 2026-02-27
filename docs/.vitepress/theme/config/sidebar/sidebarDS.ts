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
              { text: "稀疏矩阵", link: "base/linear/Sparse Matrix" },
              { text: "栈", link: "base/linear/Stack" },
              { text: "队列", link: "base/linear/Queue" },
              { text: "优先队列", link: "base/linear/Priority Queue" },
              { text: "字符串", link: "base/linear/String" },
            ],
          },
          {
            text: "树",
            collapsed: true,
            items: [{ text: "二叉树", link: "base/tree/Tree Node" }],
          },
          {
            text: "图",
            items: [
              { text: "图的定义", link: "base/graph/Graph Define" },
              { text: "图的遍历", link: "base/graph/graph-traversal" },
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
            link: "base/sort/sort",
            collapsed: true,
            items: [
              { text: "冒泡排序", link: "base/sort/bubble-sort" },
              { text: "选择排序", link: "base/sort/select-sort" },
              { text: "插入排序", link: "base/sort/insert-sort" },
              { text: "快速排序", link: "base/sort/quick-sort" },
              { text: "堆排序", link: "base/sort/heap-sort" },
              { text: "归并排序", link: "base/sort/merge-sort" },
              { text: "基数排序", link: "base/sort/radix-sort" },
              { text: "希尔排序", link: "base/sort/shell-sort" },
              { text: "计数排序", link: "base/sort/count-sort" },
              { text: "桶排序", link: "base/sort/bucket-sort" },
            ],
          },
        ],
      },
      {
        text: "数据结构真题答案",
        collapsed: true,
        items: [
          {
            text: "2009年（链表倒数第 k 个结点）",
            link: "ds_408_answer/answer_09.md",
          },
          {
            text: "2010年 (翻转数组)",
            link: "ds_408_answer/answer_10.md",
          },
          {
            text: "2011年 (两个升序数组的中位数)",
            link: "ds_408_answer/answer_11.md",
          },
          {
            text: "2012年（链表中相同后缀的起始位置）",
            link: "ds_408_answer/answer_12.md",
          },
          {
            text: "2013年（寻找数组主元素）",
            link: "ds_408_answer/answer_13.md",
          },
          {
            text: "2015年（删除链表中的绝对值重复的结点）",
            link: "ds_408_answer/answer_15.md",
          },
          {
            text: "2018年（缺失的最小正整数）",
            link: "ds_408_answer/answer_18.md",
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
