---
title: SQL 예시 - (9) (feat. DISTINCT)
description: SQL DISTINCT 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-05
date_modified: 2025-02-05
tag: [sql, example, question, distinct]
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

# 중복된 값을 제거하고 고유한 값만 선택 (distinct)

## 0. SQL 예시
```sql
SELECT DISTINCT name FROM employees;
```
<br>

- 중복된 열의 데이터를 제외.
- ex) 주문번호에 대한 주문건수를 수집할때