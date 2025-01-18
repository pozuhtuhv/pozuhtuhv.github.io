---
title: Github 레포 업로드
description: 깃허브 레포 업로드 방법 설명
layout: post
categories: ETC
published : true
date_published: 2024-05-08
date_modified: 2024-12-23
tag: [github, upload]
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

# Git Bash -> Repo upload

## 1. Github에 NEW 리포지토리 git repo url 확인
![docs](/assets/img/git-3.1.png)<br>
git repo url copy
<br>

## 2. Git Bash로 업로드할 폴더 설정
폴더에서 마우스 우측 -> 'Open Git Bash here'
<br>

## 3. Git Bash 명령어 하나씩 수행
```bash
git init
git branch -m main
git remote add origin "git ropo url"
git add .
git commit -m "commit 내용"
git push -u origin main
```
<br>
`다른 오류 없이 편하게 업로드 가능`