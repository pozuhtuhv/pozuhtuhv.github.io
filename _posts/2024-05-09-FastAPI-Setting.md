---
title: FastAPI 세팅
description: FastAPI의 세팅 경험
layout: post
category: Python
published: true
date_published: 2024-05-09
date_modified: 2024-05-09
tag: [python, fastapi, framework]
---
---
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 4개이상 -->

## FastAPI 기본 실행해보기
<br>

### 0. FastAPI 소개
Python에서 Python 3.6+ 버전을 기반으로 한 현대적이고 빠른(고성능) 웹 프레임워크로, 2018년에 처음 소개되었다.<br>
API 개발에 최적화되어 있으며, Python 타입 힌트를 사용하여 데이터 구분이 쉽다.
1. Python의 타입힌트를 활용하여 입출력 데이터의 유효성을 찾기 쉽다.
2. Swagger UI와 ReDoc를 자동으로 구성해주어, 이를 통해 API를 쉽게 테스트하고, 문서화하기 쉽다 .
3. 기능을 하나하나 추가해야하지만 그만큼 자유도가 높다.
4. ASGI 비동기서버 지원으로 한 작업이 끝날때까지 기다리지 않고 다른 작업을 처리 가능 
<br>

### 1. Python 패키지 설치
```python
python venv [folder] # 가상환경 세팅

pip install fastapi, uvicorn # 패키지 설치
```
<br>

### 2. database.py, models.py 기본구성
기본적으로 Database는 SQLAlchemy를 사용한다.
```python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# SQLALCHEMY_DATABASE_URL = 'sqlite:///./postapp.db' # SQLlite 사용시
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:aaaaa@127.0.0.1:3306/fastapi_test" # mysql 사용시
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# models.py
from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Users(Base):
    __tablename__ = "users"

# MySQL Column 작성
    user = Column(String(50))
    email = Column(String(50))
```
<br>

### 3. API 설정 (경로('/')에 대한 GET 요청을 처리하는 비동기 엔드포인트)
```python
# main.py
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
async def read_root():
    user = db.query(models.Users).user.get("user").all()
    email = db.query(models.Users).user.get("email").all()
    return {"user": user,"email": email}
```
<br>

### 4. 서버 정상설치 확인하기
```python 
uvicorn main:app --reload --host=0.0.0.0 --port=80
# main : main.py
# app : main.py 의 app=FastAPI()
# --reload : 코드변경 저장시 자동으로 재시작
# --host : 모든 접근 가능 0.0.0.0
# --port : 열린포트 설정하기
```