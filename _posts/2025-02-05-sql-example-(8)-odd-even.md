---
title: SQL 예시 - (7) (feat. ODD, EVEN)
description: SQL ODD, EVEN (홀, 짝) 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-05
date_modified: 2025-02-05
tag: [sql, example, question, odd, even]
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

# 홀짝 구하기 (odd, even)

## 0. SQL 예시
```sql
select * from example
where number % 2 = 1; -- 나머지가 1인 홀수만 선택
```
```sql
select * from example
where number % 2 = 0; -- 나머지가 0인 짝수만 선택
```
<br>

- number % 2 = 1 → 홀수만 선택 (나머지가 1)
- number % 2 = 0 → 짝수만 선택 (나머지가 0)