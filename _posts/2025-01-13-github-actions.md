---
title: Github Actions 활용 Tag 자동화
description: Github Actions 활용 Tag 자동화
layout: post
categories: Git
published : true
date_published: 2025-01-13
date_modified: 2025-01-13
tag: [git, jekyll, tag]
---
---
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 4개이상 -->

## Github Actions 활용 Tag 자동화

### 1. Jekyll 블로그의 Jekyll-tagging
Jekyll 의 태깅 기능은 버전 오류를 뱉어내서 포기하고 다른방법을 쓰기로함

### 2. /Tag 페이지 살펴보기
```bash
{% raw %}
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
  <ul>
    <li>
	    <a class="posts" href="{{ site.url }}/tag/{{ tag | first | slugify }}/">{{ tag[0] | replace:'-', ' '
        }} ({{ tag | last | size }}){% unless forloop.last %}, {% endunless %}
      </a>
    </li>
  </ul>
  {% endfor %}
{% endraw %}
```
<br>
/Tag 페이지를 살펴보면 '{% raw %}{% assign tags = site.tags | sort %}{% endraw %}' 이 구문을 통해 Jekyll 블로그에서 모든 태그를 가져와 정렬하는 기능을 수행한다.
이를, Github Actions 기능을 활용하여 /tag 사이트 에 나타나는 tag 를 모두 수집 후 폴더와 파일을 만들기로 결정

### 3. 코드작성
```python
from bs4 import BeautifulSoup
import requests
import os

# requests 로 블로그의 /tag 페이지 접속
res = requests.get('https://pozuhtuhv.github.io/tag/')

# html을 parser 해준뒤
soup = BeautifulSoup(res.text, 'html.parser')

# 모든 Tag의 <a> 태그 찾기
tags = soup.select('body > main > section.tags > ul > li > a')

# 만들어질 폴더 지정
parent_folder = 'tag'
if not os.path.exists(parent_folder):
    os.makedirs(parent_folder)

for tag in tags:
    tag_name = tag.get_text().split(' (')[0]  # 각 <a> 태그의 텍스트 출력

    #  tag 폴더 안에 가져온 {tag_name} 폴더 생성
    tag_folder_path = os.path.join(parent_folder, tag_name)
    if not os.path.exists(tag_folder_path):
        os.makedirs(tag_folder_path)

    # tag 페이지의 내용을 가지는 index.html 내용 작성
    index_html_content = f'''---
layout: tag
tag: {tag_name}
---
'''

    # index.html 파일 생성
    with open(os.path.join(tag_folder_path, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html_content)

    print(f'폴더 "{tag_folder_path}"와 index.html 파일이 생성')
```
<br>
루트디렉토리에 저장<br>

### 4. Github Actions 진행을 위해 워크플로우 작성   
.github -> workflows -> [yml 작성](https://github.com/pozuhtuhv/pozuhtuhv.github.io/blob/main/.github/workflows/make_folder.yml)
<br>

```bash
name: Fetch Tag make

on:
  push:
    branches:
      - main

jobs:
  fetch-info:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
      
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
        
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install requests bs4

    - name: Run Python script
      run: python auto_tag.py
    
# Git Push
    - name: Commit and push changes
      run: |
        git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
        git config --local user.name "github-actions[bot]"
        git add -A
        git commit -m "(update) auto_tag_make"
        git push
```
<br>
새로운 푸시가 진행되었을때 작동되도록 설정<br>
로봇계정이 업로드 하도록 설정<br>
매우 정상적으로 작동해서 만족<br>
<br>
[권한설정에 대한 글](https://pozuhtuhv.github.io/2024/08/22/workflow-permissions)