# 顺序表

## 定义顺序表

```cpp
// 定一个顺序表
vector<int> seqList;
// 定一个顺序表, 默认长度为10
vector<int> seqList_1(10);
// 定一个顺序表, 默认长度为10, 默认元素值为0
vector<int> seqList_2(10, 0);
```

## 基本操作

::: code-group

```cpp [insertLast]
// 向顺序表末尾添加元素
void insertLast(int &value) {
    seqList.push_back(value);
}
```

```cpp [deleteLast]
// 删除最后一个元素
void deleteLast() {
    if (!seqList.empty()) {
        seqList.pop_back();
    }
}
```

```cpp [getLength]
// 获取长度
int getLength() {
    return seqList.size();
}
```

```cpp [getElement]
// 访问元素，假如index合法
int getElement(int index) {
    return seqList.at(index);
}
```

```cpp [printSeqList]
// 打印顺序表
void printSeqList() {
    for (auto elem: seqList) {
        cout << elem << " ";
    }
    cout << endl;
}
```

:::
