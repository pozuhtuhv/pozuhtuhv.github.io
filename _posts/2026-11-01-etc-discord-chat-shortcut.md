---
title: "디스코드 채팅 백업하기 최적화"
description: "디스코드 채팅 백업하기 최적화"
layout: post
categories: ["ETC"]
published: true
date: 2026-11-01
last_modified_at: 2026-11-01
tags: [etc, discord, chat, backup, shortcut]
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
<a href="/etc/2026/10/21/etc-discord-chat/">이전 글(디스코드 채팅 백업하기) →</a> 을 쉽게 쓰기 위해 다시 정리한 글<br>
`터미널`에서 명령어 실행 사양은 `맥북 M1` 기준으로 작성됨.

### 1. 왜 다시 작성했나
이전 글의 방법은 채팅을 백업할 때마다 아래 과정이 필요했음.

- 터미널을 켤 때마다 설치 폴더로 `cd` 이동
- 매번 긴 명령어에 토큰을 직접 붙여넣기
- 저장 폴더가 없으면 `mkdir`로 다시 만들기

이번 글은 이 과정을 한 번만 세팅해두고, 이후에는 아래 한 줄로 끝내는 방법임.

```bash
dce 채널ID
```

### 2. 사전 준비
Homebrew와 .NET 런타임이 필요함. 이미 설치되어 있다면 건너뛰기.<br>
<a href="/etc/2026/10/21/etc-homebrew-install/">Homebrew 설치하기 →</a>

```bash
brew install --cask dotnet-sdk
dotnet --list-runtimes
```

### 3. DiscordChatExporter CLI 설치
이전 글을 따라 `~/dce`에 이미 설치했다면 이 단계는 건너뛰기.

https://github.com/Tyrrrz/DiscordChatExporter/releases/latest 접속<br>
Assets 에서 DiscordChatExporter.Cli 중에 osx-arm64 가 붙어있는 파일로 다운로드

```bash
# 1. 설치할 폴더 만들기
mkdir -p ~/dce

# 2. zip을 그 폴더에 풀기
unzip ~/Downloads/DiscordChatExporter.Cli.osx-arm64.zip -d ~/dce

# ※※ 권한이 막히면 진행 ※※
chmod +x ~/dce/DiscordChatExporter.Cli
xattr -dr com.apple.quarantine ~/dce

# 3. 실행 확인
~/dce/DiscordChatExporter.Cli --help
```

### 4. 토큰 가져와서 파일로 저장
#### 토큰 복사
discord.com/app 페이지에서 `개발자도구 -> 네트워크` 탭에서<br>
DM을 드나들다 보면 `science` 항목이 계속 뜰텐데, 요청 부분에 `Authorization` 값을 복사

#### 토큰을 별도 파일로 저장
토큰을 명령어나 설정 파일에 직접 쓰지 않고, 별도 파일에 보관하는 것이 이번 방법의 핵심임.

```bash
echo 'DISCORD_TOKEN="여기에_토큰_붙여넣기"' > ~/.dce_token
chmod 600 ~/.dce_token
```

- `chmod 600` : 내 계정만 읽을 수 있도록 권한 제한
- 토큰은 계정 비밀번호와 같은 권한이므로 블로그나 채팅에 절대 노출하지 않기

### 5. dce 단축 명령 등록
`~/.zshrc`에 `dce` 함수를 추가함. 아래 명령어를 통째로 붙여넣기.

```bash
# 실행 전 백업 (선택)
cp ~/.zshrc ~/.zshrc.bak

cat >> ~/.zshrc << 'EOF'

# DiscordChatExporter 단축 명령
dce() {
  if [ -z "$1" ]; then
    echo "사용법: dce 채널ID [추가옵션]"
    return 1
  fi

  source ~/.dce_token

  local CH="$1"
  shift

  ~/dce/DiscordChatExporter.Cli export \
    -t "$DISCORD_TOKEN" \
    -c "$CH" \
    -o ~/Desktop/discord_export/%c/$(date +%Y%m%d_%H%M%S).html \
    "$@"
}
EOF
```

#### 적용 및 확인
```bash
source ~/.zshrc
type dce
grep -c "^dce()" ~/.zshrc
```

- `type dce` 결과에 `dce is a shell function` 이 나오면 정상
- `grep -c` 결과가 `1` 이면 중복 없이 한 번만 등록된 것

### 6. 채널ID 가져오기
디스코드 웹(discord.com/app)에서 백업하려는 DM을 클릭하면 주소에서 `@me/` 뒤에 나오는 숫자들만 복사

### 7. 채팅 빼오기
```bash
dce 채널ID
```

실행하면 바탕화면 `discord_export/채널ID/` 폴더에 `날짜_시간.html` 파일로 저장됨.<br>
파일명에 실행 시각이 들어가므로 여러 번 백업해도 덮어씌워지지 않음.

#### 추가 옵션
채널ID 뒤에 옵션을 그대로 붙이면 DiscordChatExporter에 전달됨.

```bash
dce 채널ID -f HtmlDark            # 다크 테마 HTML
dce 채널ID --after 2026-01-01     # 특정 날짜 이후 채팅만
dce 채널ID --media                # 첨부 이미지/파일도 같이 저장
```

### 8. 자주 겪는 문제
#### 설치 폴더 위치를 바꾸고 싶은 경우
폴더 이동과 함수 안의 경로 수정을 `같이` 해야 함. 둘 중 하나만 하면 `dce`가 실행 파일을 찾지 못함.

#### 401 Unauthorized 오류
토큰이 만료되었거나 비밀번호를 바꾼 경우임. 4번 과정으로 새 토큰을 받아 `~/.dce_token`에 덮어쓰면 됨. `~/.zshrc`는 다시 `source`하지 않아도 됨.

#### 토큰이 제대로 저장되었는지 확인
토큰 전체를 화면에 출력하지 않고 앞 5글자만 확인하기.

```bash
source ~/.dce_token && echo "${DISCORD_TOKEN:0:5}..."
```