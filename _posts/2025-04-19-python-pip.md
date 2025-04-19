---
title: "파이썬의 개발환경 라이브러리 관리"
description: "Python 개발환경 라이브러리 관리 설명"
layout: post
categories: ["Python"]
published: true
date: 2025-04-19
last_modified_at: 2025-04-19
tags: [python, pip, upgrade, uninstall, install, library]
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
파이썬을 개발환경의 최적화를 위해 라이브러리 관리가 필요할 때가 있다.<br>
이는 설치되어있는 라이브러리를 `이동, 정리, 항목 재설치, 업그레이드 등` 여러 상황에 꼭 필요한 관리 방법이다.<br>
<br>

### 1. pip list
현재 환경에 설치되어있는 라이브러리들을 모두 표시를 해줌<br>
<br>
![python-pip-1](/assets/img/2025-04-19-python-pip-1.png)<br>
<br>

### 2. pip freeze > list.txt
현재 환경에 설치되어있는 라이브러리들을 모두 list.txt 이름의 파일로 저장해줌<br>
<br>
![python-pip-2](/assets/img/2025-04-19-python-pip-2.png)<br>

<div class = 'image-gallery'>
    <img src ='/assets/img/2025-04-19-python-pip-3.png' alt='python-pip-3'>
    <img src ='/assets/img/2025-04-19-python-pip-4.png' alt='python-pip-4'>
</div><br>
<br>

### 3. pip install -r list.txt
현재 환경에 list.txt 안에 포함된 라이브러리를 모두 설치함.<br>
<br>

### 4. pip install -r list.txt --upgrade
현재 환경에 list.txt 안에 포함된 라이브러리를 모두 업그레이드함.<br>
<br>

### 5. pip uninstall -r list.txt -y
현재 환경에 list.txt 안에 포함된 라이브러리를 모두 삭제함.<br>
<br>