//
// Created by 一可爱小白兔 on 2025-08-29 10:25.
//

#include <iostream>
#include <queue>
#include <vector>

using namespace std;

/**
 * Define a binary tree node.
 */
struct TreeNode {
    int val;
    TreeNode *left, *right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}

    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

/**
 * 前序遍历(递归)
 * <li><font color="red">根节点->左子树->右子树</font></li>
 * <li>时间复杂度O(n)</li>
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

/**
 * 中序遍历(递归)
 * <li><font color="red">左子树->根节点->右子树</font></li>
 * <li>时间复杂度O(n)</li>
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

/**
 * 后序遍历(递归)
 * <li><font color="red">左子树->右子树->根节点</font></li>
 * <li>时间复杂度O(n)</li>
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

/**
 * 层次遍历-基于BFS(Breadth-First Search)
 * <li>时间复杂度O(n)
 * <li>空间复杂度O(queue.size())
 */
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

/**
 * 二叉树的深度-基于递归
 * <li><font color="red">二叉树的最大深度等于其左子树的最大深度和右子树的最大深度的较大值加上1。即max(l,r)+1</font></li>
 * <li>时间复杂度O(n)
 * <li>空间复杂度O(height)
 */
int maxDepth(TreeNode *root) {
    if (!root)
        return 0;
    return max(maxDepth(root->left), maxDepth(root->right)) + 1;
}

/**
 * 二叉树的深度-基于BFS(Breadth-First Search)
 * <li>时间复杂度O(n)
 * <li>空间复杂度O(queue.size())
 */
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