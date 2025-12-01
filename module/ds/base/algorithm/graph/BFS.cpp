//
// Created by 一可爱小白兔 on 2025-08-29 10:31.
//

#include <iostream>
#include <queue>
#include <vector>

using namespace std;

/**
 * @brief 图的广度优先遍历
*/
// define MGraph struct
struct MGraph {
    int vertexNum;                        // 图的顶点数量
    vector<char> vertexes;                // 顶点集合
    vector<vector<int>> adjacencyMatrix;  // 邻接矩阵
};

// implement
void BFS(MGraph &graph, int startVertex) {
    vector<bool> visited(graph.vertexNum, false);     // 访问标记
    queue<int> q;                                              // 队列
    q.push(startVertex);                                    // 入队
    visited[startVertex] = true;                               // 标记访问
    while (!q.empty()) {
        int v = q.front();                                     // 取出队首元素
        q.pop();                                               // 出队
        cout << graph.vertexes[v] << " ";                      // 输出访问的顶点
        for (int i = 0; i < graph.vertexNum; i++) {            // 遍历当前顶点的所有邻接顶点
            if (graph.adjacencyMatrix[v][i] && !visited[i]) {  // 如果当前顶点有邻接顶点且未被访问
                q.push(i);                                  // 入队
                visited[i] = true;                             // 标记访问
            }
        }
    }
    cout << endl;
}
