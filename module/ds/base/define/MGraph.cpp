//
// Created by 一可爱小白兔 on 2025-08-29 10:21.
//

/**
 * @brief MGraph
 */

#include <iostream>
#include <vector>

using namespace std;

// Define the graph by adjacency matrix
struct MGraph {
    int vertexNum;                        // 图的顶点数量
    vector<char> vertexes;                // 顶点集合
    vector<vector<int>> adjacencyMatrix;  // 邻接矩阵
    MGraph(int n)  // 构造函数,并初始化顶点数、邻接矩阵(全为0)
            : vertexNum(n), adjacencyMatrix(n, vector<int>(n, 0)) {}
};

/**
 * create a graph (有向图)
 * 假如图有3个顶点a、b、c，边的关系如下a->b、a->c
 */
MGraph createGraph() {
    MGraph graph(3);                   // 创建一个3个顶点的图
    graph.vertexes = {'a', 'b', 'c'};  // 顶点集合，用索引下标访问
    graph.adjacencyMatrix[0][1] = 1;   // a->b, cout "vertexes[0] ->vertexes[1]"
    graph.adjacencyMatrix[0][2] = 1;   // a->c, cout "vertexes[0] ->vertexes[2]"
    return graph;
}

// 遍历邻接矩阵，输出所有边
void printGraph(MGraph graph) {
    for (int i = 0; i < graph.vertexNum; i++) {
        for (int j = 0; j < graph.vertexNum; j++) {
            // 边存在，则输出
            if (graph.adjacencyMatrix[i][j] == 1) {
                cout << graph.vertexes[i] << "->" << graph.vertexes[j] << " ";
            }
        }
        cout << endl;
    }
}