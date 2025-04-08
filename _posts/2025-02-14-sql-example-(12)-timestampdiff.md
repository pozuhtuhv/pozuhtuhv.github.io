---
title: "SQL 예시 - (12) 두개의 날짜 간의 차이 (feat. TIMESTAMPDIFF, JOIN)"
description: "SQL TIMESTAMPIDFF, JOIN 예시"
layout: post
categories: ["SQL"]
published: true
date: 2025-02-14
last_modified_at: 2025-02-14
tag: [sql, example, timestampdiff, join]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## SQL에서의 두개의 날짜 간의 차이 구하기 

### 0. SQL 문제

CUSTOMER_INS (손님 입장)

| ID | DATETIE |
| -- | ------- |
| A | 2024-01-01 08:00:00
| B | 2024-01-05 08:00:00

<br>

CUSTOMER_OUTS (손님 퇴장)

| ID | DATETIE |
| -- | ------- |
| A | 2024-01-01 08:15:00
| B | 2024-01-05 08:10:00

<br>

### 1. 계산 진행
```sql
SELECT 
    ci.ID, 
    ci.DATETIME AS 입장시간, 
    co.DATETIME AS 퇴장시간,
    TIMESTAMPDIFF(SECOND, ci.DATETIME, co.DATETIME) AS 초
FROM CUSTOMER_INS ci
JOIN CUSTOMER_OUTS co ON ci.ID = co.ID;
```
<br>

### 2. 실행 결과

| ID | 입장시간 | 퇴장시간 | 초 |
| -- | ---- | ---- | - |
| A | 2024-01-01 08:00:00 | 2024-01-01 08:15:00 | 900 |
| B | 2024-01-05 08:00:00 | 2024-01-05 08:10:00 | 600 |