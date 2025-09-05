//
// Created by 一可爱小白兔 on 2025-08-28 10:30.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 快速排序
 * <li>算法思想：选基准-->分区(将所有小于基准的元素移动到基准左边，所有大于等于基准的元素移动到基准右边)-->递归</li>
 * <li><font color="red">每轮排序后，基准值被放到最终正确位置</font></li>
 * <li>时间复杂度：O(n log n)</li>
 * <li>空间复杂度：O(log n)</li>
 * <li>稳定排序：否</li>
 */
class Solution {
public:
    void quickSort(vector<int> &nums, int low, int high) {
        if (low < high) {
            int pivotPos = partition(nums, low, high);       // 获取分区点位置
            quickSort(nums, low, pivotPos - 1);         // 左子序列递归
            quickSort(nums, pivotPos + 1, high);        // 右子序列递归
        }
    }

private:
    /**
     * 基于Hoare分区
     */
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

    /**
     * 基于Lomuto分区
     */
    int partition_2(vector<int> &nums, int low, int high) {
        int pivot = nums[high];
        int i = low - 1;                                        // 指针i维护一个区域[low,i]：所有元素 ≤ pivot
        for (int j = low; j < high; ++j) {                      // 指针j遍历数组[low,high-1]
            if (nums[j] <= pivot) {
                ++i;
                swap(nums[i], nums[j]);
            }
        }
        swap(nums[i + 1], nums[high]);                   // 将pivot放到最终位置(此时pivot左边的数都小于pivot,右边的数都大于pivot)
        return i + 1;                                           // 返回pivot的最终位置
    }
};

int main() {
    Solution s;
    vector<int> nums = {2, 4, 3, 1, 2, 3};
    s.quickSort(nums, 0, nums.size() - 1);
    for (auto num: nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}