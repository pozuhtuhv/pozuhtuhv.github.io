---
title: SQL 예시 - (7) (feat. SUBQUERY)
description: SQL SUBQUERY 예시에 대한 글
layout: post
categories: SQL
published: true
date_published: 2025-02-05
date_modified: 2025-02-05
tag: [sql, example, question, subquery]
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

# SUBQUERY문

## 0. SQL 문제

| emp_id | emp_name | department | salary | hire_date |
| --- | --- | --- | --- | --- |
| 1 | Alice | HR | 5000000 | 2020-03-15 |
| 2 | Bob | IT | 7000000 | 2018-07-24 |
| 3 | Charlie | IT | 8000000 | 2017-10-10 |
| 4 | David | Sales | 6000000 | 2019-06-30 |
| 5 | Emily | HR | 5500000 | 2021-09-12 |
| 6 | Frank | IT | 7500000 | 2022-01-20 |
| 7 | Grace | Sales | 6500000 | 2018-11-18 |
| 8 | Henry | IT | 7200000 | 2015-05-05 |

<br>

- 부서별(department) 최고 연봉(salary)을 받는 직원의 정보를 조회.
- 같은 부서에서 최고 연봉을 받는 직원이 여러 명이면 모두 포함.
- 연봉이 높은 순으로 정렬.
<br>
Result Example : <br>

| emp_name | department | salary | 
| --- | --- | --- |  
| Charlie | IT | 8000000 | 
| Frank | IT | 7500000 | 
| Grace | Sales | 6500000 | 
| Emily | HR | 5500000 | 

<br>

## 1. 쿼리 설명
```sql
SELECT emp_name, department, salary
FROM employees e
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE department = e.department
)
ORDER BY salary DESC;
```
1. 각 부서별 최고 연봉을 받는 직원 조회 (WHERE salary = (서브쿼리))
- 서브쿼리: 같은 부서(department)에서 최고 연봉(MAX(salary))을 찾음.
- HERE department = e.department : 각 직원이 속한 부서에서 최고 연봉을 찾도록 함.
2. 연봉이 높은 순서로 정렬 (ORDER BY salary DESC)
- 연봉이 높은 순서대로 결과를 정렬하여 출력.