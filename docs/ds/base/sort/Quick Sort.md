---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 快速排序 (Quick Sort)

## 算法思想

选基准 --> 分区(将所有小于基准的元素移动到基准左边，所有大于等于基准的元素移动到基准右边) --> 递归

## 特征

每轮排序后，基准值被放到最终正确位置

## 代码实现

::: code-group

```cpp [Quick Sort]
void quickSort(vector<int> &nums, int low, int high) {
    if (low < high) {
        int pivotPos = partition(nums, low, high);          // 获取分区点位置
        quickSort(nums, low, pivotPos - 1);                 // 左子序列递归
        quickSort(nums, pivotPos + 1, high);                // 右子序列递归
    }
}
```

```cpp [基于 Hoare分区]
int partition(vector<int> &nums, int low, int high) {
    int pivot = nums[low];
    while (low < high) {                                   // 退出条件：low == high
        while (low < high && nums[high] >= pivot)          // 从右往左找第一个小于pivot的数，并赋值到low处
            --high;
        nums[low] = nums[high];
        while (low < high && nums[low] <= pivot)           // 从左往右找第一个大于pivot的数，并赋值到high处
            ++low;
        nums[high] = nums[low];
    }
    nums[low] = pivot;                                     // 将pivot放到最终位置(此时pivot左边的数都小于pivot,右边的数都大于pivot)
    return low;                                            // 返回pivot的最终位置
}
```

```cpp [基于 Lomuto分区]
int partition_2(vector<int> &nums, int low, int high) {
    int pivot = nums[high];
    int i = low - 1;                                        // 指针i维护一个区域[low,i]：所有元素 ≤ pivot
    for (int j = low; j < high; ++j) {                      // 指针j遍历数组[low,high-1]
        if (nums[j] <= pivot) {
            ++i;
            swap(nums[i], nums[j]);
        }
    }
    swap(nums[i + 1], nums[high]);                          // 将pivot放到最终位置(此时pivot左边的数都小于pivot,右边的数都大于pivot)
    return i + 1;                                           // 返回pivot的最终位置
}
```

:::

## 复杂度、稳定性

- 时间复杂度：O(n * log n)
- 空间复杂度：O(log n)
- 稳定性：不稳定
