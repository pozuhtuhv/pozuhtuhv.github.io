---
title: "Mac 터미널 히스토리 삭제"
description: "Mac 터미널 히스토리 삭제 방법 설명"
layout: post
categories: ["Mac"]
published: true
date: 2025-04-16
last_modified_at: 2025-04-16
tags: [mac, terminal, zsh, history]
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
Mac 에서 터미널을 사용하다보면 기록이 남는데<br>
이게 다른환경과 달리 껐다가 켜도 기록이 그대로 남아있다는점이 많이 신경쓰이게 됩니다.<br>
이 글은 히스토리를 제거하기 위한 방법을 설명합니다.<br>
<br>

### 1. 터미널 환경 확인
{% include image-path.html cols=1 start=1 end=1 %}

터미널을 실행시켜보면 상태창에 본인의 터미널 환경이 표시되는데 이부분의 확인이 필요함.<br>
`macOS`는 `Catalina(10.15)` 부터 기본 쉘을 `bash` → `zsh`로 변경되었습니다.<br>
<br>

### 2. 기록방식

{% include image-path.html cols=1 start=2 end=3 %}

기록 방식이 사용자의 `홈` 폴더에 `.zsh_history` 파일로 저장됩니다.<br>
직접 `Finder`를 통해 경로를 찾아가 삭제를 해도 되고 터미널을 이용하여 삭제를 해도 됩니다.<br>
`Shift + cmd + .`를 통해 숨김파일 확인가능.<br> 
<br>

### 3. 명령어 실행
`rm -rf .zsh_history` 명령어를 실행하고 터미널을 재실행하면 이전에 있는 기록들이 다 삭제 됩니다.<br>

{% include image-path.html cols=1 start=4 end=4 %}