---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 计数排序 (Count Sort)

## 算法思想

**将待排序的数组中的元素值作为计数数组的索引，其个数作为计数数组的元素值，遍历辅助数组排序**  

## 代码实现

::: code-group

```cpp [cpp]
void countSort(vector<int> &nums) {
    int max_num = *max_element(nums.begin(), nums.end());       // 获取数组中的最大值
    int min_num = *min_element(nums.begin(), nums.end());       // 获取数组中的最小值
    int range = max_num - min_num + 1;
    vector<int> count(range, 0);                                // 初始化计数数组
    for (int num: nums) {                                       // 统计每个数字出现的次数
        count[num - min_num]++;
    }
    int index = 0;
    for (int i = 0; i < range; i++) {                           // 根据计数数组重新生成排序后的数组
        while (count[i] > 0) {
            nums[index++] = i + min_num;
            count[i]--;
        }
    }
}
```

:::

## 复杂度、稳定性

- 时间复杂度：O(n + k)
- 空间复杂度：O(k)
- 稳定性：非比较的稳定排序
- 适用性：适用于数据范围不大的整数排序问题，尤其是当输入数据集中且分布均匀时效果最佳

### 拓展：标准计数排序

::: tip 过程

- 找出待排序数组中的最大值和最小值，确定计数数组的大小
- 创建一个计数数组，统计每个元素出现的次数
- 对计数数组进行累加，得到每个元素在排序后数组中的位置
- 创建一个临时数组，从后向前扫描原数组，根据计数数组确定元素位置
- 将临时数组复制回原数组
:::

``` cpp
public:
    void countSort(vector<int> &nums) {
        int max_num = INT_MIN, min_num = INT_MAX;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            max_num = max(max_num, nums[i]);                                  // 获取数组中的最大值
            min_num = min(min_num, nums[i]);                                  // 获取数组中的最小值
        }
        int range = max_num - min_num + 1;
        vector<int> count(range, 0);                                          // 初始化计数数组
        for (int num: nums) {                                                 // 统计每个数字出现的次数
            count[num - min_num]++;
        }
        for (int i = 1; i < range; i++) {                                     // 次数累加(统计小于等于nums[i]个数，包含重复数字)
            count[i] += count[i - 1];
        }
        vector<int> res(n, 0);
        for (int i = n - 1; i >= 0; i--) {                                    // 倒序遍历(保证排序的稳定性)，将每个数字放到对应的位置
            res[count[nums[i] - min_num] - 1] = nums[i];                      // count[nums[i] - min_num]表示<=nums[i]的数字的个数
            count[nums[i] - min_num]--;
        }
        nums = res;                                                           // 将结果复制到原数组
    }

private:
    int getMax(vector<int> &nums) {
        int max_num = nums[0];
        for (int num: nums) {
            if (num > max_num) {
                max_num = num;
            }
        }
        return max_num;
    }
    int getMin(vector<int> &nums) {
        int min_num = nums[0];
        for (int num: nums) {
            if (num < min_num) {
                min_num = num;
            }
        }
        return min_num;
    }
```
