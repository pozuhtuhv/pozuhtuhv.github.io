---
title: Git 푸시 전 마지막 커밋 메시지 수정
description: 마지막 커밋 메시지 수정
layout: post
categories: Git
published : true
date_published: 2025-01-12
date_modified: 2025-01-12
tag: [git, comment]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 #
    나머지 큰 제목은 ##
    이후 나머지는 3개이상 -->

# Git 푸시 전 마지막 커밋 메시지 수정

## 1. 마지막 커밋 메시지 수정
```bash
git commit --amend
```
편집기가 열리고, 커밋 내용을 수정할 수 있다.<br>
수정 후 종료하면 메시지가 변경된다.
<br>

## 2 . 변경사항 푸시
```bash
git push --force
```
편집기를 사용한다면, 그대로 푸시해도 됨.