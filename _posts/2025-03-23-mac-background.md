---
title: "맥북 설정 백그라운드 어플 관리"
description: "MacBook 백그라운드 어플 관리"
layout: post
categories: ["Mac"]
published: true
date: 2025-03-23
last_modified_at: 2025-03-23
tags: [mac, background]
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
여러 앱을 설치하다보면 백그라운드 권한을 가지는 앱들은<br>
부팅시 알림이 뜨는데 이게 생각보다 많이 지저분하다.<br>
설정 창에서 보여지는것도 꽤나 필요 없는게 많기 때문에 정리가 필요하다.<br>
<br>

### 1. 설정창 확인 방법
{% include image-path.html cols=2 start=1 end=2 %}

<br>

### 2. 직접 경로 확인

| No. | 명령어 | 용도 | 비고 |
| --- | --- | -- | -- |
| 1 | open ~/Library/LaunchAgents | 부팅시 root 권한이 필요한 앱이나 스트립트의 경로 | - |
| 2 | open /Library/LaunchAgents | 일반 사용자 권한의 앱이나 스트립트의 경로 | - |
| 3 | open /Library/LaunchDaemons | 일반 사용자 권한의 앱이나 스트립트의 경로 | - |

1. ⌘ + space(spotlight) -> Terminal 열기
2. 위 3개의 명령어 중 하나를 한단계씩 진행.
3. 명령어를 진행하면 Finder 앱이 해당 경로에 열릴텐데 .plist 의 확장자로 파일들이 있음.
4. 정리하고싶은 앱 이름 스크립트를 잘보고 필요없는것들, 삭제할것만 삭제하기
5. 재부팅
<br>
<br>