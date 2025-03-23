---
title: 맥북 설정 백그라운드 어플 관리
description: MacBook 백그라운드 어플 관리
layout: post
categories: Mac
published: true
date_published: 2025-03-14
date_modified: 2025-03-14
tags: [mac, background]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 #
    나머지 큰 제목은 ##
    이후 나머지는 3개이상 -->

# 맥북 백그라운드 알림 관리

## 0. 개요
일반적으로 배터리 관리를 위해 `Aldente`, `Batfi` 등의 소프트웨어가 사용되지만, 다음과 같은 단점이 있음.

- `Aldente`와 `Batfi`는 상단 메뉴바에 아이콘을 표시하여 작업 환경을 방해할 수 있음.
- `Batfi`는 초기에는 무료였으나 이후 유료로 전환됨.

대체할 수 있는 오픈소스 프로그램을 찾던 중, `actuallymentor/battery` 프로젝트를 발견.

<br>

## 1. 설치 방법
해당 오픈소스 도구는 [GitHub 페이지](https://github.com/actuallymentor/battery)에서 다운로드 진행.<br>
설치 방법은 두가지가 있고, 본인이 편한방법으로 진행하면됨.<br>
<br>

### 1.1 GUI(그래픽 인터페이스) 버전 설치
1. GitHub 페이지에서 `Releases` 섹션으로 이동하여 최신 버전의 `.dmg` 파일을 다운로드.
2. 다운로드한 파일을 실행하여 설치를 진행.
![img](/assets/img/2025-03-14-mac-battery-limiter-1.png)
3. 설치 완료 후, 상단 메뉴바에서 프로그램을 실행하고 `Enable or Disable` 설정

<br>

### 1.2 CLI(터미널 기반) 버전 설치