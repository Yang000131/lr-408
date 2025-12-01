//
// Created by 一可爱小白兔 on 2025-08-29 10:10.
//

#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

/**
 * @brief 删除链表中的绝对值重复的结点(仅保存第一次出现的结点)
 */
// Def for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;

    ListNode() : val(0), next(nullptr) {}

    ListNode(int x) : val(x), next(NULL) {}
};

// Solution
class Solution {
public:
    ListNode *deleteAbsDupNode(ListNode *head) {
        unordered_set<int> hashSet;
        // 定义p，q指针，初始时分别指向首结点和空
        ListNode *p = head->next, *q = nullptr;
        while (p) {
            // 如果当前结点的值的绝对值在哈希表中存在，则删除当前节点
            if (hashSet.count(abs(p->val)) && q != nullptr) {
                //(删除结点) 让p的前驱指针q指向当前结点p的下一个结点
                q->next = p->next;
            } else {
                hashSet.insert(abs(p->val));
                // 保存当前结点的指针作为下个结点的前驱指针
                q = p;
            }
            // 始终移动p指针
            p = p->next;
        }
        return head->next;
    }
};

// 添加打印链表的辅助函数
void printList(ListNode *head) {
    while (head) {
        cout << head->val << " ";
        head = head->next;
    }
    cout << endl;
}

/**
 * 创建链表——尾插法
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

// main test
int main() {
    vector<int> nums = {21, -15, -15, -7, 15};
    // 创建链表
    ListNode *head = createList_tailInsert(nums);
    Solution s;
    // 打印新链表
    ListNode *newHead = s.deleteAbsDupNode(head);
    printList(newHead);

    system("pause");
    return 0;
}