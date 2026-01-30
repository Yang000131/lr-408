---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 稀疏矩阵

## 稀疏矩阵结构体

::: code-group

```cpp [三元组法]
/**
 * (三元组法)
 */
// Define the structure of sparse matrix
struct Triplet {
    int row;    // 非零元素所在的行索引
    int col;    // 非零元素所在的列索引
    int value;  // 非零元素的值
};

struct sparseMatrix {
    int rows;                  // 矩阵的行数
    int cols;                  // 矩阵的列数
    int nonZeroNum;            // 非零元素的数量
    vector<Triplet> elements;  // 存储非零元素的数组
};
```

```cpp [十字链表法]
/**
 * (十字链表法)
 */
// 定义稀疏矩阵的十字链表结点结构体
struct CrossLinkNode {
    int row;               // 非零元素所在的行索引
    int col;               // 非零元素所在的列索引
    int value;             // 非零元素的值
    CrossLinkNode* right;  // 指向同一行中下一个非零元素的指针
    CrossLinkNode* down;   // 指向同一列中下一个非零元素的指针
};

// 定义稀疏矩阵的十字链表头结点结构体，包含行列链表的头指针
// 其中rowHeaders,colHeaders两个数组使得可以迅速定位到任意行或列的链表开始处，进而遍历该行或列的所有非零元素
struct SparseMatrixCrossList {
    int rows;                   // 矩阵的行数
    int cols;                   // 矩阵的列数
    int nonZeroNum;             // 非零元素的数量
    CrossLinkNode* rowHeaders;  // 存储每一行首结点的指针数组
    CrossLinkNode* colHeaders;  // 存储每一列首结点的指针数组
};
```

:::
