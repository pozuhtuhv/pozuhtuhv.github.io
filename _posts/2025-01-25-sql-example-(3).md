---
title: SQL 예시 - (3) (feat. Equal(=), IN)
description: SQL 예시에 대한 글
layout: post
categories: SQL
published: true
date_published: 2025-01-25
date_modified: 2025-01-25
tag: [sql, example, question, equal, in]
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

## 0. SQL 쿼리
```sql
SELECT column 
from table 
WHERE 'word' IN (column_1, column_2, column_3);
```
<br>

```sql
SELECT column 
FROM table 
WHERE column = 'word_1' 
   or column = 'word_2' 
   or column = 'word_3';
```
<br>

- 둘다 같은 기능을 한다.
- '일부 데이터베이스에서는 이 쿼리가 지원되지 않을 수 있다' 라고함.

## 1. 쿼리 구성요소
```sql
SELECT column
```
- 가져올 데이터를 지정.
<br>
<br>

```sql
FROM table
```
- 데이터를 검색할 테이블의 이름을 지정.
<br>
<br>

```sql
WHERE 'word' IN (column_1, column_2, column_3)
```
- 'word'라는 값이 column_1, column_2, column_3 중 하나에 존재하는지 확인