---
title: SQL 예시 - (10) (feat. REGEXP)
description: SQL 정규표현식 예시
layout: post
categories: SQL
published: true
date_published: 2025-02-08
date_modified: 2025-02-08
tag: [sql, example, regexp]
---
---
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 #
    나머지 큰 제목은 ##
    이후 나머지는 3개이상 -->

# SQL에서의 정규표현식 사용

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `^` | 문자열의 시작 | `^amdin` | `admin` 으로 시작하는 문자열 |
| `$` | 문자열의 끝 | `amdin$` | `admin` 으로 끝나는 문자열 |
| `+` | 1회 이상 반복 | `a+` | `a` 가 한번 이상 반복|
| `*` | 0회 이상 반복 | `a*` | `a`가 없거나 여러 번 반복 |
| `?` | 있을수도, 없을수도 | `a?` | `a`가 최대 1번 등장 |
| `{n}` | 정확히 n번 반복 | `a{3}` | `aaa`처럼 a가 정확히 3번 등장 |
| `{n,}` | 최소 n번 이상 반복 | `a{2,}` | `aa` 이상 등장 |
| `{n,m}` | n ~ m번 반복 | `a{2,4}` | `aa`, `aaa`, `aaaa` 중 하나 |
| `\|` | OR | `a\|b` | `a or b` |
| `()` | 그룹화 (우선순위 지정) | `(ab)+` | `ab`가 1회 이상 반복 |
| `.` | 임의의 문자 (한 글자) | `a.b` | `'a' + (아무 글자) + 'b'` |
| `[]` | 문자 집합 | `[aeiou]` | 모음 중 하나 포함 |
| `[^]` | 제외 (NOT) | `[^0-9]` | 숫자가 아닌 문자 포함 |
| `\s` | 공백 (스페이스, 탭, 개행) | `\s` | 공백 포함 |
| `\S` | 공백이 아닌 문자 | `\S` | 공백 제외한 문자 포함 |
| `\d` | 숫자 ([0-9]와 동일) | `\d` | 숫자 포함 |
| `\D` | 숫자가 아닌 문자 | `\D` | 숫자가 아닌 문자 포함 |
| `\w` | 영문자, 숫자, _ ([A-Za-z0-9_]) | `\w` | 영문자, 숫자 포함 |
| `\W` | 영문자, 숫자, _ 아닌 것 | `\W` | 특수문자 포함 |
| `\\\\.` | . 문자 그대로 사용 | `\\.com$` | `.com`으로 끝나는 문자열 찾기 |
| `\\\\(` | ( 문자 그대로 사용 | `\\(test\\)` | `(test)` 포함된 문자열 찾기 |
| `\\\\\\` | \ 문자 그대로 사용 | `\\\` | 백슬래시 포함된 문자열 찾기 |

<br>

## 1. 위치 지정자 (Anchors)

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `^` | 문자열의 시작 | '^amdin' | admin 으로 시작하는 문자열 |
| `$` | 문자열의 끝 | 'amdin$' | admin 으로 끝나는 문자열 |

```sql
SELECT * FROM users WHERE username REGEXP '^admin';
SELECT * FROM users WHERE username REGEXP 'admin$';
```
<br>

## 2. 반복 연산자 (Quantifiers)

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `+` | 1회 이상 반복 | `a+` | `a` 가 한번 이상 반복|
| `*` | 0회 이상 반복 | `a*` | `a`가 없거나 여러 번 반복 |
| `?` | 있을수도, 없을수도 | `a?` | `a`가 최대 1번 등장 |
| `{n}` | 정확히 n번 반복 | `a{3}` | `aaa`처럼 a가 정확히 3번 등장 |
| `{n,}` | 최소 n번 이상 반복 | `a{2,}` | `aa` 이상 등장 |
| `{n,m}` | n ~ m번 반복 | `a{2,4}` | `aa`, `aaa`, `aaaa` 중 하나 |

```sql
SELECT * FROM users WHERE username REGEXP 'a+'; -- 'a'가 한 번 이상 포함된 사용자 찾기
SELECT * FROM users WHERE username REGEXP '^a{2,4}'; -- 'a'가 2~4번 반복되는 사용자 찾기
```
<br>

## 3. 그룹 및 OR 연산 (Group & OR)

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `\|` | OR | `a\|b` | `a or b` |
| `()` | 그룹화 (우선순위 지정) | `(ab)+` | `ab`가 1회 이상 반복 |

```sql
SELECT * FROM products WHERE category REGEXP 'a|b'; -- 'a' 또는 'b' 포함
SELECT * FROM words WHERE word REGEXP '(abc)+'; -- 'abc'가 반복되는 단어 찾기
```
<br>

## 4. 문자 클래스 (Character Classes)

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `.` | 임의의 문자 (한 글자) | `a.b` | `'a' + (아무 글자) + 'b'` |
| `[]` | 문자 집합 | `[aeiou]` | 모음 중 하나 포함 |
| `[^]` | 제외 (NOT) | `[^0-9]` | 숫자가 아닌 문자 포함 |

```sql
SELECT * FROM words WHERE word REGEXP 'c.t'; -- 'cat', 'cut', 'cot' 등 찾기
SELECT * FROM users WHERE username REGEXP '^[A-Za-z]+$'; -- 영어 알파벳만 포함된 사용자 찾기
SELECT * FROM messages WHERE content REGEXP '[^A-Za-z0-9]'; -- 특수문자가 포함된 메시지 찾기
```
<br>

## 5. 공백 및 특수문자

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `\s` | 공백 (스페이스, 탭, 개행) | `\s` | 공백 포함 |
| `\S` | 공백이 아닌 문자 | `\S` | 공백 제외한 문자 포함 |
| `\d` | 숫자 ([0-9]와 동일) | `\d` | 숫자 포함 |
| `\D` | 숫자가 아닌 문자 | `\D` | 숫자가 아닌 문자 포함 |
| `\w` | 영문자, 숫자, _ ([A-Za-z0-9_]) | `\w` | 영문자, 숫자 포함 |
| `\W` | 영문자, 숫자, _ 아닌 것 | `\W` | 특수문자 포함 |

```sql
SELECT * FROM users WHERE username REGEXP '\\s'; -- 공백이 포함된 사용자 찾기
SELECT * FROM orders WHERE order_id REGEXP '^\\d{6}$'; -- 정확히 6자리 숫자인 주문번호 찾기
SELECT * FROM messages WHERE content REGEXP '\\W'; -- 특수문자가 포함된 메시지 찾기
```
<br>

## 6. 탈출 문자 (Escape Character)

| 기호 | 설명 | 예제 | 의미 |
| --- | --- | --- | --- |
| `\\\\.` | `.` 문자 그대로 사용 | `\\.com$` | `.com`으로 끝나는 문자열 찾기 |
| `\\\\(` | `(` 문자 그대로 사용 | `\\(test\\)` | `(test)` 포함된 문자열 찾기 |
| `\\\\\\` | `\` 문자 그대로 사용 | `\\\` | 백슬래시 포함된 문자열 찾기 |

```sql
SELECT * FROM websites WHERE url REGEXP '\\.com$'; -- '.com'으로 끝나는 도메인 찾기
SELECT * FROM messages WHERE content REGEXP '\\(test\\)'; -- '(test)'가 포함된 메시지 찾기
```
<br>

