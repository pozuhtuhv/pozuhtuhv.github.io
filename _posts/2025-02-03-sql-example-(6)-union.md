---
title: "SQL 예시 - (6) UNION문 예시 (feat. UNION)"
description: "SQL UNION 예시"
layout: post
categories: ["SQL"]
published: true
date: 2025-02-03
last_modified_at: 2025-02-03
tag: [sql, example, union]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## UNION문

### 0. SQL 쿼리 설명
```sql
select 
    date_format(os.sales_date, '%Y-%m-%d') sales_date,
    os.product_id,
    os.user_id,
    os.sales_amount
from (
    select 
        sales_date,
        product_id,
        user_id,
        sales_amount from online_sale -- 1. 테이블 데이터 1 
    union all -- 3. 모두 합친다 (중복된 데이터를 제거하려면 UNION을 사용하지만, 이는 성능저하를 불러옴)
    select 
        sales_date, 
        product_id,
        NULL, -- 테이블에 user_id 가 없으니 NULL로 채움
        sales_amount from offline_sale -- 2. 테이블 데이터 2
        ) os -- 4. 테이블 데이터 1,2의 데이터 정제
```
<br>

- 두개의 테이블을 열의 이름이 같은 데이터를 합칠때 사용
- 열 이름이 다르더라도 문제없이 데이터가 합쳐짐. (단, 데이터타입이 다르면 에러 발생)