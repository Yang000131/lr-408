# 2012 408 真题解答

## 问题描述

假定采用带头结点的单链表保存单词，当两个单词有相同的后缀时，则可共享相同的后缀存储空间，例如，"loading"和"being" 的存储映像如下图所示。  
设 str1 和 str2 分别指向两个单词所在单链表的头结点，链表结点结构为| data | next |。  
请设计一个时间上尽可能高效的算法，找出由 str1 和 str2 所指向两个链表共同后缀的起始位置(如图中字符 i 所在结点的位置 p)。
要求：  
1）给出算法的基本设计思想。  
2）根据设计思想，采用 C、C++或 JAVA 语言描述算法，关键之处给出注释。  
3）说明你所涉及算法的时间复杂度和空间复杂度。

![2012_408 题图](../../resource/image/ds/2012_408%20题图_01.png){width=100% max-width=600px}

## 算法设计思想

- 假设 str1 的前半部分为 a，str2 的前半部分为 b，公共后缀部分为 c
- 让 p 指针指向 str1 的头结点，q 指向 str2 的头结点
- 循环：`while (p != q)`，p、q 指针同时移动，当 p 移动 `a + c + b`，q 移动 `b + c + a` 时，如果 `p == q`，则返回 q

## 代码实现

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

## 复杂度

- 时间复杂度: O(n)
- 空间复杂度: O(1)
