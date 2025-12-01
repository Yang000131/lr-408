//
// Created by 一可爱小白兔 on 2025-08-29 10:31.
//

#include <iostream>
#include <stack>
#include <vector>

using namespace std;

/**
 * @brief 图的深度优先遍历
 */

// define MGraph struct
struct MGraph {
    int vertexNum;                        // 图的顶点数量
    vector<char> vertexes;                // 顶点集合
    vector<vector<int>> adjacencyMatrix;  // 邻接矩阵
};

// implement 非递归
void DFS(MGraph &graph, int startVertex) {
    vector<bool> visited(graph.vertexNum, false);      // 访问标记
    stack<int> s;                                               // 栈
    s.push(startVertex);                                     // 入栈
    visited[startVertex] = true;                                // 标记访问
    while (!s.empty()) {
        int v = s.top();                                        // 取出栈顶元素
        s.pop();                                                // 出栈
        cout << graph.vertexes[v] << " ";                       // 访问顶点
        for (int i = graph.vertexNum - 1; i >= 0; --i) {        // 遍历当前顶点的所有邻接顶点(从右向左)
            if (graph.adjacencyMatrix[v][i] && !visited[i]) {   // 如果当前顶点有邻接顶点且未被访问
                s.push(i);                                    // 入栈
                visited[i] = true;                               // 标记访问
            }
        }
    }
    cout << endl;
}
