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
              { text: "顺序表", link: "base/linear/seq-list" },
              { text: "链表", link: "base/linear/linked-list" },
              { text: "稀疏矩阵", link: "base/linear/sparse-matrix" },
              { text: "栈", link: "base/linear/stack" },
              { text: "队列", link: "base/linear/queue" },
              { text: "优先队列", link: "base/linear/priority-queue" },
            ],
          },
          {
            text: "树",
            collapsed: true,
            items: [
              { text: "树的性质", link: "base/tree/tree-feature" },
              { text: "二叉树的定义", link: "base/tree/binary-tree-define" },
              { text: "二叉树的遍历", link: "base/tree/binary-tree-traversal" },
            ],
          },
          {
            text: "图",
            items: [
              { text: "图的定义", link: "base/graph/graph-define" },
              { text: "图的遍历", link: "base/graph/graph-traversal" },
            ],
          },
          {
            text: "查找",
            link: "base/search/search-summary",
            collapsed: true,
            items: [
              { text: "线性查找", link: "base/search/linear-search" },
              { text: "二分查找", link: "base/search/binary-search" },
              { text: "并查集", link: "base/search/union-find-set" },
            ],
          },
          {
            text: "排序",
            link: "base/sort/sort-summary",
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
            link: "ds_408_answer/answer-2009.md",
          },
          {
            text: "2010年 (翻转数组)",
            link: "ds_408_answer/answer-2010.md",
          },
          {
            text: "2011年 (两个升序数组的中位数)",
            link: "ds_408_answer/answer-2011.md",
          },
          {
            text: "2012年（链表中相同后缀的起始位置）",
            link: "ds_408_answer/answer-2012.md",
          },
          {
            text: "2013年（寻找数组主元素）",
            link: "ds_408_answer/answer-2013.md",
          },
          {
            text: "2015年（删除链表中的绝对值重复的结点）",
            link: "ds_408_answer/answer-2015.md",
          },
          {
            text: "2018年（缺失的最小正整数）",
            link: "ds_408_answer/answer-2018.md",
          },
        ],
      },
      {
        text: "笔记",
        items: [
          { text: "复杂度", link: "note/complexity" },
          { text: "字符串", link: "note/string" },
          { text: "数据结构类型定义", link: "note/type-define" },
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
