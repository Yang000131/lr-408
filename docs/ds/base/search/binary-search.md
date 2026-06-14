---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 二分查找 (Binary Search)

> [!CAUTION] 注意
> 要求 **有序数组**

## 核心思想

## 代码实现

::: code-group

```cpp [迭代.cpp]
/**
 * 迭代实现
 * <li>时间复杂度 O(log n)</li>
 * <li>空间复杂度 O(1)</li>
 */
int binary_search(const vector<int> &nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target)
            return mid;
        else if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
}
```

```cpp [递归.cpp]
/**
 * 递归实现
 * <li>时间复杂度 O(log n)</li>
 * <li>空间复杂度 O(log n)</li>
 */
int binary_search(const vector<int> &nums, int target, int left, int right) {
    if (left <= right) {
        int mid = left + (right - left) / 2;
        if (target == nums[mid])
            return mid;
        else if (target > nums[mid])
            return binary_search(nums, target, mid + 1, right);
        else
            return binary_search(nums, target, left, mid - 1);
    }
    return -1;
}
```

:::

## 折半查找判定树
