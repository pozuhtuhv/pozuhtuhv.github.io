---
title: "맥북에어 M1 배터리 관리"
description: "MacBook Air M1의 배터리 충전 제한 설정 및 최적화된 관리 방법"
layout: post
categories: ["Mac"]
published: true
date: 2025-03-14
last_modified_at: 2025-03-14
tags: [mac, battery, power management]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

### 0. 개요
일반적으로 배터리 관리를 위해 `Aldente`, `Batfi` 등의 소프트웨어가 사용되지만, 다음과 같은 단점이 있음.

- `Aldente`와 `Batfi`는 상단 메뉴바에 아이콘을 표시하여 작업 환경을 방해할 수 있음.
- `Batfi`는 초기에는 무료였으나 이후 유료로 전환됨.

대체할 수 있는 오픈소스 프로그램을 찾던 중, `actuallymentor/battery` 프로젝트를 발견.<br>
<br>

### 1. 설치 방법
해당 오픈소스 도구는 [GitHub 페이지](https://github.com/actuallymentor/battery)에서 다운로드 진행.<br>
설치 방법은 두가지가 있고, 본인이 편한방법으로 진행하면됨.<br>
<br>

#### 1.1 GUI(그래픽 인터페이스) 버전 설치
1. GitHub 페이지에서 `Releases` 섹션으로 이동하여 최신 버전의 `.dmg` 파일을 다운로드.
2. 다운로드한 파일을 실행하여 설치를 진행.
{% include image-path.html cols=1 start=1 end=1 %}

3. 설치 완료 후, 상단 메뉴바에서 프로그램을 실행하고 `Enable or Disable` 설정<br>
<br>

#### 1.2 CLI(터미널 기반) 버전 설치
1. `Spotlight(⌘ + Space)`를 사용하여 터미널을 실행.
2. 다음 명령어를 입력하여 설치를 진행.

   ```sh
   curl -s https://raw.githubusercontent.com/actuallymentor/battery/main/setup.sh | bash
   ```
<br>

3. 경우에 따라 설치 중 사용자 계정의 비밀번호 입력이 필요
4. 설치 완료 후, 다음 명령어를 입력하여 충전 제한을 설정

```sh
battery maintain 80
```
<br>

### 2. 참고
결국 설치는 둘다 진행됨 
- CLI로 설치 했을경우 런치패드에 배터리가 있을텐데 굳이 실행 필요없음
- GUI로 설치 했을경우 런치패드에 배터리를 실행하고 상단 메뉴바에서 설정 진행가능
<br>
<br>

### 3. 주의 사항
- 이 도구는 Apple 실리콘(M1, M2 등) 기반의 Mac에서만 동작하며, Intel 기반 Mac에서는 사용할 수 없음.
- 시스템 설정에서 `최적화된 배터리 충전` 기능을 비활성화해야 올바르게 작동.
<br>
<br>