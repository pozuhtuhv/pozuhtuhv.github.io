---
title: "Python 을 이용한 SQL의 데이터 임포트 / 엑스포트"
description: "MySQL 입출력 코드에 대한 예시 코드"
layout: post
categories: ["Python"]
published: true
date: 2025-01-16
last_modified_at: 2025-01-16
tag: [python, sql, database]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## MySQL 데이터 입출력
데이터 임포트 / 엑스포트 할때 사용했던 명령어
<br>

### 0. Import
```python
import pandas as pd
from sqlalchemy import create_engine
import pymysql

# CSV 파일을 DataFrame으로 불러오기
df = pd.read_csv('A.csv')

# MySQL 엔진 생성
engine = create_engine('mysql+pymysql://user:password@host(ip)/database')

# DataFrame을 MySQL에 업로드
df.to_sql('table_name', con=engine, if_exists='append', index=False)
```
<br>
- `A.csv` 를 읽고 `mysql`의 `database` 에 `table_name` 이라는 이름으로 Import
<br>

### 0. Export
```python
import pandas as pd
from sqlalchemy import create_engine
import pymysql

# MySQL 엔진 생성
engine = create_engine('mysql+pymysql://user:password@host(ip)/database')

# SQL 쿼리를 사용하여 데이터를 DataFrame으로 불러오기
query = "SELECT * FROM {database}.{table_name}"
df = pd.read_sql_query(query, con=engine)

# DataFrame을 CSV 파일로 저장
df.to_csv('B.csv', index=False, encoding='utf-8')
```
<br>
- `query` 를 읽고 `B.csv`로 Export
<br>