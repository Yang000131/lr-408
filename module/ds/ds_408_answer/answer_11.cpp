//
// Created by 一可爱小白兔 on 2025-08-29 10:08.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * 寻找两个有序数组的中位数-双指针法 v1
 */
class Solution_1 {
public:
    int findMid(vector<int> &nums_1, vector<int> &nums_2) {
        int n = nums_1.size();
        int i = 0, j = 0;
        int midNum = 0;
        while (i < n && j < n) {
            if (nums_1[i] < nums_2[j]) {               // nums_1[i] < nums_2[j]时,"取数",移动nums_1的指针i
                midNum = nums_1[i];
                i++;
            } else {
                midNum = nums_2[j];                   // nums_1[i] >= nums_2[j]时,"取数",移动nums_2的指针j
                j++;
            }
            if (i + j == n)                           // 当取出 n 次时, 退出
                break;
        }
        return midNum;
    }
};

/**
 * 寻找两个有序数组的中位数-双指针法 v2
 */
class Solution_2 {
    int findMid(vector<int> &nums_1, vector<int> &nums_2) {
        int i = 0, j = 0;
        while (i + j < nums_1.size() - 1) {
            if (nums_1[i] < nums_2[j]) {
                i++;
            } else {
                j++;
            }
        }
        return min(nums_1[i], nums_2[j]);
    }
};

/**
 * 寻找两个有序数组的中位数-二分法（中位数淘汰法）
 */
class Solution_3 {
public:
    int findMid(vector<int> &nums_1, vector<int> &nums_2) {
        int s_1 = 0, d_1 = nums_1.size() - 1;
        int s_2 = 0, d_2 = nums_2.size() - 1;
        while (s_1 < d_1 && s_2 < d_2) {
            int m_1 = s_1 + (d_1 - s_1) / 2;
            int m_2 = s_2 + (d_2 - s_2) / 2;
            if (nums_1[m_1] == nums_2[m_2])                        // 如果 nums_1[m_1] < nums_2[m_2],则返回中位数
                return nums_1[m_1];
            if (nums_1[m_1] < nums_2[m_2]) {                       // 如果 nums_1[m_1] < nums_2[m_2]
                s_1 = (d_1 - s_1 + 1) % 2 == 0 ? m_1 + 1 : m_1;    // 淘汰 nums_1[m_1]左边的部分(关键: 奇数个淘汰包含 m_1)
                d_2 = m_2;                                         // 淘汰 nums_2[m_2]右边的部分
            } else {
                s_2 = (d_2 - s_2 + 1) % 2 == 0 ? m_2 + 1 : m_2;
                d_1 = m_1;
            }
        }
        return min(nums_1[s_1], nums_2[s_2]);                      // 此时, s_1, s_2 各剩下一个元素，取最小
    }
};

int main() {
    vector<int> nums_1 = {11, 13, 15, 17, 19};
    vector<int> nums_2 = {2, 4, 6, 8, 20};
    Solution_1 s_1;
    cout << "两个序列的中位数为：" << s_1.findMid(nums_1, nums_2) << endl;
}