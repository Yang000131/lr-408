//
// Created by 一可爱小白兔 on 2025-08-28 10:22.
//

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

/**
 * @brief 桶排序
 *
 * @attention
 * 桶排序需要预先了解数据的大致范围，并合理设置桶的数量和大小，以达到较好的性能
 *
 * <li>算法思想：分布式排序算法，它的基本思想是将待排序的元素分布到若干个"桶"中，每个桶再独立排序（通常使用插入排序或其它更高效的排序算法），最后按顺序合并所有桶中的元素以得到有序序列
 * <li>时间复杂度：O(n + k)
 * <li>空间复杂度：O(n + k)
 * <li>稳定性：稳定
 * <li>适用性：适用于数据范围较广但相对集中、数据分布较为均匀的情况
 */
class Solution {
public:
    void bucketSort(vector<int> &nums, int &bucketSize) {
        int max_num = *max_element(nums.begin(), nums.end());          // 获取数组中的最大值
        int min_num = *min_element(nums.begin(), nums.end());          // 获取数组中的最小值
        int bucketNum = (max_num - min_num) / bucketSize + 1;                   // 桶的数量
        vector<vector<int>> buckets(bucketNum);                              // 创建桶
        for (auto num: nums) {                                              // 将数组中的元素分配到桶中
            int bucketIndex = (num - min_num) / bucketSize;                     // 桶的索引
            buckets[bucketIndex].emplace_back(num);                          // 桶中添加元素
        }
        for (auto &bucket: buckets) {                              // 对每个桶内排序
            sort(bucket.begin(), bucket.end());                        // 可使用插入排序保持稳定性
        }
        int index = 0;
        for (auto &bucket: buckets) {                              // 从桶中依次取数
            for (int num: bucket) {
                nums[index++] = num;
            }
        }
    }
};

int main() {
    Solution s;
    vector<int> nums = {2, 4, 3, 1, 2, 3, 1, 2, 1, 1, 2, 1, 2, 1, 1};
    int bucketSize = 5;
    s.bucketSort(nums, bucketSize);
    for (int num: nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}