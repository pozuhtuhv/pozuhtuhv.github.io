---
title: "MySQL 'Too many connections' Error"
description: "MySQL Error 경험"
layout: post
categories: ["SQL"]
published: true
date: 2025-01-18
last_modified_at: 2025-01-18
tag: [sql, error, connections]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## MySQL Error 소개
MySQL애 클라이언트의 수가 일정수치 이상인 경우 나타는 에러메시지이다.
<br>

### 0. MySQL 에러해결
1. 현재 연결된 커넥션 확인
```sql
SHOW STATUS LIKE 'Threads_connected';
```
<br>
![too-many-connections-error-1](/assets/img/2025-01-18-sql-too-many-connections-error-1.png)<br><br>

2. 현재 설정된 max_connections 확인
```sql
SHOW VARIABLES LIKE 'max_connections';
```
<br>
![too-many-connections-error-2](/assets/img/2025-01-18-sql-too-many-connections-error-2.png)<br>
'max_connections'가 숫자가 작으면 3번째 순서로 적용<br>
<br>

3. max_connections 한계치 수정
```sql
SET global max_connections = 130;
```
<br>
확인되었던 'connected' 보단 높고 넉넉하게 설정<br>
<br>

4. 데이터 교환이 없을 경우 연결 끊기
```sql
SET global wait_timeout = 180;
```
<br>
3분간 교환이 없을경우 끊기 ('초'단위임)
<br>
데이터 교환없이 시간이 지난 경우 바로 끊기기 때문에 사용자가 다시 로그인해야함
<br>