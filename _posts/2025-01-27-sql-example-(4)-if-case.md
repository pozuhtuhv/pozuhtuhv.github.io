---
title: "SQL 예시 - (4) CASE 예시 (feat. IF, CASE)"
description: "SQL IF, CASE 예시"
layout: post
categories: ["SQL"]
published: true
date: 2025-01-27
last_modified_at: 2025-01-27
tag: [sql, example, if, case]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## {{ page.description }}

### 0. SQL 쿼리 설명
```sql
SELECT 
    Column_1,
  CASE 
    WHEN 
    Column_2 LIKE '%Neutered%' OR 
    Column_2 LIKE '%Spayed%' THEN 'O' ELSE 'X'
  END AS '중성화 여부'
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<br>

- CASE문은 SQL 표준이므로 대부분의 데이터베이스에서 호환.
- 확장성이 좋음. 추가 조건을 WHEN 으로 쉽게 추가 가능.
<br>
<br>

```sql
SELECT 
    Column_1,
  IF(Column_2 LIKE '%Neutered%' OR Column_2 LIKE '%Spayed%', 'O', 'X') AS '중성화 여부'
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<br>

- IF문은 MySQL에 특화된 문법.
- 간결함. 단순한 조건일 때 코드가 짧아짐.
<br>
<br>

### 1. 쿼리 구성요소
```sql
  CASE 
    WHEN 
    Column_2 LIKE 'Neutered' OR 
    Column_2 LIKE 'Spayed' THEN 'O' ELSE 'X'
  END
```
<br>

```sql
  IF(Column_2 LIKE 'Neutered' OR Column_2 LIKE 'Spayed', 'O', 'X')
```
<br>
`Column_2` 열에 `Neutered, Spayed` 가 포함되어있다면 `O` 로 표시 아닐시 `X` 로 표시<br>
<br>