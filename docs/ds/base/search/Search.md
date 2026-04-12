---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 查找算法总结

## 思维导图 {#mind-map}
```markmap
- 查找
    - 数组查找
        - 线性查找
        - 二分查找
        - 分块查找
    - 树形查找
    - 哈希查找
```

## 线性查找

- 复杂度
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

- 实现  
  [Linear Search](Linear%20Search.md)

## 二分查找（折半查找）

- 复杂度
  - 时间复杂度：O(log n)
  - 空间复杂度：
    - 递归：O(log n)
    - 非递归：O(1)

- 实现  
  [Binary Search](Binary%20Search.md#代码实现)

## 拓展

### 查找排序数组中第一个等于给定值元素的位置  

::: code-group

```cpp [标准实现]
int find_first_target(vector<int> &nums, int target) {
    int left = 0, right = nums.size();
    int ans = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] >= target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
```

```cpp [STL实现]
auto low = lower_bound(nums.begin(), nums.end(), target);
if(low != nums.end() && *low == target)            
    return low - nums.begin();   
```

:::

### 查找排序数组中最后一个等于给定值元素的位置

::: code-group

```cpp [标准实现]
int find_last_target(vector<int> &nums, int target) {
    int left = 0, right = nums.size();
    int ans = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] <= target) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}
```

```cpp [STL实现]
auto up = upper_bound(nums.begin(), nums.end(), target);
if(up != nums.begin())
    return up - nums.begin() - 1;
```

:::

### LeetCode

- [704. 二分查找](https://leetcode.cn/problems/binary-search/description/)
- [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/description/) ❤️❤️❤️ 为什么不存在的target返回left?
- [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/)