---
title: "셀레니움의 자동화설치(feat. edge, chrome)"
description: "셀레니움의 자동화설치 설명"
layout: post
categories: ["Python"]
published: true
date: 2025-05-26
last_modified_at: 2025-05-26
tags: [python, selenum, edge, chrome]
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

### 0. 개요
셀레니움의 기본 구성을 작성할려고 한다.<br>
매번 자료를 가져올 때마다 버전이 다른경우가 많고,<br>
상황에 따라 다른 환경에 최적화 하기가 어렵다.<br>
개발자 도구를 매번 다운 받기가 귀찮기도 했고, 이를 해결하기 위한 라이브러리가 존재하기 때문에,<br>
이 기본구조를 찾기 쉽게하기 위해 쓰는 글.<br>
추가로 세션유지를 위한 세팅도 포함.<br>

### 1. 환경
OS 환경 : macOS<br>
브라우저 : Edge, Chrome<br>

### 2. 코드

<b>Edge</b>
<br>

```python
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from webdriver_manager.microsoft import EdgeChromiumDriverManager
from selenium.webdriver.common.by import By
import time
import os

profile_path = os.path.join(os.getcwd(), ".edge_profile")

options = webdriver.EdgeOptions()
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument(f"--user-data-dir={profile_path}")

service = Service(EdgeChromiumDriverManager().install())
driver = webdriver.Edge(service=service, options=options)

driver.get("https://www.google.com")
```
<br>
<b>Chrome</b>
<br>

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import os

profile_path = os.path.join(os.getcwd(), ".chrome_profile")

options = webdriver.ChromeOptions()
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument(f"--user-data-dir={profile_path}")

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://www.example.com")
```

### 3. 이후의 코드
아직 미작성 (셀레니움에 대한 코드 설명은 새로운 컨텐츠로 추가 예정)