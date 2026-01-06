# 理发师问题

## 问题描述

（1）理发店里有一位理发师、一把理发椅和n把供等候理发的顾客坐的椅子  
（2）如果没有顾客，理发师便在理发椅上睡觉  
（3）一个顾客到来时，它必须叫醒理发师  
（4）如果理发师正在理发时又有顾客来到，则如果有空椅子可坐，就坐下来等待，否则就离开  

## 分析步骤

- 找出各类资源和进程：
  - 进程：理发师、顾客
  
- 写出各类进程的同步和互斥关系：
  - 同步：  
    理发师等待顾客，若无顾客，理发师就睡觉；  
    顾客等待理发师，若理发师忙，顾客等待被叫

## 解决方案

- 伪代码

```cpp
# define CHAIRS 5               // 等候椅数量

semaphore barber = 0;           // 同步信号量，表示理发师是否在理发，初值为0
semaphore customers = 0;        // 同步信号量，表示当前有多少个顾客在等待理发，初值为0
semaphore mutex = 1;            // 互斥信号量，用于互斥访问共享变量waiting，初值为1
int waiting = 0;                // 当前在等候椅上等待的顾客数

cobegin
Barber() {
    while(1) { 
        P(customers);           // 等待顾客，若无顾客则睡觉
        P(mutex);               
        waiting --;
        V(mutex);               
        V(barber);              // 唤醒理发师，通知顾客理发
        cut hair;
    }
}

Customeri() {
    P(mutex);                   
    if (waiting < CHAIRS) {
        waiting ++;
        V(mutex);
        V(customers);           // 通知理发师有顾客
        P(barber);              // 等待理发师叫自己
        get haircut;
    } else {
        V(mutex);
        leave;
    }
}
coend
```

- 总结

| 角色      | 行为                                                             |
|---------|----------------------------------------------------------------|
| **理发师** | `wait(customers)` → `signal(barber)` → 理发                      |
| **顾客**  | `wait(mutex)` → 坐下 → `signal(customers)` → `wait(barber)` → 理发 |

- **🔐 先上锁，再判断，改完释放锁 🔴 绝对不能在加锁前检查共享变量！**

```cpp
P(mutex);           // 先加锁
if (condition) {    // 检查条件
    修改共享变量
    V(mutex);       // 释放锁
    执行非临界区操作
} else {
    V(mutex);       // 释放锁
    处理失败情况
}
```
