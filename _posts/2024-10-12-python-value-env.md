---
title: "변수.env"
description: "환경변수 모듈의 설치와 예시 코드"
layout: post
categories: ["Python"]
published: true
date: 2024-10-12
last_modified_at: 2024-10-12
tag: [python, module]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## 변수 .env
`.env 파일 변수`
`토큰 데이터나 고정값을 외부의 파일을 불러와 변수로 적용하는 방법`

### 모듈 설치
```python
pip install python-dotenv
```
<br>

### .env 파일 내용
```python
USER = 'ABC'
```
<br>

### 실행 예시
```python
import os
from dotenv import load_dotenv

load_dotenv()

user = os.getenv('USER')
```