---
title: "SQL 예시 - (11) 구간 GROUP화 (feat. GROUP BY)"
description: "SQL 구간 GROUP화 예시"
layout: post
categories: ["SQL"]
published: true
date: 2025-02-13
last_modified_at: 2025-02-13
tag: [sql, example, group]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

### 1. 나이 구간별 인원수 구하기
```sql
SELECT FLOOR(AGE / 10) * 10 AS AGE_GROUP, COUNT(*) AS PEOPLE
FROM USERS
GROUP BY AGE_GROUP
ORDER BY AGE_GROUP;
```
<br>

### 2. 월별(Year-Month) 매출 집계
```sql
SELECT DATE_FORMAT(SALE_DATE, '%Y-%m') AS SALE_MONTH, SUM(AMOUNT) AS TOTAL_SALES
FROM SALES
GROUP BY SALE_MONTH
ORDER BY SALE_MONTH;
```
<br>

### 3. 급여 구간별 직원수 구하기
```sql
SELECT FLOOR(SALARY / 1000000) * 1000000 AS SALARY_GROUP, COUNT(*) AS EMPLOYEES
FROM EMPLOYEES
GROUP BY SALARY_GROUP
ORDER BY SALARY_GROUP;
```
<br>

### 4. 코드 설명
구간 그룹화를 나타내게 하는 방법
<br>

`FLOOR(9900 / 10000) * 10000 = 0`
- `9900 / 10000` 를 진행 할 경우 답은 `0.99`
- `FLOOR` 를 진행하면 `0` 을 반환 (내림)
- `10000` 을 곱하면 `0` 으로 지정됨, `GROUP BY` 을 진행하면 `0`의 그룹으로 속함
<br>

`FLOOR(19000 / 10000) * 10000 = 1.9`
- `19000 / 10000` 를 진행 할 경우 답은 `1.9`
- `FLOOR` 를 진행하면 `1` 을 반환 (내림)
- `10000` 을 곱하면 `10000` 으로 지정됨, `GROUP BY` 을 진행하면 `10000`의 그룹으로 속함
<br>
<br>