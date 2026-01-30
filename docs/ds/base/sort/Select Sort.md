---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 选择排序 (Select Sort)

## 算法思想

首先在未排序序列中找到最小（或最大）元素，存放到排序序列的起始位置；再从剩余未排序元素中继续寻找最小（或最大）元素，
然后放到未排序部分的起始位置

## 代码实现

```cpp
void selectSort(vector<int> &nums) {
    int n = nums.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex])
                minIndex = j;
        }
        if (minIndex != i)
            swap(nums[i], nums[minIndex]);
    }
}
 ```

## 复杂度、稳定性

- 时间复杂度：O(n^2)
- 空间复杂度：O(1)
- 稳定性：不稳定
- 最多交换n-1次
