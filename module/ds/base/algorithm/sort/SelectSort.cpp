//
// Created by 一可爱小白兔 on 2025-08-28 10:32.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 选择排序
 * <li>算法思想：首先在未排序序列中找到最小（或最大）元素，存放到排序序列的起始位置；再从剩余未排序元素中继续寻找最小（或最大）元素，然后放到未排序部分的起始位置
 * <li>时间复杂度：O(n^2)
 * <li>空间复杂度：O(1)
 * <li>稳定性：不稳定
 * <li>基于元素间的比较进行排序
 * <li>最多交换n-1次
 */
class Solution {
public:
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
};

int main() {
    Solution s;
    vector<int> nums = {2, 4, 3, 1, 2, 3};
    s.selectSort(nums);
    for (auto num: nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
