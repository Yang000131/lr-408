//
// Created by 一可爱小白兔 on 2025-08-28 10:28.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 归并排序
 *
 * <li>算法思想：将待排序数组递归地分割成两半，直到每个子数组只包含一个元素（此时认为子数组已排序）；递归地合并相邻的子数组，合并时比较两个子数组的元素，按顺序放入临时数组
 * <li>时间复杂度：O(n*log n)
 * <li>空间复杂度：O(n)
 * <li>稳定排序：是
 */
class Solution {
public:
    void mergeSort(vector<int> &nums, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(nums, left, mid);        // 排序左半部分
            mergeSort(nums, mid + 1, right);    // 排序右半部分
            merge(nums, left, mid, right);          // 合并两个有序部分
        }
    }

private:
    void merge(vector<int> &nums, int left, int mid, int right) {
        vector<int> tmp(right - left + 1);          // 仅分配需要的临时空间
        int i = left, j = mid + 1, k = 0;
        while (i <= mid && j <= right) {               // 排序当前两个子表
            if (nums[i] <= nums[j]) {
                tmp[k] = nums[i];
                i++;
            } else {
                tmp[k] = nums[j];
                j++;
            }
            k++;
        }
        while (i <= mid)                               // 当某个子表元素扫描完，将另一个子表未扫描的元素复制到tmp
            tmp[k++] = nums[i++];
        while (j <= right)
            tmp[k++] = nums[j++];
        for (int p = 0; p < tmp.size(); ++p) {         // 将tmp的排序结果复制回原nums
            nums[p + left] = tmp[p];
        }
    }
};

int main() {
    Solution s;
    vector<int> nums = {2, 4, 3, 1, 2, 3};
    s.mergeSort(nums, 0, nums.size() - 1);
    for (auto num: nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
