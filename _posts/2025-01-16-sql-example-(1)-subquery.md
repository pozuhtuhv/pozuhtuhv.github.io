---
title: "SQL 예시 - (1) 역순정렬의 순차정렬 (feat. SUBQUERY)"
description: "SQL SUBQUERY 예시"
layout: post
categories: ["SQL"]
published: true
date: 2025-01-16
last_modified_at: 2025-01-16
tag: [sql, database, subquery]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## SQL의 역순정렬의 순차정렬에 관한 코드
회사에서 역순정렬의 순차정렬을 위해 사용했던 한 사례의 예제.
<br>

### 0. 코드 설명
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

### 동작순서정리
1. 데이터베이스에서 `timestamp_column`을 기준으로 최신 데이터 30개를 출력.
2. 30개의 데이터를 서브쿼리로 묶어 별도의 결과 집합으로 지정.
3. 서브쿼리 결과를 다시 `timestamp_column` 기준으로 오래된 순서대로 재정렬.
<br>
`DESC` : 내림차순<br>
`ASC` : 오름차순<br>
<br>