# 2009 408 真题解答

## 问题描述

已知一个带有表头结点的单链表，结点结构为：| data | link |  
假设该链表只给出了头指针 list。在不改变链表的前提下，请设计一个尽可能高效的算法，查找链表中倒数第 k 个位置上的结点（k 为正整数）。  
若查找成功，算法输出该结点的 data 域的值，并返回 1；否则，只返回 0。要求：  
1）描述算法的基本设计思想。  
2）描述算法的详细实现步骤。  
3）根据设计思想和实现步骤，采用程序设计语言描述算法（使用 C、C++或 Java 语言实现），关键之处请给出简要注释。

## 算法设计思想

## 代码实现

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

## 复杂度

- 时间复杂度: O(n)
- 空间复杂度: O(1)
