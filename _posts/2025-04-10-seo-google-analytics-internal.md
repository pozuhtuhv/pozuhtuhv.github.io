---
title: "구글 애널리틱스 GA4 내부아이피 필터 세팅"
description: "구글 애널리틱스 GA4 내부아이피 필터 세팅 방법 설명"
layout: post
categories: ["SEO"]
published: true
date: 2025-04-14
last_modified_at: 2025-04-14
tags: [google, google, analytics, internalip]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## 구글 애널리틱스의 내부아이피 필터

### 0. 개요
애널리틱스의 데이터 정확성을 위해서는 내부아이피의 필터링을 지정해줘야한다.
<br>

### 1. 아이피 확인
우선 아이피를 필터링을 하기 위해서는 본인 인터넷 환경의 퍼블릭 아이피를 확인 해야함.<br>
```bash
Windows
CMD(명령프롬프트) -> curl ipinfo.io/ip
macOS
Terminal(터미널) -> curl ipinfo.io/ip
```
![seo-google-analytics-internal-1](/assets/img/2025-04-14-seo-google-analytics-internal-1.png)
<br>

### 2. 아이피 필터링 설정하기

1. 관리 -> 데이터 스트림
![seo-google-analytics-internal-2](/assets/img/2025-04-14-seo-google-analytics-internal-2.png)
2. 설정할 스트림 선택
![seo-google-analytics-internal-3](/assets/img/2025-04-14-seo-google-analytics-internal-3.png)
3. 태그 설정 구성
![seo-google-analytics-internal-4](/assets/img/2025-04-14-seo-google-analytics-internal-4.png)
4. 내부 트래픽 정의
![seo-google-analytics-internal-5](/assets/img/2025-04-14-seo-google-analytics-internal-5.png)
5. 구성 아이피 설정하기
![seo-google-analytics-internal-6](/assets/img/2025-04-14-seo-google-analytics-internal-6.png)
- 규칙이름 (예시: 내부아이피, 인터널 아이피, 집 주소 등등)
- traffic_type 값: internal
- ip 주소 (검색 유형) - 특정 집단 인터넷을 따로 쓰지 않는 이상 (IP 주소가 다음과 같음) 으로 설정
- 값: [아이피주소 확인](/2025/04/14/seo-google-analytics-internal#1-아이피-확인)에서 진행했던 아이피 입력
6. 설정이 만들어졌는지 확인
![seo-google-analytics-internal-7](/assets/img/2025-04-14-seo-google-analytics-internal-7.png)
7. 관리 -> 데이터 필터
![seo-google-analytics-internal-8](/assets/img/2025-04-14-seo-google-analytics-internal-8.png)
8. 기본적으로 만들어진 필터 클릭
![seo-google-analytics-internal-9](/assets/img/2025-04-14-seo-google-analytics-internal-9.png)
9. 필터 상태 -> '사용중' 으로 변경
![seo-google-analytics-internal-10](/assets/img/2025-04-14-seo-google-analytics-internal-10.png)
10. 저장 -> 필터 활성화
![seo-google-analytics-internal-11](/assets/img/2025-04-14-seo-google-analytics-internal-11.png)