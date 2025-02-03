---
title: SQL 예시 - (5) (feat. JOIN)
description: SQL 예시에 대한 글
layout: post
categories: SQL
published: true
date_published: 2025-02-03
date_modified: 2025-02-03
tag: [sql, example, question, join]
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

# JOIN문

## 0. SQL 쿼리 설명
```sql
SELECT column_1, SUM(TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF 
JOIN ICECREAM_INFO USING(FLAVOR)
GROUP BY column_1
ORDER BY TOTAL_ORDER;
```
<br>
- CASE문은 SQL 표준이므로 대부분의 데이터베이스에서 호환.
- 확장성이 좋음. 추가 조건을 WHEN 으로 쉽게 추가 가능.

<br>
<br>

## 1. 쿼리 구성요소
