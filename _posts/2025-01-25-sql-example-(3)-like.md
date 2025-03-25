---
title: SQL 예시 - (3) 특정 조건에 맞는 데이터 COUNT (feat. LIKE)
description: SQL LIKE 예시
layout: post
categories: SQL
published: true
date_published: 2025-01-25
date_modified: 2025-01-29
tag: [sql, example, like]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## 특정 조건에 맞는 데이터 COUNT

### 0. SQL 쿼리
```sql
SELECT columns_type, COUNT(*) AS example
FROM table
WHERE columns LIKE '%A%' 
   OR columns LIKE '%B%' 
   OR columns LIKE '%C%'
GROUP BY columns_type
ORDER BY columns_type ASC;
```
<br>
Result : <br>

| columns_type | example |
| ------------ | ------- |
| A | 10 |
| B | 5 |
| C | 8 |

<br>

### 1. 쿼리 구성요소
1. `WHERE columns LIKE '%word%' ~`
- 'columns' 열에 '%word%'가 포함되어있는 조건.
2. `SELECT columns_type, COUNT(*) AS example FROM table`
- 조건을 만족하는 행의 개수 별칭을 'example' 로 지정.
- 데이터를 가져올 테이블의 이름 'table'.
3. `GROUP BY columns_type`
- 'SELECT columns_type, COUNT(*)'을 사용할 경우, 'GROUP BY columns_type' 필요.
4. `ORDER BY columns_type ASC`
- 데이터를 'columns_type'를 오름차순 기준으로 지정.