# 2018 408 真题解答 （缺失的最小正整数）

```cpp
/**
 * @brief 缺失的最小正整数（unordered_set）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
class Solution_1 {
public:
    static int find_missing_min(vector<int> &nums) {
        // 用数组 nums 初始化 hashSet,并自动去重
        unordered_set<int> hashSet(nums.begin(), nums.end());
        // 初始化 missing 为 1
        int missing = 1;
        // 循环检查当前 missing 是否存在于集合中,如果存在就递增 missing,直到找到第一个不存在的正整数
        while (hashSet.count(missing)) {
            ++missing;
        }
        // 返回缺失的最小正整数
        return missing;
    }
};

/**
 * @brief 使用数组
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
class Solution_2 {
public:
    static int find_missing_min(vector<int> &nums) {
        auto n = nums.size();
        int i = 0;
        // 创建一个长度为n的数组，初始化为0
        vector<int> newArr(n, 0);
        for (i = 0; i < n; i++) {
            // 如果nums[i]在1~n之间，则将newArr[nums[i]-1]置为1
            if (nums[i] > 0 && nums[i] <= n) {
                newArr[nums[i] - 1] = 1;
            }
        }
        // 遍历newArr，找到第一个值为0的元素，即为缺失的最小正整数
        for (i = 0; i < n; i++) {
            if (newArr[i] == 0)
                break;
        }
        // 返回缺失的最小正整数
        return i + 1;
    }
};

class Solution_3 {
public:
    static int find_missing_min(vector<int> &nums) {
        auto n = nums.size();
        int i = 0;
        for (int &num: nums) {
            if (num <= 0 || num > n) {
                num = static_cast<int>(n) + 1;
            }
        }
        for (i = 0; i < n; ++i) {
            int num = abs(nums[i]);
            if (num <= n) {
                nums[num - 1] = -abs(nums[num - 1]);
            }
        }
        for (i = 0; i < n; ++i) {
            if (nums[i] > 0) {
                break;
            }
        }
        return i + 1;
    }
};

int main() {
    vector<int> nums_1 = {-1, 2, 3, 4, 4};
    vector<int> nums_2 = {1, 2, 2, 3};
    vector<int> nums_3 = {3, 4, -1, 1};
    vector<int> nums_4 = {7, 8, 9, 10};
    cout << Solution_1::find_missing_min(nums_1) << endl;
    cout << Solution_1::find_missing_min(nums_2) << endl;
    cout << Solution_1::find_missing_min(nums_3) << endl;
    cout << Solution_1::find_missing_min(nums_4) << endl;
    cout << endl;
    cout << Solution_2::find_missing_min(nums_1) << endl;
    cout << Solution_2::find_missing_min(nums_2) << endl;
    cout << Solution_2::find_missing_min(nums_3) << endl;
    cout << Solution_2::find_missing_min(nums_4) << endl;
    cout << endl;
    cout << Solution_3::find_missing_min(nums_1) << endl;
    cout << Solution_3::find_missing_min(nums_2) << endl;
    cout << Solution_3::find_missing_min(nums_3) << endl;
    cout << Solution_3::find_missing_min(nums_4) << endl;
    return 0;
}
```
