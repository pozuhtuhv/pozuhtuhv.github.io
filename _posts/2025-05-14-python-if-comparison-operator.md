---
title: "문자열 갯수 변환"
description: "문자열 갯수 변환 설명"
layout: post
categories: ["Python"]
published: true
date: 2025-05-14
last_modified_at: 2025-05-14
tags: [python, len]
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
단순 문자열의 갯수를 계산할때 사용하는 함수 `len()`<br>
국문이던 숫자던 글자의 갯수를 출력한다<br>
len는 find와 다르게 0이 아닌 1부터 셈을하기에 헷갈리지 말자<br>
또 다른 특징은 띄어쓰기(공백)도 셈을 한다.<br>
<br>

### 1. 예시
```python
word = "test"
print(len(word))

# 결과값 :
4
```