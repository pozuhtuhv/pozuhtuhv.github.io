---
title: SQL 예시 - (13) 가장 많이 글쓴사람 리뷰만 출력 (feat. SUBQUERY, JOIN)
description: SQL SUBQUERY, JOIN 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-25
date_modified: 2025-02-25
tag: [sql, example, subquery, join]
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

# SQL에서의 가장 많이 글쓴사람 리뷰만 출력

## 0. SQL 문제

USER_PROFILE (유저 프로필)

| USER_ID | USER_NAME | TLNO | GENDER | DATE_OF_BIRTH | 
| --- | --- | --- | --- | --- |
| wlgh123 | 지호 | 01076432111 | W | 1995-07-31 | 
| qwerty3507 | 쿼티 | 01032324117 | M | 1997-02-25 | 
| asdf1250 | 예한 | 01023258688 | M | 1998-04-12 | 

<br>

REST_REVIEW (리뷰 목록)

| REVIEW_ID | REST_ID | MEMBER_ID | REVIEW_SCORE | REVIEW_TEXT | REVIEW_DATE | 
| --- | --- | --- | --- | --- | --- |
| R000000065 | 00039 | wlgh123 | 5 | 김치찌개 맛있어요. | 2024-02-21 | 
| R000000066 | 00034 | wlgh123 | 4 | 국물이 깔끔해요. | 2024-04-25 | 
| R000000067 | 00035 | wlgh123 | 2 | 초밥이 신선해요. | 2024-07-31 | 
| R000000068 | 00035 | asdf1250 | 5 | 우동먹으로 여기만 와요. | 2024-06-11 | 
| R000000069 | 00036 | qwerty3507 | 2 | 치킨은 여기가 제일 맛있어요. | 2024-08-10 | 

<br>

## 계산 진행
```sql
SELECT 
    MR.USER_NAME, 
    RR.REVIEW_TEXT, 
    DATE_FORMAT(RR.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE FROM USER_PROFILE MR
JOIN REST_REVIEW RR USING (USER_ID)
WHERE MR.USER_ID = ( -- 2. 제일 많은 리뷰를 가진 사람을 확인 
    SELECT USER_ID 
    FROM REST_REVIEW 
    GROUP BY USER_ID 
    ORDER BY COUNT(*) DESC 
    LIMIT 1 -- 1. 제일 많은 리뷰를 가진 사람의 ID 출력 하고
)
ORDER BY REVIEW_DATE, REVIEW_TEXT;
```
<br>

| USER_NAME | REVIEW_TEXT | REVIEW_DATE |
| --- | --- | --- |
| 지호 | 김치찌개 맛있어요. | 2024-02-21 |
| 지호 | 국물이 깔끔해요. | 2024-04-25 |
| 지호 | 초밥이 신선해요. | 2024-07-31 |