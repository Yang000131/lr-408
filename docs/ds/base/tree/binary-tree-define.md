---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.1
---

# 树

## 二叉树结点结构体

```cpp
/**
 * Define a binary tree node.
 */
struct TreeNode {
    int val;
    TreeNode *left, *right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}

    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
```

```cpp
/**
 * 后序遍历(递归)
 * @param root 根节点
 * @param res 存储遍历结果
 */
void postOrder(TreeNode *root, vector<int> &res) {
    if (!root) {
        return;
    }
    postOrder(root->left, res);
    postOrder(root->right, res);
    res.push_back(root->val);
}
```

## 二叉树的深度

- 基于递归
  - **二叉树的最大深度等于其左子树的最大深度和右子树的最大深度的较大值加上 1。即 max(l,r)+1**
  - 时间复杂度 O(n)
  - 空间复杂度 O(height)

```cpp
int maxDepth(TreeNode *root) {
    if (!root)
        return 0;
    return max(maxDepth(root->left), maxDepth(root->right)) + 1;
}
```

- 基于 BFS
  - 时间复杂度 O(n)
  - 空间复杂度 O(queue.size())

```cpp
int maxDepth_2(TreeNode *root) {
    if (!root)
        return 0;
    queue<TreeNode *> q;
    q.push(root);
    int ans = 0;
    while (!q.empty()) {
        int sz = q.size();
        while (sz > 0) {
            TreeNode *node = q.front();
            q.pop();
            if (node->left)
                q.push(node->left);
            if (node->right)
                q.push(node->right);
            sz--;
        }
        ans += 1;
    }
    return ans;
}
```
