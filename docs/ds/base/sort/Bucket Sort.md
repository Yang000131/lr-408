---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 桶排序 (Bucket Sort)

## 算法思想

**分布式排序算法，它的基本思想是将待排序的元素分布到若干个"桶"中，每个桶再独立排序（通常使用插入排序或其它更高效的排序算法），最后按顺序合并所有桶中的元素以得到有序序列**  

::: tip
桶排序需要预先了解数据的大致范围，并合理设置桶的数量和大小，以达到较好的性能
:::

## 特征

**每趟排序都会确定一个元素放到其最终位置上，使其无序序列的所有元素都小于该元素**  

## 代码实现

::: code-group

```cpp [cpp]
void bucketSort(vector<int> &nums, int &bucketSize) {
    int max_num = *max_element(nums.begin(), nums.end());          // 获取数组中的最大值
    int min_num = *min_element(nums.begin(), nums.end());          // 获取数组中的最小值
    int bucketNum = (max_num - min_num) / bucketSize + 1;          // 桶的数量
    vector<vector<int>> buckets(bucketNum);                        // 创建桶
    for (auto num: nums) {                                         // 将数组中的元素分配到桶中
        int bucketIndex = (num - min_num) / bucketSize;            // 桶的索引
        buckets[bucketIndex].emplace_back(num);                    // 桶中添加元素
    }
    for (auto &bucket: buckets) {                                  // 对每个桶内排序
        sort(bucket.begin(), bucket.end());                        // 可使用插入排序保持稳定性
    }
    int index = 0;
    for (auto &bucket: buckets) {                                  // 从桶中依次取数
        for (int num: bucket) {
            nums[index++] = num;
        }
    }
}
```

:::

## 复杂度、稳定性

- 时间复杂度：O(n + k)
- 空间复杂度：O(n + k)
- 稳定性：稳定排序
- 适用性：适用于数据范围较广但相对集中、数据分布较为均匀的情况
