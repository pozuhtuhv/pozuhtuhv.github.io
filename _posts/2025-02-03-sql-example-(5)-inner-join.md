---
title: SQL 예시 - (5) (feat. INNER JOIN)
description: SQL INNER JOIN 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-03
date_modified: 2025-02-03
tag: [sql, example, question, inner_join]
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
SELECT ICECREAM_INFO.FLAVOR FROM ICECREAM_INFO
INNER JOIN FIRST_HALF ON ICECREAM_INFO.FLAVOR = FIRST_HALF.FLAVOR
WHERE FIRST_HALF.TOTAL_ORDER > 3000 AND ICECREAM_INFO.INGREDIENT = 'fruit_based'
ORDER BY FIRST_HALF.TOTAL_ORDER DESC;
```
<br>
- 정석으로 이루어진 코드
<br>
<br>

```sql
SELECT FLAVOR FROM ICECREAM_INFO
INNER JOIN FIRST_INFO USING (FLAVOR)
WHERE TOTLA_ORDER > 3000 AND INGREDIENT = 'fruit_based'
ORDER BY TOTLA_ORDER DESC;
```
<br>

- USING 을 이용하여 코드가 간결해짐
- 두 테이블에 같은 열이 해당하기에 적용가능
<br>
<br>

## 1. USING vs ON 차이점
```sql
INNER JOIN FIRST_HALF ON ICECREAM_INFO.FLAVOR = FIRST_HALF.FLAVOR
```
<br>

```sql
INNER JOIN FIRST_INFO USING (FLAVOR)
```
<br>

USING (column_name):
- 같은 이름의 컬럼이 두 테이블에 있을 때 자동으로 매칭
- SELECT에서 해당 컬럼을 사용할 때 테이블명을 명시할 필요 없음
<br>
ON table1.column = table2.column:
- 컬럼 이름이 다를 때도 사용할 수 있음
- 테이블명을 명확하게 지정해야 함
- 웬만하면 모든 데이터의 테이블을 명시적으로 기입하는게 좋음