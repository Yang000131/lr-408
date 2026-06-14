# 二叉树遍历

## 前序遍历： 根 - 左 - 右

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

## 中序遍历： 左 - 根 - 右

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

## 后序遍历： 左 - 右 - 根

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

## 层次遍历 - 基于 BFS

- 时间复杂度 O(n)
- 空间复杂度 O(queue.size())

```cpp
vector<int> levelOrder(TreeNode *root) {
    vector<int> res;
    if (!root)                                  // 树为空，返回空
        return res;
    queue<TreeNode *> q;                        // 创建队列
    q.push(root);                               // 将根节点入队
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
