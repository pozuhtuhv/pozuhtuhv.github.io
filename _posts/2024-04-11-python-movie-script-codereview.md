---
title: "1년전에 쓴 파이썬 코드 리뷰"
description: "초반에 진행했던 코딩 코드를 리뷰하는 글"
layout: post
categories: ["Python"]
published: true
date: 2024-04-11
last_modified_at: 2024-04-11
tag: [python, review]
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

### Movie Script 코드리뷰
`-1년전에 쓴 파이썬 코드 리뷰-`<br>
`영어자막에 대한 것을 찾다가 발견한 자막 사이트`<br>
`'자막을 그대로 저장해보고 싶다' 라는 생각에 만들어보았던 것`<br>
<br>

```python
# pip install requests
# pip install bs4

# https://subslikescript.com/

import requests
from bs4 import BeautifulSoup

csv_file = 'aaa.csv'

while True:
    word = input("Search word. : ")

    # 검색어 길이가 짧은 경우
    if len(word) <= 2:
        print("검색어는 2글자 이상 검색해주세요.")
        continue  # 다음 반복으로 넘어감

    if word == "":
        print("검색에 실패했습니다. 다시 실행해주세요.")
        continue  # 다음 반복으로 넘어감

    i = 0

    #  홈페이지 접속 및 검색
    url = requests.get("https://subslikescript.com/search?q="+word)
    soup = BeautifulSoup(url.text , "html.parser")
    title_list = soup.select('body > div > div > main > article > ul > a')  # 리스트의 제목가져오기
    title = []

    #  제목 받아오기
    for a in title_list:
        i = i + 1
        title.append(str(a.get('title')).replace('Read transcript of ',"").replace('All episodes of ',"").replace("' that have transcripts",""))
        print(str(i)+". "+ str(a.get('title')).replace('Read transcript of ',"").replace('All episodes of ',"").replace("' that have transcripts",""))

    if int(i) == 0:
        print("검색된 결과가 0개 입니다.")
        continue
    
    #  검색결과 갯수 나타내기
    print(str(i)+"개의 검색결과를 찾았습니다.")

    #  작품 선택 스크립트 불러오기
    number = input("받아올 작품의 번호를 입력해주세요. : ")
    if number == "":
        print("검색에 실패했습니다. 작품의 번호를 입력해주세요.")
        continue
    if int(number) > i:
        print(str(i)+" 이하의 번호를 다시 입력해주세요. 검색결과 갯수 : "+str(i)+"개")
        continue

    print(title[int(number)-1]+ " 대본을 받아오는 중입니다..")

    #  작품 링크 가져오기
    link = soup.select('body > div > div > main > article > ul > a')
    list = []
    for b in link:
        list.append(str(b.get('href')))

    #  작품 링크 접속
    url = requests.get("https://subslikescript.com/"+list[int(number)-1])
    soup = BeautifulSoup(url.content, "html.parser")
    script = soup.find('div', attrs={'class' : 'full-script'})

    #  대본 텍스트박스 중 구글 광고 부분 삭제
    for tag in script.find_all('ins', {'class':'adsbygoogle'}):
        tag.decompose()

    #  대본 txt 파일로 저장
    a = open(title[int(number)-1]+".txt",'w', encoding='utf-8')
    a.write(str(script).replace("<script>","").replace("</script>","").replace("<!-- subslikescript native automated \'subslikescript article\' -->","").replace("(adsbygoogle = window.adsbygoogle || []).push({});","").replace("<br/>","\n").replace("<div class=\"full-script\">","").replace("</div>","").replace("<!-- subslikescript square adaptive -->","").replace("<script async=\"\" src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\">", ""))
    a.close()

    print(title[int(number)-1]+".txt 이름으로 저장되었습니다.")
```
<br>


### 지금 보면 아주 잘적은 코드는 아니다. "나오면 장땡"
```html
다음페이지가 있던 없던 첫페이지만 가져오게 만든 코드다.
첫페이지에 원하던 결과가 나왔었으니 이렇게 만든것 같다.
```
<br>
<br>