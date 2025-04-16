---
title: "Mac 환경 Homebrew 터미널 세팅"
description: "Mac 환경 터미널 세팅"
layout: post
categories: ["Mac"]
published: true
date: 2025-04-07
last_modified_at: 2025-04-07
tags: [mac, homebrew]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## Mac 환경의 Brew 설치 및 세팅

### 0. 개요
Mac을 통해 개발을 진행한다거나, 새로운 어플을 설치하기 위해서는 예외적으로 Homebrew 가 필요할때가 있다.<br>
명령어 하나로 다양한 소프트웨어를 설치, 관리, 삭제를 할 수 있기에 거의 필수 명령어라고 봐도 된다.<br>
<br>

### 1. Xcode Command Line Tools 설치
해당 도구는 MacOS에서 터미널에서 개발 작업에 필요한 기본 필수 도구이다.<br>
GUI 가 없고 CLI 전용으로 설치되기에 큰 영역을 차지하지 않는다.<br>
구성으로는 C/C++ 컴파일러, git 등 여러 도구를 사용할 수 있다.<br>
```cmd
xcode-select --install
```
<br>

### 2. Homebrew 설치
```cmd
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
<br>
설치 완료 후
Intel Mac :
```cmd
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/usr/local/bin/brew shellenv)"
```
<br>
Apple Silicon (M1/M2/M3 등) :
```cmd
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```
<br>


### 3. 설치 확인
```cmd
brew --version
```
<br>
<br>