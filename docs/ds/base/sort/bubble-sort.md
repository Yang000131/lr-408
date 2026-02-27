---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 冒泡排序 (Bubble Sort) {#bubble-sort}

::: info
冒泡排序，也叫 Exchange Sort，是一种简单直观的排序算法。
:::

## 算法思想 {#idea}

从前往后两两比较相邻元素的值，如果发现逆序则交换，重复进行直到没有逆序为止

## 特征 {#feature}

每趟排序都会确定一个元素放到其最终位置上，使其无序序列的所有元素都小于该元素

## 代码实现 {#code}

::: code-group

```cpp [cpp]
void bubbleSort(vector<int> &nums) {
    int n = nums.size();
    for (int i = 0; i < n - 1; i++) {
        bool flag = false;
        for (int j = 0; j < n - 1 - i; j++) {    // 每趟排序都会确定一个元素放到其最终位置上(n-1-i~n-1区间元素都是有序的)
            if (nums[j] > nums[j + 1]) {
                swap(nums[j], nums[j + 1]);
                flag = true;
            }
        }
        if (!flag)                               // 未交换，说明数组已经有序，可以提前退出
            break;
    }
}
```

:::

## 复杂度、稳定性 {#complexity}

- 时间复杂度：O(n^2)
- 空间复杂度：O(1)
- 稳定性：稳定排序
- 适用性：顺序表、链表
