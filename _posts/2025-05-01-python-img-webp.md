---
title: "이미지의 .webp 변환"
description: ".webp 변환에 대한 소개글"
layout: post
categories: ["Python"]
published: false
date: 2025-05-01
last_modified_at: 2025-05-01
tags: [python, venv]
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
블로그의 이미지를 업로드 하면서 이미지의 용량이 늘어나고 있다.<br>
용량최적화 및 사이트개선을 위해 현재 업로드된 이미지를 전부 webp 확장자로 변환하려한다.<br>
갯수 제한이 걸려있는 웹사이트에서 수동으로 100개 이상이나 있는 이미지를 모두 진행할순 없으니 파이썬으로 진행할려한다.<br>
이 글은 파이썬을 통해 이미지를 최적화하고 webp파일로 전환하는 코드를 소개하는 글이다.<br>
<br>

### 1. `.webp`를 선택한 이유
1. <b>용량이 적음</b><br>
    같은 품질대비 `.jpg, .png` 보다 파일 크기가 작고, 로딩 속도가 빠르다.<br>
    이는 SEO와 사용자 경험에 최적화된 환경을 만들어줄 것이다.
<br>

2. <b>품질 유지</b><br>
    예시로 `.png` 500KB 와 `.webp` 로 변환된 150KB만 비교해봐도 화면으로 보는 품질의 차이는 거의 없다.<br>
    또한 추가적인 내용으로는 그만큼의 고화질을 요구하지도 않는다. 이또한 1번항목과 큰 연관을 가진다.
<br>

3. <b>지원하는 브라우저</b><br>
    웬만한 구형 브라우저, 기기 외에는 최근엔 거의 모든 브라우저와 기기는 `.webp` 이미지는 모두 지원한다.
<br>

### 2. 코드
```python
pip install pillow
```
<br>
```python
from PIL import Image
import os

# 변환할 폴더 경로
input_folder = "./img"
output_folder = "./webp"  # 수정된 경로

# 출력 폴더가 없으면 생성
os.makedirs(output_folder, exist_ok=True)

# 변환할 이미지 파일들
supported_extensions = ('.jpg', '.jpeg', '.png')

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        img = Image.open(os.path.join(input_folder, filename))
        ext = os.path.splitext(filename)[1].lower()

        if ext == ".png" or img.mode == "RGBA":
            # PNG나 투명도가 있는 이미지는 무손실 압축 사용
            img = img.convert("RGBA")
            img.save(os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp"), "WEBP", lossless=True)
        else:
            # 투명도가 필요 없으면 RGB로 변환 후 손실 압축 (최적화된 quality)
            img = img.convert("RGB")
            img.save(os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp"), "WEBP", quality=80)


print("이미지 변환 완료.")
```
<br>

### 3. 적용
{% include image-path.html cols=1 start=1 end=1 %}
이미 현재 블로그에는 `.webp` 가 모두 적용되었다.<br>
이미지 폴더의 크기가 `120MB` -> `28MB` 로 약 `80%` 크게 개선되었다.<br>
이 코드에서는 이미지 배경 투명도에 대한코드가 적용되었지만,<br>
블로그의 이미지 파일들은 이미 배경 투명도를 적용하지 못했다.<br>
이를 미쳐 생각하지 못하고 모두 덮어 씌웠기 때문에 복구는 불가.<br>
<br>