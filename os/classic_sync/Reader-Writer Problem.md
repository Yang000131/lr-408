---
outline: deep
---

# 读者-写者问题 (Reader-Writer Problem)

## 问题描述

有读者和写者两组进程，它们共同访问同一个文件。  
对于读者，它可以与多个读者共同读取文件（因为不会修改到文件）；  
对于写者，它不能与其他任何进程共同访问文件

## 分析步骤

- 进程：
  - 读者（Reader）：  
    只读取资源，不修改；  
    可以多个读者同时读（因为读操作不会破坏数据）。
  - 写者（Writer）：  
    修改资源（写入）；  
    必须独占资源：当写者在写时，不能有其他写者或读者访问。
- 资源： 共享文件

## 解决方案

### 读优先（Reader Priority）

- 只要有读者在读，后续的读者可以立即进入
- 写者必须等待所有读者完成才能写
- 缺点：可能导致写者饥饿（一直有读者进来，写者等不到机会）

```cpp
sempphore rw = 1;           // 互斥信号量，控制读写、写写操作的互斥
smpaphore mutex = 1;        // 互斥信号量，用于互斥访问共享变量count
int count = 0;              // 当前读者数量

cobegin
Writer() {
    while(1) {
        P(rw);
        writer data;
        V(rw);
    }
}

Reader(){
    while(1) {
        P(mutex);           
        if(count == 0)      // 第一个读者，阻止写者写入
            P(rw);
        count ++;
        V(mutex);           

        read data;

        P(mutex);           
        count --;
        if(count == 0)      // 最后一个读者，允许写者写入
            V(rw);
        V(mutex);           
    }
}
coend
```

### 写优先（Writer Priority）

- 一旦有写者到达，后续的读者就不能进入
- 写者不会被新来的读者“插队”
- 避免写者饥饿，但可能导致读者饥饿

```cpp
sempphore rw = 1;           // 互斥信号量，控制读写、写写操作的互斥
smpaphore mutex = 1;        // 互斥信号量，用于互斥访问共享变量count
sempaphore queue = 1;       // 互斥信号量，用于实现读写公平，确保写者可以顺利排队
int count = 0;              // 当前读者数量

cobegin
Writer() {
    while(1) {
        P(queue);           // 排队，确保读写公平
        P(rw);
        writer data;
        V(rw);
        V(queue);
    }
}

Reader(){
    while(1) {
        P(queue);           // 排队，确保读写公平
        P(mutex);
        if(count == 0)      // 第一个读者，阻止写者写入
            P(rw);
        count ++;
        V(mutex);
        V(queue);           

        read data;

        P(mutex);
        count --;
        if(count == 0)      // 最后一个读者，允许写者写入
            V(rw);
        V(mutex);
    }
}
coend
```
