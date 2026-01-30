---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 线性查找（Linear Search）

## 基于索引的for循环

```cpp
int linear_search(const vector<int> &nums, int target) {
    for (auto i = 0; i < nums.size(); i++) {
        if (nums[i] == target)
            return i;               // 找到时返回索引
    }
    return -1;
}
```

## 基于范围的for循环

```cpp
int linear_search(const vector<int> &nums, int target) {
    int index = 0;
    for (auto num: nums) {
        if (num == target)
            return index;
        index++;                    // 没找到时，索引加1
    }
    return -1;
}
```

## 基于STL

```cpp
int linear_search(const vector<int> &nums, int target) {
    auto it = find(nums.begin(), nums.end(), target);  // 找到返回迭代器，没找到返回nums.end()
    if (it != nums.end())
        return distance(nums.begin(), it);             // 返回迭代器it和nums.begin()之间的距离
    return -1;
}
```
