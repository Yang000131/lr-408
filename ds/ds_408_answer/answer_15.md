# 2015 408 真题解答 (删除链表中的绝对值重复的结点(仅保存第一次出现的结点))

## 代码实现

```cpp
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
```
