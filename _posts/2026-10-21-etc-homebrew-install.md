---
title: "Homebrew 설치하기"
description: "Homebrew 설치하기"
layout: post
categories: ["ETC"]
published: true
date: 2026-10-21
last_modified_at: 2026-10-21
tags: [etc, mac, homebrew]
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

### 0. 적용사양 및 Note
Homebrew 설치하는 방법을 작성하는 글<br>
```터미널``` 실행하고 과정에 나오는 명령어 실행<br>
<br>
설치 과정이 서버에서 파일을 받아오기 때문에 10~20분 정도 소요됨 참고 바람

### 1. Xcode 명령줄 도구 설치
Homebrew 설치 중 자동으로 안내하지만, 미리 설치해도 상관없음
```bash
xcode-select --install
```

### 2. Homebrew 설치
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
중간에 맥 로그인 비밀번호 물어보는데, 그대로 치고 엔터 누르면됨
설치 도중 “Press RETURN to continue”가 나오면 엔터 한 번 더

### 3. PATH 설정
```bash
echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 4. 설치확인
```bash
which brew
brew --version
brew doctor
```

### 5. 기본 사용법
```bash
brew install wget                  # 패키지 설치
brew install --cask google-chrome  # GUI 앱 설치
brew search 이름                    # 검색
brew list                          # 설치 목록
brew update                        # Homebrew 자체 업데이트
brew upgrade                       # 설치된 패키지 업그레이드
brew uninstall wget                # 삭제
```