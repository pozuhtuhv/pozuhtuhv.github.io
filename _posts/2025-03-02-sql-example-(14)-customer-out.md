---
title: "SQL 예시 - (14) 시간대별 고객 퇴장 수 조회 (feat. RECURSIVE)"
description: "SQL RECURSIVE 예시"
layout: post
categories: ["SQL"]
published: false
date: 2025-03-02
last_modified_at: 2025-03-02
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

CUSTOMER_OUT (고객 퇴장시간)

| CUSTOMER_ID | DATETIME |
| ----------- | -------- |
| 1 | 2025-03-02 08:15:00 |
| 2 | 2025-03-02 08:45:00 |
| 3 | 2025-03-02 12:30:00 |
| 4 | 2025-03-02 14:10:00 |
| 5 | 2025-03-02 14:45:00 |
| 6 | 2025-03-02 23:50:00 |

<br>

### 1. 계산 진행
```sql
WITH RECURSIVE HOURS AS ( -- 1. 0시부터 23시까지의 시간을 생성
    SELECT 0 AS HOUR
    UNION ALL
    SELECT HOUR + 1 FROM HOURS WHERE HOUR < 23
)

SELECT 
    H.HOUR, 
    COUNT(C.CUSTOMER_ID) AS CUSTOMER_COUNT -- 4. 해당 시간에 퇴장한 고객 수를 계산
FROM HOURS H
LEFT JOIN CUSTOMER_OUT C -- 2. 시간대별 고객 데이터를 연결
    ON H.HOUR = HOUR(C.DATETIME) -- 3. `DATETIME` 값에서 시간을 추출하여 조인
GROUP BY H.HOUR;
```
<br>

### 2. 실행 결과

| HOUR | CUSTOMER_COUNT |
| ---- | -------------- |
| 0 | 0 |
| 1 | 0 |
| 2 | 0 |
| 3 | 0 |
| 4 | 0 |
| 5 | 0 |
| 6 | 0 |
| 7 | 0 |
| 8 | 2 |
| 9 | 0 |
| 10 | 0 |
| 11 | 0 |
| 12 | 1 |
| 13 | 0 |
| 14 | 2 |
| 15 | 0 |
| 16 | 0 |
| 17 | 0 |
| 18 | 0 |
| 19 | 0 |
| 20 | 0 |
| 21 | 0 |
| 22 | 0 |
| 23 | 1 |

<br>
<br>