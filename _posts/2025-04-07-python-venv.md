---
title: "venv 가상환경 세팅"
description: "가상환경 세팅"
layout: post
categories: ["Python"]
published: true
date: 2025-04-07
last_modified_at: 2025-04-07
tags: [python, venv]
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
개발을 진행하면서 프로젝트마다 폴더정리 및 라이브러리 정리를 잘 못하게 되는데,<br>
꼭 필요한게 가상환경 세팅이다.<br>
이 글을 가상환경에 대한 세팅을 소개하는 글이다.<br>
<br>

### 1. 세팅
처음 진행할꺼는 바탕화면에 지정할 새로운 폴더 만들어놓기<br>
터미널 켜서 명령어 실행하기<br>
<br>
```cmd
cd Desktop
python3 -m venv [지정한 폴더이름]
```
<br>
<div class="image-gallery cols-2">
    <img src ='/assets/img/2025-04-07-python-venv-1.webp' alt='venv-1'>
    <img src ='/assets/img/2025-04-07-python-venv-2.webp' alt='venv-2'>
</div>
<br>
위 터미널을 실행하면 이미지와 같이 폴더들이 생겨있는걸 알수 있다.<br>
이상태에서 vscode로 폴더 열면 정상적으로 프로젝트 분리하여 실행가능<br>
<br>

### 2. 활성화 확인
![python-venv-3](/assets/img/2025-04-07-python-venv-3.webp)<br>
VSCode 로 해당폴더 열고, `.py` 확장자 하나 만들어 편집열기<br>
VSCode 내의 터미널을 열어보면 터미널 커맨드 라인의 앞에 `(폴더이름)` 형식으로 폴더 이름으로 가상환경 이름이 붙음<br>
<br>