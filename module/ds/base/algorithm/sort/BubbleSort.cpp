//
// Created by 一可爱小白兔 on 2025-08-28 10:19.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 冒泡排序
 *
 * <li>算法思想：从前往后两两比较相邻元素的值，如果发现逆序则交换，重复进行直到没有逆序为止</li>
 * <li><font color="red">每趟排序都会确定一个元素放到其最终位置上，使其无序序列的所有元素都小于该元素</font></li>
 * <li>时间复杂度：O(n^2) </li>
 * <li>空间复杂度：O(1)</li>
 * <li>稳定性：稳定排序</li>
 * <li>适用性：顺序表、链表</li>
 * <li>排序方式：交换排序</li>
 */
class Solution {
public:
    void bubbleSort(vector<int> &nums) {
        int n = nums.size();
        for (int i = 0; i < n - 1; i++) {
            bool flag = false;
            for (int j = 0; j < n - 1 - i; j++) {    // 每趟排序都会确定一个元素放到其最终位置上(n-1-i~n-1区间元素都是有序的)
                if (nums[j] > nums[j + 1]) {
                    swap(nums[j], nums[j + 1]);
                    flag = true;
                }
            }
            if (!flag)                               // 未交换，说明数组已经有序，可以提前退出
                break;
        }
    }
};

int main() {
    Solution s;
    vector<int> nums = {2, 4, 3, 1, 2, 3};
    s.bubbleSort(nums);
    for (auto num: nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
