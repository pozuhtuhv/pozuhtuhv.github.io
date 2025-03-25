---
title: SQL 예시 - (7) 부서별 최고 연봉을 받는 직원 (feat. SUBQUERY)
description: SQL SUBQUERY 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-05
date_modified: 2025-02-05
tag: [sql, example, subquery]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## SUBQUERY문

### 0. SQL 문제

| EMP_NAME | DEPARTMENT | SALARY | HIRE_DATE |
| -------- | ---------- | ------ | --------- |
| Alice | HR | 5000000 | 2020-03-15 |
| Bob | IT | 7000000 | 2018-07-24 |
| Charlie | IT | 8000000 | 2017-10-10 |
| David | Sales | 6000000 | 2019-06-30 |
| Emily | HR | 5500000 | 2021-09-12 |
| Frank | IT | 7500000 | 2022-01-20 |
| Grace | Sales | 6500000 | 2018-11-18 |
| Henry | IT | 7200000 | 2015-05-05 |

<br>

### 1. 계산 진행
```sql
SELECT EMP_NAME, DEPARTMENT, SALARY -- 1. 직원 이름, 부서, 급여를 선택하여 출력
FROM EMPLOYEES E
WHERE SALARY = ( -- 2. 각 부서별로 가장 높은 급여를 받는 직원만 필터링
    SELECT MAX(SALARY) -- 3. 같은 부서에서 가장 높은 급여를 조회
    FROM EMPLOYEES E2 -- 4. 동일한 EMPLOYEES 테이블을 서브쿼리로 사용
    WHERE E2.DEPARTMENT = E.DEPARTMENT -- 5. 메인 쿼리와 같은 부서의 급여만 비교
)
ORDER BY SALARY DESC;
```
<br>

### 2. 실행 결과

| EMP_NAME | DEPARTMENT | SALARY | 
| -------- | ---------- | ------ |  
| Charlie | IT | 8000000 | 
| Frank | IT | 7500000 | 
| Grace | Sales | 6500000 | 
| Emily | HR | 5500000 | 