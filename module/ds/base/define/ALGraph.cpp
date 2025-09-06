//
// Created by 一可爱小白兔 on 2025-08-29 10:15.
//

/**
 * ALGraph
 */
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