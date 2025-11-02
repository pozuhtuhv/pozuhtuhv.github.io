---
title: "SQL 예시 - (15) 여러 테이블의 제품 판매액 합계"
description: "SQL RECURSIVE 예시"
layout: post
categories: ["SQL"]
published: false
date: 2025-03-05
last_modified_at: 2025-03-05
tag: [sql, example, recursive]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

### 0. SQL 문제

HALF_ORDER (2분기 제품별 매출액)

| NUMBER | FLAVOR | TOTAL_ORDER |
| ------ | ------ | ----------- |
| 01 | mint | 525322 |
| 02 | strawberry | 53128 |
| 03 | chocolate | 132635 |
| 04 | banana | 188707 |
| 05 | apple | 223174 |

<br>

LAST_MONTH (저번달 제품별 매출액)

| NUMBER | FLAVOR | TOTAL_ORDER |
| ------ | ------ | ----------- |
| 01 | mint | 51565 |
| 02 | strawberry | 82152 |
| 03 | chocolate | 32158 |
| 04 | banana | 70821 |
| 05 | apple | 41182 |

<br>

### 1. 계산 진행
```sql
SELECT HO.FLAVOR -- 4. FLAVOR 만 지정 출력
FROM HALF_ORDER HO
JOIN LAST_MONTH ho USING(FLAVOR) -- 2. JOIN 으로 데이터 참조
GROUP BY HO.FLAVOR -- 3. FLAVOR을 그룹으로 지정
ORDER BY SUM(HO.TOTAL_ORDER) DESC -- 1. TOTAL_ORDER 의 합계순 으로 정렬
LIMIT 3
```
<br>

### 2. 실행 결과

| FLAVOR |
| ------ |
| mint |
| apple |
| banana |
| chocolate |
| strawberry |

<br>
<br>