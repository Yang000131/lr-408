# 橘子-苹果问题 (Orange-Apple Problem)

## 问题描述

桌子上有一只盘子，每次只能向其中放入一个水果。  
爸爸专向盘子中放苹果，妈妈专向盘子中放橘子，儿子专等着吃盘子中的橘子，女儿专等着吃盘子中的苹果。  
只有盘子空时，爸爸或妈妈才可向盘子中放入一个水果。仅当盘子中有自己需要的水果时，儿子或女儿可以从盘子中取出水果。

## 分析步骤

- 找出各类资源和进程：
  - 进程：Dad、Mom、Son、Daughter
  - 资源：盘子

- 写出各类进程的同步和互斥关系：
  - 同步：
    必定是先有父亲放苹果，后有女儿拿苹果；  
    必定是先有母亲放橘子，后有儿子拿橘子；  
    必定是先有女儿或者儿子拿走水果，后有父亲或者母亲放上水果
  - 互斥：  
    对盘子的访问，如放水果、取水果

## 解决方案

```cpp
semaphore plate = 1;
semaphore apple = 0;
semaphore orange = 0;

cobegin
Dad() {
    while(1) {
        prepare apple;
        P(plate);
        put apple on plate;
        V(apple);
    }
}

Mom() {
    while(1) {
        prepare orange;
        P(plate);
        put orange on plate;
        V(orange);
    }
}

Son() {
    while(1) {
        P(orange);
        take orange from plate;
        V(plate);
        eat orange;
    }
}

Daughter() {
    while(1) {
        P(apple);
        take apple from plate;
        V(plate);
        eat apple;
    }
}
coend
```

### 互斥问题总结

::: danger 为什么可以省略 mutex ?

**当其他同步机制已经天然提供了互斥性时，就可以省略 `mutex`**

- 单缓冲区的生产者-消费者问题
- 有严格顺序的信号量控制，如橘子-苹果问题
- 每个资源有专用信号量，且操作原子，如吸烟者问题
:::

::: tip 什么情况必须添加 mutex ？

- 多个进程访问共享变量，且无其他互斥机制，如理发师问题的理发师进程
- 条件判断在信号量之前，如理发师问题的顾客进程，读者-写者问题的读者进程
- 缓冲区 > 1
:::
