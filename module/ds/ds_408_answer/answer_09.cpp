//
// Created by 一可爱小白兔 on 2025-08-29 10:05.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;

    ListNode() : val(0), next(nullptr) {}

    ListNode(int x) : val(x), next(nullptr) {}
};

/**
 * 查找链表倒数第k个结点
 */
class Solution {
public:
    int findKthToLast(ListNode *head, int k) {
        if (!head || k <= 0)
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
};

/**
 * 创建链表——尾插法
 * @param nums 链表元素
 */
ListNode *createList_tailInsert(vector<int> &nums) {
    ListNode *head = new ListNode();                // 创建头结点
    ListNode *tail = head;                          // 创建尾指针并指向头结点
    for (auto num: nums) {
        ListNode *dataNode = new ListNode(num);  // 创建数据结点
        tail->next = dataNode;
        tail = dataNode;                            // 更新尾指针
    }
    return head;
}

/**
 * 释放链表
 * @param head 头结点
 */
void freeList(ListNode *head) {
    ListNode *current = head;
    while (current) {
        ListNode *next = current->next;
        delete current;
        current = next;
    }
}

/**
 * test
 */
int main() {
    vector<int> nums = {1, 2, 3, 4};
    ListNode *head = createList_tailInsert(nums);
    Solution s;
    cout << "-------case 1------" << endl;
    cout << s.findKthToLast(head, 2) << endl;
    cout << "-------case 2------" << endl;
    cout << s.findKthToLast(head, 5) << endl;
    freeList(head);
    return 0;
}