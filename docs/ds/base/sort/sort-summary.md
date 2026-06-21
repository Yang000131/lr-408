---
author: 一可爱小白兔
firstCommit: 2025-04-18
version: 1.0.0
---

# 排序 {#sort}

## 思维导图

```markmap
- 排序
    - 基本概念
    - 内部排序
        - [冒泡排序](bubble-sort)
        - [选择排序](select-sort)
        - [插入排序](insert-sort)
        - 希尔排序
        - [归并排序](merge-sort)
        - [快速排序](quick-sort)
        - 堆排序
        - 基数排序
  - 外部排序
```

## 基本概念

（一）稳定性
（二）移动/比较次数
（三）趟特征
（四）复杂度

## 内部排序 {#internal-sort}

| 排序算法                      | 时间复杂度 | 最好情况   | 最坏情况   | 空间复杂度 | 排序方式  | 稳定性 |
| ----------------------------- | ---------- | ---------- | ---------- | ---------- | --------- | ------ |
| [冒泡排序](bubble-sort.md)    | O(n²)      | O(n)       | O(n²)      | O(1)       | In-place  | 稳定   |
| [选择排序](select-sort.md)    | O(n²)      | O(n²)      | O(n²)      | O(1)       | In-place  | 不稳定 |
| [插入排序](insert-sort.md)    | O(n²)      | O(n)       | O(n²)      | O(1)       | In-place  | 稳定   |
| 希尔排序                      | O(n log n) | O(n log n) | O(n log n) | O(1)       | In-place  | 不稳定 |
| [归并排序](merge-sort.md)     | O(n log n) | O(n log n) | O(n log n) | O(n)       | Out-place | 稳定   |
| [**快速排序**](quick-sort.md) | O(n log n) | O(n log n) | O(n²)      | O(log n)   | In-place  | 不稳定 |
| **堆排序**                    | O(n log n) | O(n log n) | O(n log n) | O(1)       | In-place  | 不稳定 |
| [计数排序](count-sort.md)     | O(n + k)   | O(n + k)   | O(n + k)   | O(k)       | Out-place | 稳定   |
| [桶排序](bucket-sort.md)      | O(n + k)   | O(n + k)   | O(n²)      | O(n + k)   | Out-place | 稳定   |
| 基数排序                      | O(n × k)   | O(n × k)   | O(n × k)   | O(n + k)   | Out-place | 稳定   |

> **说明**
>
> - **n**：数据规模，表示待排序的数据量大小。
> - **k**：
> - **内部排序**：所有排序操作都在内存中完成，不需要额外的磁盘或其他存储设备的辅助。这适用于数据量小到足以完全加载到内存中的情况。
> - **外部排序**：当数据量过大，不可能全部加载到内存中时使用。外部排序通常涉及到数据的分区处理，部分数据被暂时存储在外部磁盘等存储设备上。
> - **稳定**：如果 A 原本在 B 前面，而 $A=B$，排序之后 A 仍然在 B 的前面。
> - **不稳定**：如果 A 原本在 B 的前面，而 $A=B$，排序之后 A 可能会出现在 B 的后面。
> - **时间复杂度**：定性描述一个算法执行所耗费的时间。
> - **空间复杂度**：定性描述一个算法执行所需内存的大小。

## 外部排序 {#external-sort}
