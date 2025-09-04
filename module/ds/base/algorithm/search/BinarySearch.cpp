//
// Created by 一可爱小白兔 on 2025-08-29 10:34.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 二分查找，非递归
 * <li>时间复杂度 O(log n)</li>
 * <li>空间复杂度 O(1)</li>
 */
class Solution_One {
public:
    int binary_search(const vector<int> &nums, int target) {
        int left = 0, right = nums.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] > target)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return -1;
    }
};

/**
 * 二分查找，递归
 * <li>时间复杂度 O(log n)</li>
 * <li>空间复杂度 O(log n)</li>
 */
class Solution_Two {
public:
    int binary_search(const vector<int> &nums, int target, int left, int right) {
        if (left <= right) {
            int mid = left + (right - left) / 2;
            if (target == nums[mid])
                return mid;
            else if (target > nums[mid])
                return binary_search(nums, target, mid + 1, right);
            else
                return binary_search(nums, target, left, mid - 1);
        }
        return -1;
    }
};

int main() {
    Solution_One s;
    vector<int> nums = {1, 5, 6, 7, 8, 9};
    int target = 5;
    int result = s.binary_search(nums, target);
    cout << result << endl;
    return 0;
}