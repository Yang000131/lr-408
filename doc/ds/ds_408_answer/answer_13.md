# 2012 408 真题解答

## 问题描述

已知一个整数序列 `A = (a0, a1, ..., an-1)`，其中 `0 ≤ ai < n (0 ≤ i < n)`。  
若存在 `ap1 = ap2 = ... = apm = x` 且 `m > n/2 (0 ≤ pk < n, 1 ≤ k ≤ m)`，则称 x 为 A 的主元素。  
例如 `A = (0, 5, 5, 3, 5, 7, 5, 5)`，则 5 为主元素；又如 `A = (0, 5, 5, 3, 5, 1, 5, 7)`，则 A 中没有主元素。  
假设 A 中的 n 个元素保存在一个一维数组中，请设计一个尽可能高效的算法，找出 A 的主元素。若存在主元素，则输出该元素；否则输出 -1。  
要求：  
1）给出算法的基本设计思想。  
2）根据设计思想，采用 C、C++或 JAVA 语言描述算法，关键之处给出注释。  
3）说明你所涉及算法的时间复杂度和空间复杂度。

## 算法设计思想

[Boyer-Moore 投票算法](https://blog.csdn.net/qq_40206371/article/details/118599874)

- 遍历数组，如果当前元素与候选元素相同，则计数器加 1，否则减 1
- 如果计数器为 0，则将当前元素设置为候选元素
- 计数器大于 0 则返回候选元素

## 代码实现

```cpp
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
```

## 复杂度

- 时间复杂度: O(n)
- 空间复杂度: O(1)
