---
title: SQL 예시 - (12) 두개의 날짜 간의 차이 (feat. TIMESTAMPDIFF)
description: SQL TIMESTAMPIDFF 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-14
date_modified: 2025-02-14
tag: [sql, example, timestampdiff, join]
---
---
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 #
    나머지 큰 제목은 ##
    이후 나머지는 3개이상 -->

# SQL에서의 두개의 날짜 간의 차이 구하기 

## 1. 두개의 날짜 간의 차이 구하기
```sql
TIMESTAMPDIFF(단위, 시작시간, 종료시간)
```
- 단위: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND 등
- 시작시간: 기준이 되는 날짜
- 종료시간: 차이를 계산할 날짜
<br>

## 2. 예제 테이블
CUSTOMER_INS (손님 입장)

| ID | DATETIE |
| --- | --- |
| A | 2024-01-01 08:00:00
| B | 2024-01-05 08:00:00


CUSTOMER_OUTS (손님 퇴장)

| ID | DATETIE |
| --- | --- |
| A | 2024-01-01 08:15:00
| B | 2024-01-05 08:10:00

<br>

## 계산 진행
```sql
SELECT 
    ai.ID, 
    ai.DATETIME AS 입장시간, 
    ao.DATETIME AS 퇴장시간,
    TIMESTAMPDIFF(SECOND, ai.DATETIME, ao.DATETIME) AS 초
FROM CUSTOMER_INS ai
JOIN CUSTOMER_OUTS ao ON ai.ID = ao.ID;
```
<br>

| ID | 입장시간 | 퇴장시간 | 초 |
| --- | --- | --- | --- |
| A | 2024-01-01 08:00:00 | 2024-01-01 08:15:00 | 900 |
| B | 2024-01-05 08:00:00 | 2024-01-05 08:10:00 | 600 |