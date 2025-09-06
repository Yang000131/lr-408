//
// Created by 一可爱小白兔 on 2025-08-28 10:28.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 直接插入排序
 *
 * <li>时间复杂度：O(n^2)
 * <li>稳定性：稳定排序
 * <li>适用性：顺序表、链表
 */
class Solution {
public:
    void insertSort(vector<int> &nums) {
        for (auto i = 1; i < nums.size(); i++) {             // 初始时，第一个元素nums[0]可视为有序
            int temp = nums[i];                              // 设置待插入元素
            int j = i - 1;                                   // 待插入元素的前一个元素的位置，此时[0,i-1]区域已排序
            while (j >= 0 && nums[j] > temp) {               // 从后往前比较，如果当前元素大于待插入元素，则向后移动一位
                nums[j + 1] = nums[j];
                j--;
            }
            nums[j + 1] = temp;                              // 插入到最终位置
        }
    }
};

/**
 * 折半插入排序
 *
 * <li>时间复杂度：O(n^2)
 * <li>稳定性：稳定排序
 * <li>适用性：仅适用于顺序表
 */
class Solution2 {
public:
    void insertSort(vector<int> &nums) {
        for (int i = 1; i < nums.size(); i++) {
            int j = getInsertPos(nums, i);
            for (auto k = i - 1; k >= j; k--) {              // 将j(包括j)位置的元素后移一位
                nums[k + 1] = nums[k];
            }
        nums[j] = nums[i];                                       // 插入到最终位置
        }
    }

/**
 * 折半查找已排序的数组中插入位置
 */
private:
    int getInsertPos(vector<int> &nums, int i) {
        int left = 0, right = i - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[i]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};

int main() {
    Solution2 s;
    vector<int> nums = {2, 4, 3, 1, 2, 3};
    s.insertSort(nums);
    for (auto num: nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
