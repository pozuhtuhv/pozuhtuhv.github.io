---
title: "애플스크립트 키코드 목록"
description: "애플스크립트 키코드 목록"
layout: post
categories: ["Coding"]
published: true
date: 2026-05-11
last_modified_at: 2026-05-11
tags: [coding, applescript, keycode]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 
    1. 글의 제목은 ## / 큰 제목은 ### / 나머지는 3개이상
    2. 이미지 작성법 
        - 이미지 저장할 경로는 '/assets/img/'
        - 저장할 이미지명은 '[확장자를 제외한 포스트 파일명]-[숫자].webp'
        - 이미지 다음에 공백(줄바꿈)이 되어있으니, 이미지 셋팅 코드 뒤에는 <br> 추가 안해도됨.
        -'{% include image-path.html cols=1 start=1 end=1 %}' 
            ㄴ cols -> 사진 열 / start -> 이미지 순서 시작 / end -> 이미지 순서 끝
            ㄴ ex ) cols=2 start=1 end=4 -> 두개의 이미지 열로 1번째 이미지부터 4번째 이미지까지 표시 (행은 자동계산) 

    -->

### 0. 영문

| 키 | 코드 | 키 | 코드 |
|-----|-----|-----|-----|
| A | 0 | B | 11 |
| C | 8 | D | 2 |
| E | 14 | F | 3 |
| G | 5 | H | 4 |
| I | 34 | J | 38 |
| K | 40 | L | 37 |
| M | 46 | N | 45 |
| O | 31 | P | 35 |
| Q | 12 | R | 15 |
| S | 1 | T | 17 |
| U | 32 | V | 9 |
| W | 13 | X | 7 |
| Y | 16 | Z | 6 |

### 숫자

| 키 | 코드 |
|-----|-----|
| 1 | 18 |
| 2 | 19 |
| 3 | 20 |
| 4 | 21 |
| 5 | 23 |
| 6 | 22 |
| 7 | 26 |
| 8 | 28 |
| 9 | 25 |
| 0 | 29 |

### 기호

| 키 | 코드 |
|-----|-----|
| = | 24 |
| - | 27 |
| [ | 33 |
| ] | 30 |
| ; | 41 |
| ' | 39 |
| , | 43 |
| . | 47 |
| / | 44 |
| \ | 42 |
| ` | 50 |

### 입력키

| 키 | 코드 |
|-----|-----|
| Return (Enter) | 36 |
| Tab | 48 |
| Space | 49 |
| Delete (Backspace) | 51 |
| Escape | 53 |
| Forward Delete | 117 |

### 기타

| 키 | 코드 |
|-----|-----|
| Command | 55 |
| Shift | 56 |
| Caps Lock | 57 |
| Option | 58 |
| Control | 59 |
| Right Shift | 60 |
| Right Option | 61 |
| Right Control | 62 |
| ← Left Arrow | 123 |
| → Right Arrow | 124 |
| ↓ Down Arrow | 125 |
| ↑ Up Arrow | 126 |
| Home | 115 |
| Page Up | 116 |
| Delete Forward | 117 |
| End | 119 |
| Page Down | 121 |
| F1 | 122 |
| F2 | 120 |
| F3 | 99 |
| F4 | 118 |
| F5 | 96 |
| F6 | 97 |
| F7 | 98 |
| F8 | 100 |
| F9 | 101 |
| F10 | 109 |
| F11 | 103 |
| F12 | 111 |
| F13 | 105 |
| F14 | 107 |
| F15 | 113 |
| F16 | 106 |
| F17 | 64 |
| F18 | 79 |
| F19 | 80 |
| F20 | 90 |
| Keypad 0 | 82 |
| Keypad 1 | 83 |
| Keypad 2 | 84 |
| Keypad 3 | 85 |
| Keypad 4 | 86 |
| Keypad 5 | 87 |
| Keypad 6 | 88 |
| Keypad 7 | 89 |
| Keypad 8 | 91 |
| Keypad 9 | 92 |
| Keypad . | 65 |
| Keypad * | 67 |
| Keypad + | 69 |
| Keypad / | 75 |
| Keypad Enter | 76 |
| Keypad - | 78 |
| Keypad = | 81 |

### 키코드 사용 예시

{% include image-path.html cols=1 start=1 end=1 %}

```
tell application "System Events"
    key code 0 using {command down} -- Cmd + A
end tell
```