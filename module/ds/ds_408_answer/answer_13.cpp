//
// Created by 一可爱小白兔 on 2025-06-25 16:28.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int majorityElement(vector<int> &nums) {
        int count = 0;
        int candidate = 0;
        for (int num: nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        return count > 0 ? candidate : -1;
    }
};

int main() {
    Solution s;
    vector<int> A = {0, 5, 5, 3, 5, 7, 5, 5};
    vector<int> B = {0, 5, 5, 3, 5, 1, 5, 7};
    cout << "A 的主元素为:" << s.majorityElement(A) << endl;
    cout << "B 的主元素为:" << s.majorityElement(B) << endl;
    return 0;
}