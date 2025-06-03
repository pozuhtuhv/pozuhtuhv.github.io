---
title: "Mac 네트워크 서비스 순서 변경"
description: "Mac 네트워크 서비스 순서 변경 방법 설명"
layout: post
categories: ["Mac"]
published: true
date: 2025-06-03
last_modified_at: 2025-06-03
tags: [mac, network, service]
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
Mac 에서 네트워크 사용중에 WiFi 와 LAN 연결 사용중 어느 서비스가 우선순위로 사용되는지 설정하는 방법을 성명<br>
<br>

### 1. 경우
일반적으로 제일 편하게 사용하기 쉬운 상태는 WiFi 상태이지만,<br> 
좀 더 안정적인 인터넷 연결을 위해서라면 LAN 환경에서 사용하는게 낫다.<br>
{% include image-path.html cols=1 start=1 end=1 %}
- 현재 사용중인 C-Type 랜 허브
<br>

### 2. 설정
{% include image-path.html cols=1 start=2 end=2 %}
1. 설정 -> 네트워크 -> ... 메뉴 클릭

{% include image-path.html cols=1 start=3 end=3 %}

2. 서비스 순서 설정
{% include image-path.html cols=1 start=4 end=4 %}

3. 원하는 네트워크 순서 드래그로 옮긴 후 확인

### 3. 결과
굳이 이렇게 하는 이유는 여러 사용환경이 있기 때문이다.<br>
게임, 서버와 같은 환경에서는 정확하고 빠른 데이터 통신이 필요하기에 이런 설정이 필요하다.<br>
누구는 Mac 에서 게임, 서버가 좋은 선택은 아니라고 하지만, 테스트 환경이나, 잠깐의 사용으로 필요하다면, 크게 문제 없을듯하다.<br>