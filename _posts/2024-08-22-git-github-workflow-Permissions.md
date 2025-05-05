---
title: "Github 워크플로우 권한 세팅"
description: "Github 액션 워크플로우 권한 세팅 설명"
layout: post
categories: ["Git"]
published : true
date: 2024-08-22
last_modified_at: 2024-08-22
tag: [github, workflow, actions]
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

### 1. 권한 설정 하기

- Settings 페이지

{% include image-path.html cols=1 start=1 end=1 %}

- Actions 탭 -> General 메뉴

{% include image-path.html cols=1 start=2 end=2 %}

- Workflow Permissions

{% include image-path.html cols=1 start=3 end=3 %}

```
Read and write permissions: 
워크플로우가 레포지토리의 모든 범위에서 읽기 및 쓰기 권한을 가지도록 설정.

Read repository contents and packages permissions: 
워크플로우가 레포지토리의 콘텐츠 및 패키지 범위에 대해서만 읽기 권한을 가지도록 설정.
```
<br>
<br>