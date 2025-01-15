---
title: SQL의 내림차순과 오름차순 (Feat. 서브쿼리)
description: SQL의 내림차순과 오름차순 코드
layout: post
categories: SQL
published: true
date_published: 2025-01-16
date_modified: 2025-01-16
tag: [sql, database, subquery]
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

# SQL의 내림차순과 오름차순에 관한 코드
회사에서 내림차순과 오름차순을 위해 사용했던 한 사례의 코드를 소개하는 글.
<br>

## 0. 코드 설명
```sql
SELECT *
FROM (
    SELECT *
    FROM your_table_name
    ORDER BY timestamp_column DESC
    LIMIT 30
) AS subquery_result
ORDER BY timestamp_column ASC;
```
<br>
기능 설명으로는 '최신 데이터 30개를 추출한 후, 그 데이터를 다시 오래된 순으로 정렬하기 위한 코드'이다.
<br>

## 1.  각 단계와 기능을 자세히 설명한 내용

1. 최신 데이터 30개의 출력
```sql
SELECT *
FROM your_table_name
ORDER BY timestamp_column DESC
LIMIT 30
```
<br>
기본 데이터 테이블에서 가장 최신의 30개 데이터를 가져오는 역할
<br>
- `ORDER BY timestamp_column DESC` : 데이터의 `timestamp_colum`(시간 열)을 기준으로 `DESC`(내림차순) 정렬. (시간 열이니깐 가장 최신 데이터부터 순서대로 접근가능)<br>
<br>

1. 서브쿼리로서 데이터 정의
```sql
(
    SELECT *
    FROM your_table_name
    ORDER BY timestamp_column DESC
    LIMIT 30
) AS subquery_result
```
<br>
SELECT문은 서브쿼리로 묶여 `subquery_result`라는 이름으로 정의
<br>
- 나중에 메인 쿼리에서 사용할 데이터를 미리 준비하는 역할
- 최신 데이터 30개는 `subquery_result` 로 정의됨<br>
<br>

2. `ORDER BY`문 오래된 순으로 재정렬
```sql
SELECT *
FROM (
    ...
) AS subquery_result
ORDER BY timestamp_column ASC
```
<br>
서브쿼리에서 가져온 데이터 다시 오래된 순으로 정렬
<br>
- `ORDER BY timestamp_column ASC`: `timestamp_column`을 기준으로 오름차순(`ASC`) 정렬하여 가장 오래된 데이터가 위로 오게 재정렬
- 결과적으로 데이터 시간 순서대로 다시 재정렬<br>
<br>

## 동작순서정리 및 중요한것
1. 데이터베이스에서 `timestamp_column`을 기준으로 최신 데이터 30개를 출력.
2. 30개의 데이터를 서브쿼리로 묶어 별도의 결과 집합으로 만듭니다.
3. 서브쿼리 결과를 다시 `timestamp_column` 기준으로 오래된 순서대로 재정렬.<br>
`DESC` : 내림차순<br>
`ASC` : 오름차순