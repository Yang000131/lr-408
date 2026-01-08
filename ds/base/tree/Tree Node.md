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

## 二叉树遍历

### 前序遍历： 根 - 左 - 右

```cpp
/**
 * 前序遍历(递归)
 * @param root 根节点
 * @param res 存储遍历结果
 */
void preOrder(TreeNode *root, vector<int> &res) {
    if (!root) {
        return;
    }
    res.push_back(root->val);
    preOrder(root->left, res);
    preOrder(root->right, res);
}
```

### 中序遍历： 左 - 根 - 右

```cpp
/**
 * 中序遍历(递归)
 * @param root 根节点
 * @param res 存储遍历结果
 */
void inOrder(TreeNode *root, vector<int> &res) {
    if (!root)
        return;
    inOrder(root->left, res);
    res.push_back(root->val);
    inOrder(root->right, res);
}
```

### 后序遍历： 左 - 右 - 根

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

### 层次遍历 - 基于 BFS

- 时间复杂度 O(n)
- 空间复杂度 O(queue.size())

```cpp
vector<int> levelOrder(TreeNode *root) {
    vector<int> res;
    if (!root)                                  // 树为空，返回空
        return res;
    queue<TreeNode *> q;                        // 创建队列
    q.push(root);                            // 将根节点入队
    while (!q.empty()) {
        TreeNode *currentNode = q.front();      // 获取队首元素
        q.pop();                                // 出队
        res.push_back(currentNode->val);        // 将当前结点的值加入res
        if (currentNode->left)                  // 将当前结点的左右孩子（如果非空）入队
            q.push(currentNode->left);
        if (currentNode->right)                 // 将当前结点的左右孩子（如果非空）入队
            q.push(currentNode->right);
    }
    return res;
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
