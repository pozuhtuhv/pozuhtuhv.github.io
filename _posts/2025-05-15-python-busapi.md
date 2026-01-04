---
title: "공공데이터포털 API활용(feat. 창원버스)"
description: "공공데이터포털 API활용 설명"
layout: post
categories: ["Python"]
published: true
date: 2025-05-15
last_modified_at: 2025-05-15
tags: [python, data.go.kr]
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
공공데이터포털에서 나오는 데이터를 이용한 서비스가 생각보다 주변에 많이 퍼져있다. ex) 코로나, 버스데이터, 국민연금, 기상청 등등<br>
1년전 깃허브 레포지토리에 작성했던 공공데이터포털에서 창원버스정보API에 대해 작성하려고 한다.<br>
<br>

### 1. 가입 및 사용권한 받기
{% include image-path.html cols=1 start=1 end=1 %}
우선 데이터를 사용할려면 [공공데이터포털](https://www.data.go.kr/)에 가입을하고 원하는 데이터를 검색 후 `사용신청`을 하고,<br>
거기서 나오는 `ServiceKey` 를 사용하여 API를 통해 데이터를 받아오면 된다.<br>
데이터마다 지원하는 형식이 차이가 있기 때문에 [`OpenAPI`, `파일데이터`] 본인의 상황에 맞춰서 사용하면 된다.<br>

### 2. 필요한 데이터
{% include image-path.html cols=1 start=2 end=2 %}

1. 버스 및 정류소 데이터 - [경상남도 창원시_기반정보조회서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000096)

- 버스노선목록 - [1-1]busdata.json
<br>
엔드포인트: http://openapi.changwon.go.kr/rest/bis/Bus/?serviceKey={SERVICE_KEY}
<br>
  
> **반환 정보:**  
> ROUTE_ID: 버스 고유 ID  
> ROUTE_NM: 버스 번호  
> STATION_CNT: 정류장 수  
> ROUTE_LEN: 노선 길이  
> ORGT_STATION_ID: 기점 정류장 ID  
> DST_STATION_ID: 종점 정류장 ID  

<br>

- 정류소목록 - [1-3]stationdata.json
<br>
엔드포인트: http://openapi.changwon.go.kr/rest/bis/Station/?serviceKey={SERVICE_KEY}
<br>

> **반환 정보:**  
> STATION_ID: 정류소 고유 ID  
> STATION_NM: 정류소 이름  

<br>

{% include image-path.html cols=1 start=3 end=3 %}

2. 버스 도착 정보 - [경상남도 창원시_버스도착정보조회](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000386)

- 정류소버스도착정보 - [2-1]busarrives.json
<br>
엔드포인트: http://openapi.changwon.go.kr/rest/bis/BusArrives/?serviceKey={SERVICE_KEY}&station={STATION_ID}
<br>

> **반환 정보:**  
> ROUTE_ID: 버스 고유 ID  
> PREDICT_TRAV_TM: 도착 예정 시간  
> LEFT_STATION: 남은 정류장 수  
> UPDN_DIR: 상/하행 구분 (0: 하행, 1: 상행)  

<br>

{% include image-path.html cols=1 start=4 end=4 %}

3. 버스정류소목록 - [경상남도 창원시_노선버스위치정류소](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000254)

- 버스정류소목록 - [3-1]busstop.json
<br>
엔드포인트: http://openapi.changwon.go.kr/rest/bis/BusLocation/?serviceKey={SERVICE_KEY}&route={ROUTE_ID}
<br>

> **반환 정보:**  
> rowCount: 결과 개수 | (총결과/2)+1 = 상행/하행 구분하기  
> STATION_ORD: 정류장 순서  
> STATION_ID: 정류소 고유 ID  
> STATION_NM: 정류소 이름  
> EVENT_CD: 이벤트 코드 (17: 진입, 18: 진출)  

<br>

{% include image-path.html cols=1 start=5 end=5 %}

4. 현재 운행 버스위치 - [경상남도 창원시_노선별 버스위치목록](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000416)

- 현재 운행 버스위치 - [4-1]busposition.json
<br>
엔드포인트: http://openapi.changwon.go.kr/rest/bis/BusPosition/?serviceKey={SERVICE_KEY}&route={ROUTE_ID}
<br>

> **반환 정보:**  
> rowCount: 결과 개수  
> ARRV_STATION_ID: 도착한 정류장 ID  
> LOW_PLATE_TP: 저상버스 여부  
> PLATE_NO: 차량 번호  

### 3. 코드
```python
import os
import requests
import xmltodict
import json
from dotenv import load_dotenv
import datetime

# .env 파일 로드
load_dotenv()
SERVICE_KEY = os.getenv('SERVICE_KEY')
# 창원버스 정보제공 API는 데이터 포맷이 XML 이므로 JSON 변환 과정 추가

# URL 리스트 정의 BUS, STATION DATA LOAD [1-1], [1-3] 데이터 로드
API_URLS = {
    '[1-1]busdata': f'http://openapi.changwon.go.kr/rest/bis/Bus/?serviceKey={SERVICE_KEY}',
    '[1-3]stationdata': f'http://openapi.changwon.go.kr/rest/bis/Station/?serviceKey={SERVICE_KEY}'
}

# XML 데이터를 가져와 JSON으로 변환 후 파일에 저장
# 데이터 로드 영역 시작
def fetch_and_save_data(url, filename):
    try:
        response = requests.get(url)
        response.raise_for_status()
        xml_data = response.content.decode('utf-8') # 한글 디코딩이 필요함
        json_data = json.dumps(xmltodict.parse(xml_data), indent=4, ensure_ascii=False)
        
        with open(filename, 'w', encoding='utf-8') as file:
            file.write(json_data)

    except requests.exceptions.RequestException as e:
        print(f'{url}에서 데이터 가져올 수 없습니다.: {e}')
    except Exception as e:
        print(f'XML 데이터 처리 중 오류가 발생했습니다.: {e}')

def data_save():
    for filename, url in API_URLS.items():
        print('older than 6 hours, reloading...')
        fetch_and_save_data(url, f'data/{filename}.json')
        print('reload Done')

def newdata_load():
    # 데이터의 6시간 기준 최신화를 위한 리로드
    # 6시간 전의 현재 시간
    six_hours_ago = datetime.datetime.now() - datetime.timedelta(hours=6)

    # [1-1]busdata 파일을 대표로 마지막 시간을 확인
    modified_time = datetime.datetime.fromtimestamp(os.path.getmtime('data/[1-1]busdata.json'))
    if modified_time < six_hours_ago:  
        data_save()
    else:
        print('No reload required')
# 데이터 로드 영역 끝

# 실행시 무조건 실행
newdata_load()

# 버스정보검색 ([1-3]stationdata.json 연동 필요)
bus = input('버스번호검색: ')
# json 데이터 로드
with open('data/[1-1]busdata.json', 'r', encoding='utf-8') as file:
    rows = json.load(file)["ServiceResult"]["MsgBody"]["BusList"]["row"]

# 검색 결과 출력
matching_buses = [row for row in rows if bus in str(row["ROUTE_NM"])]

for bus_info in matching_buses:
    print(bus_info["ROUTE_NM"])

# 사용자 선택
selected_bus = input('선택: ')

# 선택한 버스 정보 출력
for bus_info in matching_buses:
    if selected_bus == str(bus_info["ROUTE_NM"]):
        print(bus_info)

# ##############################
# # 3006번의 버스 - 379030060
# ROUTE_ID = '379030060'
# STATION_ID = '379005774'
# url = f'http://openapi.changwon.go.kr/rest/bis/BusArrives/?serviceKey={SERVICE_KEY}&station={STATION_ID}'
# response = requests.get(url)
# xml_data = response.content.decode('utf-8') # 한글 디코딩이 필요함
# json_data = json.dumps(xmltodict.parse(xml_data), indent=4, ensure_ascii=False)

# # json 저장
# with open('data/[2-1]busarrives.json', 'w', encoding='utf-8') as file:
#     file.write(json_data)

# # json 읽기
# with open('data/[2-1]busstop.json', 'r', encoding='utf-8') as file:
#     data = json.load(file)

# rows = data["ServiceResult"]["MsgBody"]["BusLocationList"]["row"]

# for row in rows:
#     print(row)
```
<br>
이대로는 사용하기 어려운게 사실이긴하다<br>
하지만 이 글을 작성하는 이유는 공공데이터포털에 대한 '데이터 접근성이 생각보다 쉽다' 라는걸 글로 적어두고 싶었다.<br>
내가 다시 공공데이터포털을 사용할수도 있으니깐,<br>
위에 작성한 코드 자체를 읽는건 어려울수도 있겠으나,<br>
<b>반환되어지는 값(JSON)</b>을 정해져 있으니, 그걸 어찌저찌 주무르는건 사용자의 재량이다.<br>
<br>
[깃허브에 업로드한 레포지토리](https://github.com/pozuhtuhv/api_CHANGWONBUS)