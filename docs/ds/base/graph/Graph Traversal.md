# 图的遍历

## 图的深度优先遍历

```cpp
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
```

## 图的广度优先遍历

```cpp
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
```

## BFS、DFS的应用

| 应用场景         | 推荐算法 | 原因                       |
|------------------|----------|----------------------------|
| 无权图最短路径   | BFS      | 首次访问即最短             |
| 判断连通性       | DFS/BFS  | DFS 更省空间               |
| 拓扑排序         | 两者皆可 | Kahn（BFS） vs DFS 后序    |
| 检测环           | DFS      | 递归栈天然支持             |
| 回溯/组合/排列   | DFS      | 天然递归结构               |
| 强连通分量       | DFS      | Tarjan/Kosaraju 基于 DFS   |
| 层级遍历         | BFS      | 队列天然分层               |
| 状态空间最少步数 | BFS      | 最短路径保证               |
