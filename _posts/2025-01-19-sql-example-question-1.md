---
title: SQL 예시문제 (1)
description: SQL 예시문제에 대한 글
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

# SQL 예시문제 (1)
SQL에 대한 공부를 시작해야할 것 같아서 올리는 글
<br>

## 0. SQL 문제: 제품의 월별 판매량 합계 및 매출 합계 구하기

| 컬럼 | 설명 |
| --- | --- |
| product_id | 제품 ID |
| sale_date | 판매 일자 (YYYY-MM-DD 형식) |
| quantity | 판매 수량 |
| price | 제품 * 가격 |

`sales`테이블에서 2023년 1월부터 3월까지의 전체 제품의 월별 판매량 합계와 매출 합계를 구하는 쿼리를 작성하세요.
<br>
제약 사항:<br>
- sale_date는 날짜 형식으로 저장되어 있습니다.
- 결과는 월별로 정렬되어야 합니다.
- 월별 총 매출 = (판매 수량) * (가격)
<br>
<br>
```sql
SELECT
    DATE_FORMAT(sale_date, '%Y-%m') AS month,  -- 연도-월 형식으로 변환
    SUM(quantity) AS total_quantity,          -- 월별 총 판매량
    SUM(quantity * price) AS total_revenue    -- 월별 총 매출
FROM
    sales
WHERE
    sale_date BETWEEN '2023-01-01' AND '2023-03-31'  -- 2023년 1월 1일부터 3월 31일까지 `BETWEEN A AND B`
GROUP BY
    month  -- 월별 그룹화
ORDER BY
    month;  -- 월별로 정렬
```

설명:
- DATE_FORMAT(sale_date, '%Y-%m'): sale_date를 연도-월(YYYY-MM) 형식으로 변환하여 그룹화 기준으로 사용합니다.
- SUM(quantity): 월별 총 판매량을 구합니다.
- SUM(quantity * price): 월별 매출 합계를 계산합니다. quantity와 price를 곱하여 총 매출을 구합니다.
- WHERE sale_date BETWEEN '2023-01-01' AND '2023-03-31': 2023년 1월부터 3월까지의 데이터를 필터링합니다.
- GROUP BY month: 월별로 데이터를 그룹화합니다.
- ORDER BY month: 결과를 월별로 오름차순 정렬합니다.