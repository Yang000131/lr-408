# 2010 408 真题解答

## 问题描述

设将n(n>1)个整数存放到一维数组R中。试设计一个在时间和空间两方面都尽可能高效的算法。  
将R中保存的序列循环左移p (0 < p < n) 个位置，即将R中的数组由（X0, X1, … , Xn-1）变换为（Xp,Xp-1, … Xn-1,X0,X1, … Xp-1）。  
要求：  
1）给出算法的基本设计思想。  
2）根据设计思想，采用C、C++或JAVA语言描述算法，关键之处给出注释。  
3）说明你所涉及算法的时间复杂度和空间复杂度。  

## 算法设计思想

根据 p 的位置将数组看做 ab 两部分:

- 第一次逆置 a，数组变为(-a)b，
- 第二次逆置 b，数组变为(-a)(-b)，
- 第三次逆置整个数组，数组变为 ba。

## 代码实现

```cpp
void rol(vector<int> &nums, int p) {
    int n = nums.size();
    // => a^(-1) b
    reverse(nums, 0, p - 1);
    // => a^(-1) b^(-1)
    reverse(nums, p, n - 1);
    // => ba
    reverse(nums, 0, n - 1);
}

/**
 * 翻转数组
 */
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
```

## 复杂度

- 时间复杂度: O(n)
- 空间复杂度: O(1)
