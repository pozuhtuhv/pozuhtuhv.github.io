from bs4 import BeautifulSoup
import requests
import os

res = requests.get('https://pozuhtuhv.github.io/tag/')

# BeautifulSoup 객체 생성
soup = BeautifulSoup(res.text, 'html.parser')

# 'body > main > section.tags > ul > li > a' 선택자에 해당하는 모든 <a> 태그 찾기
tags = soup.select('body > main > section.tags > ul > li > a')

for tag in tags:
    tag_name = tag.get_text().split(' (')[0]  # 각 <a> 태그의 텍스트 출력

        # 폴더 생성 (없으면 생성)
    if not os.path.exists(tag_name):
        os.makedirs(tag_name)

    # index.html 내용 작성
    index_html_content = f'''---
layout: tag
tag: '{tag_name}
---
'''

    # index.html 파일 생성
    with open(os.path.join(tag_name, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html_content)

    print(f'폴더 "{tag_name}"와 index.html 파일이 생성되었습니다.')