---
title: SQL 예시 - (4) (feat. IF문 과 CASE문)
description: SQL 예시에 대한 글
layout: post
categories: SQL
published: true
date_published: 2025-01-25
date_modified: 2025-01-25
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

# IF문 과 CASE문

## 0. SQL 쿼리
```sql
SELECT 
  ANIMAL_ID, 
  NAME,
  CASE 
    WHEN SEX_UPON_INTAKE LIKE '%Neutered%' OR SEX_UPON_INTAKE LIKE '%Spayed%' THEN 'O'
    ELSE 'X'
  END AS '중성화 여부'
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<br>

- CASE문은 SQL 표준이므로 대부분의 데이터베이스에서 호환.
- 확장성이 좋음. 추가 조건을 WHEN 으로 쉽게 추가 가능.
<br>


```sql
SELECT 
  ANIMAL_ID, 
  NAME,
  IF(SEX_UPON_INTAKE LIKE '%Neutered%' OR SEX_UPON_INTAKE LIKE '%Spayed%', 'O', 'X') AS '중성화 여부'
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<br>

- IF문은 MySQL에 특화된 문법이다.
- 간결함. 단순한 조건일 때 코드가 짧아짐.

## 1. 쿼리 구성요소