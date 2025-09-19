//
// Created by 一可爱小白兔 on 2025-08-29 10:07.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void rol(vector<int> &nums, int p) {
        int n = nums.size();
        // => a^(-1) b
        reverse(nums, 0, p - 1);
        // => a^(-1) b^(-1)
        reverse(nums, p, n - 1);
        // => ba
        reverse(nums, 0, n - 1);
    }

private:
    void reverse(vector<int> &nums, int left, int right) {
        int tmp;
        while (left < right) {
            tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
            right--;
        }
    }
};

int main() {
    Solution s;
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    s.rol(nums, 5);
    for (auto num: nums)
        cout << num << " ";
    return 0;
}