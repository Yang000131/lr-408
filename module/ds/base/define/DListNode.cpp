//
// Created by 一可爱小白兔 on 2025-08-29 10:16.
//

/**
 * Define a double-linked-list
 */
struct DListNode {
    int val;                                                        // 结点值
    DListNode *prev, *next;                                         // 指向前驱结点、后继结点的指针
    DListNode() : val(0), prev(nullptr), next(nullptr) {}           // 构造函数(val默认为0)-->作为头结点
    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}      // 构造函数-->作为数据结点
};
