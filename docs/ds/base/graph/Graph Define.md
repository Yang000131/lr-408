---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 图的定义

## 邻接表结构体

```cpp
const int MAX_VERTEX_NUM = 100;

/**
 * 边表结点
 */
struct EdgeNode {
    int adjvex;                             // 该边所指向的顶点的位置
    int weight;                             // 权重(可选)
    EdgeNode *next;                         // 指向下一条边的指针
};

/**
 * 顶点表结点
 */
struct VertexNode {
    char data;                             // 顶点信息
    EdgeNode *firstEdge;                   // 指向边表第一个结点的指针
};

/**
 * 图的邻接表结构体
 */
struct GraphAdjList {
    VertexNode vertices[MAX_VERTEX_NUM];  // 顶点数组
    int vertex_num;                       // 图中当前顶点数量
    int edge_num;                         // 图中边的数量
};
```

## 邻接矩阵结构体

```cpp
struct MGraph {
    int vertexNum;                        // 图的顶点数量
    vector<char> vertexes;                // 顶点集合
    vector<vector<int>> adjacencyMatrix;  // 邻接矩阵
    MGraph(int n)                         // 构造函数,并初始化顶点数、邻接矩阵(全为0)
            : vertexNum(n), adjacencyMatrix(n, vector<int>(n, 0)) {}
};
```
