# 串

> 以模式串 **abcaabbabcab** 为例

## 求 next 和 nextval 数组

- next

```mermaid
flowchart LR
    Start@{shape: sm-circ, label: "Small start"} --> Init["next[1] = 0"]
    Init --> CheckJ{"判断 2<=j<=m ?"}

    CheckJ -- N --> End@{shape: framed-circle, label: "Stop"}

    CheckJ -- Y --> CalcNext["计算 next[j] =\n PM（最长公共前缀） + 1"]
    CalcNext --> NextJ["j++"]
    NextJ --> CheckJ

    style Init fill:#f9f,stroke:#333,stroke-width:2px
    style CalcNext fill:#ff9,stroke:#333,stroke-width:2px
```

=> next[2] = 1

- nextval

```mermaid
flowchart TD
    Start@{shape: sm-circ, label: "Small start"} --> Init["nextval[1] = 0"]
    Init --> LoopStart{"判断 2<=j<=m ?"}

    LoopStart -- N --> End@{shape: framed-circle, label: "Stop"}

    LoopStart -- Y --> Compare{"判断 S[j] == S[next[j]] ?"}

    Compare -- N --> KeepVal["nextval[j] = next[j]"]
    KeepVal --> NextLoop["j++"]

    Compare -- Y --> RecursiveCheck{"判断 S[j]是S首次出现的字符"}

    RecursiveCheck -- Y --> UpdateVal["nextval[j] = next[j]"]
    UpdateVal --> NextLoop

    RecursiveCheck -- N --> SetFirst{"判断S[j]==S[next[next[j]]] ?"}
    SetFirst -.-> Compare

    NextLoop --> LoopStart

    style Init fill:#f9f,stroke:#333,stroke-width:2px
    style Compare fill:#f96,stroke:#333,stroke-width:2px
    style UpdateVal fill:#9cf,stroke:#333,stroke-width:2px
```

| j          | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
| :--------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| S[j]       | a   | b   | c   | a   | a   | b   | b   | a   | b   | c   | a   | b   |
| next[j]    | 0   | 1   | 1   | 1   | 2   | 2   | 3   | 1   | 2   | 3   | 4   | 5   |
| nextval[j] | 0   | 1   | 1   | 0   | 2   | 1   | 3   | 0   | 1   | 1   | 0   | 5   |

## BF && KMP

- BF
  i = i - j + 2, j = 1
  时间复杂度： 最坏 O(m\*n)；最好平均 O(m+n)

- KMP
  主串不回溯；j = next[j]
  时间复杂度： O(m+n)
  移动位数 = j - next[j] = j - nextval[j] = 已匹配的字符 - PM

## 匹配过程中字符比较次数

![匹配过程中字符比较次数](../../resource/image/ds/匹配过程中字符比较次数.png)
