---
title: "Github 워크플로우 권한 세팅"
description: "Github 액션 워크플로우 권한 세팅 설명"
layout: post
categories: ["Git"]
published : true
date: 2024-08-22
last_modified_at: 2024-08-22
tag: [github, actions]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## Github Actions Workflow Permission

### 1. 권한 설정 하기

- Settings 페이지

![github-workflow-permissions-1](/assets/img/2024-08-22-git-github-workflow-permissions-1.png)<br>

- Actions 탭 -> General 메뉴

![github-workflow-permissions-2](/assets/img/2024-08-22-git-github-workflow-permissions-2.png)<br>

- Workflow Permissions

![github-workflow-permissions-3](/assets/img/2024-08-22-git-github-workflow-permissions-3.png)<br>

```
Read and write permissions: 
워크플로우가 레포지토리의 모든 범위에서 읽기 및 쓰기 권한을 가지도록 설정.

Read repository contents and packages permissions: 
워크플로우가 레포지토리의 콘텐츠 및 패키지 범위에 대해서만 읽기 권한을 가지도록 설정.
```