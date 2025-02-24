---
title: SQL 예시 - (2) 제품의 월별 판매량 합계 및 매출 합계
description: SQL 예시
layout: post
categories: SQL
published: true
date_published: 2025-01-19
date_modified: 2025-01-19
tag: [sql, example, question]
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

# 제품의 월별 판매량 합계 및 매출 합계 구하기

## 0. SQL 문제

| 컬럼 | 설명 |
| --- | --- |
| product_id | 제품 ID |
| sale_date | 판매 일자 (YYYY-MM-DD 형식) |
| quantity | 판매 수량 |
| price | 제품 * 가격 |

<br>

- `sales` 테이블에서 2023년 1월부터 3월까지의 전체 제품의 월별 판매량 합계와 매출 합계를 구하는 쿼리를 작성하시오.
<br>

## 1. 각 단계와 기능을 자세히 설명한 내용
```sql
SELECT
    DATE_FORMAT(sale_date, '%Y-%m') AS month,  -- 연도-월 형식으로 변환
    SUM(quantity) AS total_quantity,          -- 월별 총 판매량
    SUM(quantity * price) AS total_revenue    -- 월별 총 매출
FROM sales
WHERE sale_date BETWEEN '2023-01-01' AND '2023-03-31'  -- `BETWEEN A AND B`
GROUP BY month  -- 월별 그룹화
ORDER BY month;  -- 월별로 정렬
```
<br>

1. 월별 데이터 추출 
```sql
DATE_FORMAT(sale_date, '%Y-%m') AS month
```
<br>
- DATE_FORMAT 함수: sale_date를 연도-월 형식(YYYY-MM)으로 변환.
<br>
<br>

2. 월별 총 판매량 계산
```sql
SUM(quantity) AS total_quantity
```
<br>
- SUM(quantity): 각 월에 판매된 수량(quantity)을 모두 합계.
<br>
<br>

3. 월별 총 매출 계산
```sql
SUM(quantity * price) AS total_revenue
```
<br>
- SUM(quantity * price): 각 판매 기록의 매출을 계산 후 모두 합계.
<br>
<br>

4. 필터 조건 추가 (1월 ~ 3월 데이터만 포함)
```sql
WHERE sale_date BETWEEN '2023-01-01' AND '2023-03-31'
```
<br>
- WHERE : 쿼리에 조건을 추가.
- BETWEEN : sale_date를 2023-01-01부터 2023-03-31 데이터를 선택. (BETWEEN 'A' AND 'B')
<br>
<br>

5. 데이터 그룹화
```sql
GROUP BY month
ORDER BY month
```
<br>
- GROUP BY : 데이터를 month별로 묶음.
- ORDER BY : 총 결과를 month 기준으로 오름차순(기본 설정) 정렬.