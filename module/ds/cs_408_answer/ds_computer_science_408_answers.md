## The Answers For `DS` In Computer Science 408 Exam

### Features

- 🥭 仿 leetCode 模板，采用 C++ 语言，标准解答 2009 ~ latest 年真题
- 🍓 拓展相关例题和标准 STL 用法

### TOC

| 索引                         | 考察重点       | 难度  |
|:---------------------------|:-----------|:----|
| [2009_链表倒数第k个结点](#2009)    | 单链表，快慢指针   | ⭐⭐  |
| [2010_翻转数组](#2010)         | 数组         | ⭐   |
| [2011_数组中位数](#2011)        | 数组，双指针，二分法 | ⭐⭐  |
| [2012_链表中相同后缀的起始位置](#2012) | 单链表，双指针    | ⭐   |
|                            | 二叉树，带权路径长度 | ⭐⭐  |
|                            | 单链表        | ⭐   |
|                            | 快排，划分      | ⭐⭐⭐ |
|                            | 二叉树，中缀表达式  | ⭐⭐  |
|                            | 数组         | ⭐   |
|                            | 单链表，双指针    | ⭐⭐⭐ |
|                            | 数组         | ⭐⭐  |
|                            | 图，邻接矩阵     | ⭐   |

### Answers

#### 2009

```text [2009年真题]
已知一个带有表头结点的单链表，结点结构为：| data | link |
假设该链表只给出了头指针list。在不改变链表的前提下，请设计一个尽可能高效的算法，查找链表中倒数第k个位置上的结点（k为正整数）。
若查找成功，算法输出该结点的data域的值，并返回1；否则，只返回0。要求：
1）描述算法的基本设计思想。
2）描述算法的详细实现步骤。
3）根据设计思想和实现步骤，采用程序设计语言描述算法（使用C、C++或Java语言实现），关键之处请给出简要注释。
```

- 算法基本设计思想：
- 详细实现步骤：
- 实现 [2009_链表倒数第k个结点](answer_09.cpp)

```cpp
int findKthToLast(ListNode *head, int k) {
    if (!head || !head->next || k <= 0)
        return 0;
    // 定义p、q指针，初始时分别指向首结点
    ListNode *p = head->next, *q = head->next;
    // 先让p指针走k步
    for (int i = 0; i < k; i++) {
        if (!p)
            return 0;
        p = p->next;
    }
    // 让p、q指针同时走，直到p指针到达末尾
    while (p) {
        p = p->next;
        q = q->next;
    }
    // 返回q指针的值
    cout << "倒数第 " << k << " 个结点值为 " << q->val << endl;
    return 1;
}
```

- 时间复杂度: O(n) 空间复杂度: O(1)

#### 2010

```text [2010年真题]
设将n(n>1)个整数存放到一维数组R中。试设计一个在时间和空间两方面都尽可能高效的算法。
将R中保存的序列循环左移p(0<p<n)个位置，即将R中的数组由（X0,X1, … Xn-1)变换为（Xp,Xp-1, … Xn-1,X0,X1, … Xp-1）。要求：
1）给出算法的基本设计思想。
2）根据设计思想，采用C、C++或JAVA语言描述算法，关键之处给出注释。
3）说明你所涉及算法的时间复杂度和空间复杂度。
```

- 算法思想：
  根据p的位置将数组看做ab两部分，
  第一次逆置a，数组变为(-a)b，
  第二次逆置b，数组变为(-a)(-b)，
  第三次逆置整个数组，数组变为ba。
- 实现 [2010_数组循环左移](answer_10.cpp)

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

- 时间复杂度: O(n) 空间复杂度: O(1)

#### 2011

```text
一个长度为L(L>=1)的升序序列S，处在第L/2(向下取整)个位置的数称为S的中位数。
如序列s1={ 11，13，15，17，19} 中位数为15。而两个升序序列的中位数是含它们所有元素的升序序列的中位数。例如，若S2={2,4,6,8,20},则s1和s2的中位数是11。
现有两个等长的升序序列A和B，设计一个在时间和空间两方面尽可能高效的算法，找出序列A和B的中位数。
```

- 解法一：
    - 算法思想：
      模拟归并过程，计数至第n个元素
        - 使用两个指针 i 和 j 分别遍历 nums_1 和 nums_2。
        - 每次将较小的元素“取出”（但不真正合并），并移动对应指针。
        - 记录当前取出的元素为 mid。
        - 当总共取出了 n 个元素时（即 i + j == n），停止循环，返回最后一个取出的元素。
    - 参考代码
      ```cpp
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
      ```
    - 时间复杂度: O(n) 空间复杂度: O(1)

- 解法二：
    - 算法思想
      不断比较并舍弃两序列中不可能包含中位数的部分
        - 循环二分: while (s_1 < d_1 || s_2 < d_2)
            - 计算中位数的索引: m_1 = s_1 + (d_1 - s_1) / 2; m_2 = s_2 + (d_2 - s_2) / 2;
            - 比较 nums_1[m_1] 和 nums_2[m_2]:
                - 如果 nums_1[m_1] == nums_2[m_2]，则返回中位数。
                - 如果 nums_1[m_1] < nums_2[m_2]，中位数一定不在 nums_1 的前半部分(s_1~m_1)，也不在 nums_2 的后半部分 (
                  m_2~d_2);</br>
                  🎁 判断淘汰的边界: 如果剩余元素数是奇数，淘汰 nums_1 的 s_1 ~ m_1 包含 m_1, 否则淘汰 nums_1 的 s_1 ~ m_1
                  不包含 m_1; 淘汰 nums_2 的 m_2(不包含) ~ d2
                - 否则，调整策略相反
        - 循环结束: 当两个序列都剩一个元素时，比较两个序列的元素，返回较小的元素。
    - 参考代码
      ```cpp
      int findMid(vector<int> &nums_1, vector<int> &nums_2) {
          int s_1 = 0, d_1 = nums_1.size() - 1;
          int s_2 = 0, d_2 = nums_2.size() - 1;
          while (s_1 < d_1 || s_2 < d_2) {
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
      ```
    - 时间复杂度: O(log n) 空间复杂度: O(1)

- 实现 [2011_两个升序序列的中位数](answer_11.cpp)

#### 2012

```text
假定采用带头结点的单链表保存单词，当两个单词有相同的后缀时，则可共享相同的后缀存储空间，例如，"loading"和"being" 的存储映像如下图所示。
设str1和 str2分别指向两个单词所在单链表的头结点，链表结点结构为| data | next |, 请设计一个时间上尽可能高效的算法， 
找出由str1和str2 所指向两个链表共同后缀的起始位置(如图中字符i 所在结点的位置p)。 要求：
1)给出算法的基本设计思想。
2)根据设计思想 ， 采用C或 C++或Java语言描述算法， 关键之处给出注释。
3)说明你所 设计算法的时间复杂度 。
```

<img src="../../../resource/image/2012_408%20题图_01.png" alt="2012_408 题图" style="width: 50%; max-width: 600px; height: auto;" />

- 算法思想：
    - 假设 str1 的前半部分为 a，str2 的前半部分为 b，公共后缀部分为 c
    - 让 p 指针指向 str1 的头结点，q 指向 str2 的头结点
    - 循环：while (p != q)，p、q 指针同时移动，当 p 移动 a + c + b，q 移动 b + c + a 时，如果 p == q，则返回 q
- 实现 [2012_链表中相同后缀的起始位置](answer_12.cpp)

```cpp
ListNode *getIntersectionNode(ListNode *str1, ListNode *str2) {
    if (!str1 || !str2)
        return nullptr;
    ListNode *p = str1, *q = str2;
    while (p != q) {
        p = p ? p->next : str2;           // p 后移，然后移到 str2
        q = q ? q->next : str1;           // q 后移，然后移到 str1
        if (p == str2 && q == str1)       // 防止死循环，(链表不相交时)
            return nullptr;
    }
    return p;                             // str1: a + c + b, str2: b + c + a 时, p == q
}

ListNode *res = getIntersectionNode(str1, str2);
if (res)
    cout << "相交结点值" << res->val << endl;
else
    cout << "无相交结点值" << endl;
```

- 时间复杂度: O(n) 空间复杂度: O(1)

#### 2013

```text
```

#### 2014

```text
```

#### 2015

```text
```

#### 2016

```text
```

#### 2017

```text
```

#### 2018

```text
```

#### 2019

```text
```
