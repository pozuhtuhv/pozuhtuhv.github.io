---
title: "구글 애널리틱스 GA4 API"
description: "구글 애널리틱스 GA4 API 코드"
layout: post
categories: ["SEO"]
published: false
date: 2025-01-15
last_modified_at: 2025-01-15
tag: [python, google, analytics, seo]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

### 구글 애널리틱스 라이브러리 설치
```bash
pip install google-analytics-data
```
<br>

### 0. Google Analytics Data API 코드
```python
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import DateRange, Dimension, Metric, RunReportRequest, FilterExpression, Filter

# 서비스 계정 키 파일을 사용하여 인증
# https://console.cloud.google.com/ 
# 프로젝트 -> IAM 및 관리자 -> 서비스 계정 만들기 -> ID만 대충 넣고 -> 해당 서비스계정 클릭 -> 키 -> 키 추가 -> 새 키 만들기 -> 다운로드된 파일(.JSON)의 경로 지정
credentials = service_account.Credentials.from_service_account_file("C:\\***.json")

# 만드는 과정에 서비스계정의 이메일을 GA4 권한을 추가 또는 
# JSON 파일 메모장으로 열어보면 이메일이 있을텐데 GA4 권한에 추가

# GA4 데이터 클라이언트 생성
analytics_data_client = BetaAnalyticsDataClient(credentials=credentials)

# 특정 페이지 URL
page_url = "/category"

# 보고서 요청 설정
request = RunReportRequest(
    property=f"properties/000000000", # 속성아이디 
    # https://ga-dev-tools.google/ga4/query-explorer/ 에서 dimension 유형 확인
    dimensions=[Dimension(name="pagePathPlusQueryString")],
    # https://ga-dev-tools.google/ga4/query-explorer/ 에서 metrics 타입 확인
    metrics=[Metric(name="sessions")],
    date_ranges=[DateRange(start_date="yesterday", end_date="yesterday")], # 날짜 '2022-02-19' 형식사용 가능
    # https://ga-dev-tools.google/ga4/query-explorer/ 에서 dimension filter 타입 확인
    dimension_filter = FilterExpression(filter=Filter(field_name="pagePathPlusQueryString", string_filter=Filter.StringFilter(match_type=Filter.StringFilter.MatchType.BEGINS_WITH, value=page_url))),
)

# 보고서 실행
response = analytics_data_client.run_report(request)

a = 0
# 결과 출력
for row in response.rows:
    # print(f"{row.dimension_values[0].value} : {row.metric_values[1].value}")
    a += int(row.metric_values[0].value)
print(a)
```
<br>
<br>