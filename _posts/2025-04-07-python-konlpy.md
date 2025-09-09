---
title: "Konlpy 설치 및 예시"
description: "Konlpy 튜토리얼"
layout: post
categories: ["Python"]
published: true
date: 2025-04-07
last_modified_at: 2025-04-07
tags: [python, konlpy, 형태소]
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
한글에 대한 분석에 필요한 Python에서 제일 잘 알려진 Konlpy.<br>
이 글은 기본적인 Konlpy 사용방법을 소개하는 글이다.<br>
<br>

### 1. 세팅
Konlpy을 사용하기 위해서는 JAVA 설치가 필요함.<br>
Hombrew 를 통해 설치<br>
<br>
Mac 환경
```
1. brew install openjdk
2. 환경변수 설정
echo 'export JAVA_HOME="/opt/homebrew/opt/openjdk"' >> ~/.zshrc
echo 'export PATH="$JAVA_HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
java -version
```
<br>

### 2. 예시 테스트

```python
from konlpy.tag import Okt

okt = Okt()
text = "형태소 분석을 시작합니다."
morphs = okt.morphs(text)           # 형태소 추출
pos = okt.pos(text)                 # 품사 태깅
nouns = okt.nouns(text)            # 명사만 추출

print("형태소:", morphs)
print("품사 태깅:", pos)
print("명사:", nouns)

예시결과 :
형태소: ['형태소', '분석', '을', '시작', '합니다', '.']
품사 태깅: [('형태소', 'Noun'), ('분석', 'Noun'), ('을', 'Josa'), ('시작', 'Noun'), ('합니다', 'Verb'), ('.', 'Punctuation')]
명사: ['형태소', '분석', '시작']

```
<br>

### 3. 감정분석 테스트
data.csv (예시데이터)
```csv
id,text
1,오늘 날씨가 정말 좋다
2,기분이 너무 우울해요
3,이 영화는 재미있고 신나요
4,스트레스 때문에 너무 힘들어요
```
<br>
예시 테스트
```python
import pandas as pd
from konlpy.tag import Okt

# 감정 단어 사전
positive_words = ["좋다", "행복", "기쁘다", "즐겁다", "사랑", "감사", "신나다", "재미있다", "신나요"]
negative_words = ["싫다", "우울", "화나다", "짜증", "슬프다", "불행", "힘들다", "스트레스"]

# 형태소 분석기
okt = Okt()

# CSV 불러오기
df = pd.read_csv("data.csv")

# 감정 분석 함수
def analyze_sentiment(text):
    tokens = okt.morphs(str(text))
    pos_count = sum(1 for token in tokens if token in positive_words)
    neg_count = sum(1 for token in tokens if token in negative_words)
    
    if pos_count > neg_count:
        return "긍정"
    elif neg_count > pos_count:
        return "부정"
    else:
        return "중립"

# 분석 적용
df["감정"] = df["text"].apply(analyze_sentiment)

print(df)

예시결과:
   id                       text   감정
0   1       오늘 날씨가 정말 좋다    긍정
1   2       기분이 너무 우울해요    부정
2   3   이 영화는 재미있고 신나요    긍정
3   4  스트레스 때문에 너무 힘들어요   부정
```

<br>
<br>