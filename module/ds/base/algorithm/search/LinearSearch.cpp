//
// Created by 一可爱小白兔 on 2025-09-04 14:06.
//

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * 线性查找,基于索引的for循环
 */
class Solution_One {
public:
    int linear_search(const vector<int> &nums, int target) {
        for (auto i = 0; i < nums.size(); i++) {
            if (nums[i] == target)
                return i;               // 找到时返回索引
        }
        return -1;
    }
};

/**
 * 线性查找,基于范围的for循环
 */
class Solution_Two {
public:
    int linear_search(const vector<int> &nums, int target) {
        int index = 0;
        for (auto num: nums) {
            if (num == target)
                return index;
            index++;                    // 没找到时，索引加1
        }
        return -1;
    }
};

/**
 * 线性查找,基于STL
 */
class Solution_Three {
public:
    int linear_search(const vector<int> &nums, int target) {
        auto it = find(nums.begin(), nums.end(), target);  // 找到返回迭代器，没找到返回nums.end()
        if (it != nums.end())
            return distance(nums.begin(), it);                             // 返回迭代器it和nums.begin()之间的距离
        return -1;
    }
};

int main() {
    Solution_One s;
    vector<int> nums = {1, 5, 6, 7, 8, 9};
    int target = 5;
    int result = s.linear_search(nums, target);
    cout << result << endl;
    return 0;
}