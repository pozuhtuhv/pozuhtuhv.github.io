---
title: "디스코드 채팅 백업하기"
description: "디스코드 채팅 백업하기"
layout: post
categories: ["ETC"]
published: true
date: 2026-10-21
last_modified_at: 2026-11-01
tags: [etc, discord, chat, backup]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 
    bundle exec jekyll serve
    1. 글의 제목은 ## / 큰 제목은 ### / 나머지는 3개이상
    2. 이미지 작성법 
        - 이미지 저장할 경로는 '/assets/img/'
        - 저장할 이미지명은 '[확장자를 제외한 포스트 파일명]-[숫자].webp'
        - 이미지 다음에 공백(줄바꿈)이 되어있으니, 이미지 셋팅 코드 뒤에는 <br> 추가 안해도됨.
        -'{% include image-path.html cols=1 start=1 end=1 %}' 
            ㄴ cols -> 사진 열 / start -> 이미지 순서 시작 / end -> 이미지 순서 끝
            ㄴ ex ) cols=2 start=1 end=4 -> 두개의 이미지 열로 1번째 이미지부터 4번째 이미지까지 표시 (행은 자동계산) 
    3. 글 서식 
        - ` ` 사이에 단어 강조
    -->

### 0. 적용사양
디스코드 채팅을 이용하면서 채팅백업이 필요해서 작성하는 글<br>
`터미널`에서 명령어 실행 사양은 `맥북 M1` 기준으로 작성됨.

### 1. Homebrew 설치
<a href="/etc/2026/10/21/etc-homebrew-install/">Homebrew 설치하기 →</a>

### 2. .NET 런타임 설치
```bash
brew install --cask dotnet-sdk
```

설치 후 터미널에서 확인
```bash
dotnet --list-runtimes
```

### 3. DiscordChatExporter CLI 다운로드
https://github.com/Tyrrrz/DiscordChatExporter/releases/latest 접속<br>
Assets 에서 DiscordChatExporter.Cli 중에 osx-arm64 가 붙어있는 파일로 다운로드

### 4. 설치를 위한 터미널 세팅
```bash
# 1. 메인 경로에 폴더 만들기
mkdir -p ~/dce

# 2. zip을 그 폴더에 풀기
unzip ~/Downloads/DiscordChatExporter.Cli.osx-arm64.zip -d ~/dce

# ※※ 권한이 막히면 진행 ※※
chmod +x ~/dce/DiscordChatExporter.Cli
xattr -dr com.apple.quarantine ~/dce

# 3. 실행 확인
cd ~/dce
./DiscordChatExporter.Cli --help
```

### 5. 토큰 및 채널ID 가져오기
#### 토큰
discord.com/app 페이지에서 `개발자도구 -> 네트워크` 탭에서<br>
DM을 드나들다 보면 `science` 항목이 계속 뜰텐데, 요청 부분에 `Authorization` 값을 따로 복사

※ 토큰은 계정 비밀번호와 같은 권한이므로 다른 사람에게 절대 공유하지 않기

#### 채널ID
보려고 하는 DM을 클릭하면 주소에서 `@me/` 뒤에 나오는 숫자들만 복사

### 6. 채팅 빼오기
일단 나는 DM 기준으로 가져올거라서 DM 기준으로 작성
```bash
cd ~/dce # 터미널 재시동시 해당 기능이 설치되어있는 폴더로 이동
mkdir -p ~/Desktop/discord_export # 폴더가 없을수도 있으니 다시 폴더 만들기
./DiscordChatExporter.Cli export -t "토큰" -c 채널ID -o ~/Desktop/discord_export
```
실행하면 바탕화면에 `discord_export` 폴더에 html 형식으로 저장 진행됨

### 7. 더 쉽게 쓰고 싶다면
위 방법은 백업할 때마다 폴더 이동과 토큰 입력이 필요해서 조금 번거로움.<br>
`dce 채널ID` 한 줄로 끝내는 방법은 아래 글에서 정리함.<br>
<a href="/etc/2026/11/01/etc-discord-chat-easy/">디스코드 채팅 백업하기 (명령어 한 줄 버전) →</a>
