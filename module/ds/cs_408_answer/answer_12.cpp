//
// Created by 一可爱小白兔 on 2025-08-29 10:09.
//

#include <iostream>
#include <string>

using namespace std;

// Definition for singly-linked list.
struct ListNode {
    string val;
    ListNode *next;

    ListNode() : val(""), next(nullptr) {}

    ListNode(string x) : val(x), next(nullptr) {}
};

class Solution {
public:
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
};

int main() {
    // 共享交点部分
    ListNode *intersectNode = new ListNode("i");
    intersectNode->next = new ListNode("n");
    intersectNode->next->next = new ListNode("g");

    // 创建第一个单链表(loading)
    ListNode *str1 = new ListNode();
    str1->next = new ListNode("l");
    str1->next->next = new ListNode("o");
    str1->next->next->next = new ListNode("a");
    str1->next->next->next->next = new ListNode("d");
    str1->next->next->next->next->next = intersectNode;  // 从这里开始与 str2 共享

    // 创建第二个单链表(being)
    ListNode *str2 = new ListNode();
    str2->next = new ListNode("b");
    str2->next->next = new ListNode("e");
    str2->next->next->next = intersectNode;             // 从这里开始与 str1 共享

    Solution s;
    ListNode *res = s.getIntersectionNode(str1, str2);
    if (res)
        cout << "相交结点值" << res->val << endl;
    else
        cout << "无相交结点值" << endl;
    return 0;
}