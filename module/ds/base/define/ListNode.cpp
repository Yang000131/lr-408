//
// Created by 一可爱小白兔 on 2025-08-29 10:19.
//

#include <iostream>
#include <vector>

using namespace std;

/**
 * Define a singly-linked list node.
 */
struct ListNode {
    int val;                                    // 结点值
    ListNode *next;                             // 指向下一个结点的指针
    ListNode() : val(0), next(nullptr) {}       // 构造函数(val默认为0)-->作为头结点
    ListNode(int x) : val(x), next(nullptr) {}  // 构造函数-->作为数据结点
};

/**
 * 打印链表
 * @param head 头结点
 */
void printList(ListNode *head) {
    ListNode *cur = head->next;
    while (cur) {
        cout << cur->val << " ";
        cur = cur->next;
    }
    cout << endl;
}

/**
 * 获取链表长度
 * @param head 头结点
 * @return 链表长度
 */
int getListLength(ListNode *head) {
    int len = 0;
    ListNode *cur = head->next;
    while (cur) {
        len++;
        cur = cur->next;
    }
    return len;
}

/**
 * 获取第k个结点
 * @param head 头结点
 * @param k k
 * @return 第k个结点
 */
ListNode *getKthNode(ListNode *head, int k) {
    int len = getListLength(head);
    if (k < 1 || k > len) {
        return nullptr;
    }
    ListNode *cur = head->next;
    for (int i = 1; i < k; i++) {
        cur = cur->next;
    }
    return cur;
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

/**
 * 创建链表——尾插法(不带头结点)--使用哑结点
 */
ListNode *createList_tailInsert_noHead(vector<int> &nums) {
    ListNode dummyNode(-1);                      // 创建哑结点
    ListNode *tail = &dummyNode;                    // 创建尾指针并指向哑结点
    for (auto num: nums) {
        ListNode *dataNode = new ListNode(num);  // 创建数据结点
        tail->next = dataNode;
        tail = dataNode;                            // 更新尾指针
    }
    return dummyNode.next;
}

/**
 * 头插法
 */
ListNode *createList_headInsert(vector<int> &nums) {
    ListNode *head = new ListNode();                // 创建头结点
    for (auto num: nums) {
        ListNode *dataNode = new ListNode(num);  // 创建数据结点
        dataNode->next = head->next;
        head->next = dataNode;
    }
    return head;
}

// 逆置链表(双指针-迭代)
/**
 * (不带头结点)
 */
ListNode *reverseList(ListNode *head) {
    ListNode *prev = nullptr, *curr = head, *next = nullptr;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

/**
 * （带头结点）
 */
ListNode *reverseListWithHead(ListNode *head) {
    if (!head || !head->next)
        return head;                            // 链表为空或只有一个头结点，直接返回
    ListNode *prev = head, *curr = head->next, *next = nullptr;
    while (curr) {
        next = curr->next;                      // 保存当前节点的下一个节点
        curr->next = prev;                      // 将当前节点指向前一个节点
        prev = curr;                            // 前一个节点向后移动
        curr = next;                            // 当前节点向后移动
    }
    head->next = prev;                          // 头结点的next指针指向逆序后的第一个数据节点
    return head;
}

/**
 * 插入结点
 * @param head 头结点
 * @param k 插入位置
 * @param val 插入元素
 */
void insertNode(ListNode *head, int k, int val) {
    // 找到第k个结点的前一个结点p
    ListNode *p = getKthNode(head, k - 1);
    ListNode *q = new ListNode(val);
    q->next = p->next;
    p->next = q;
}

/**
 * 删除结点
 * @param head 头结点
 * @param k 插入位置
 */
void deleteNode(ListNode *head, int k) {
    // 找到第k个结点的前一个结点p,q指向被删除的结点
    ListNode *p = getKthNode(head, k - 1), *q = p->next;
    p->next = q->next;
    delete q;
}

/**
 * 合并两个有序链表（不带头结点）
 * @param list1 list1 链表
 * @param list2 list2 链表
 * @return
 */
ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
    // 使用哑结点(可减少内存分配)
    ListNode dummyHead(-1);
    // 定义一个辅助指针 p，并将它初始化为指向 dummyHead 的地址。
    ListNode *p = &dummyHead;
    // 循环遍历链表 list1 和 list2，直到其中一个链表为空。
    while (list1 && list2) {
        if (list1->val < list2->val) {
            p->next = list1;
            list1 = list1->next;
        } else {
            p->next = list2;
            list2 = list2->next;
        }
        // 更新p
        p = p->next;
    }
    // 将剩余的链表直接链接在p后面
    p->next = list1 ? list1 : list2;
    // 返回哑结点的next
    return dummyHead.next;
}