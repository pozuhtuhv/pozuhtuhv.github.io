---
title: Django API 세팅
description: 장고API의 기본 세팅 설명
layout: post
categories: Python
published: true
date_published: 2024-04-11
date_modified: 2024-04-11
tag: [python, django, framework]
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

## Django API 세팅

### 0. Django 소개
Python에서 제일 많이 알려진 웹프레임워크이며, 2005년 공개 후 오픈소스가 가장 많다.<br>
웹 개발에 필요한 거의 모든것을 포함되어있고, 기본디자인이나 인터페이스를 구현하기 쉽다.
1. 모델, 템플릿, 뷰 구성요소를 통해 애플리케이션을 구성한다. (MTV)
2. 개발자가 SQL 데이터베이스를 직접 세팅하지 않아도 기본 데이터베이스를 구성할 수 있다.
3. 웹 보안 문제로부터 보호하는 기능을 내장하고 있다.

---
#### 변수
`projectname : 프로젝트 이름`<br>
`appname : 프로젝트 내의 앱 이름`
---
<br>

### 1. Python 패키지 설치 및 세팅
```python
# requirements.txt

asgiref==3.8.1
Django==5.0.6
djangorestframework==3.15.1
mysqlclient==2.2.4
sqlparse==0.5.0
tzdata==2024.1
```

```python
python venv [folder] # 가상환경 세팅

pip install -r requirements.txt # 패키지 설치

django-admin startproject {projectname} . # django 프로젝트 폴더 만들기 ex) config

django-admin startapp {appname} # django 앱 폴더 만들기
```
<br>

### 2. {projectname}/setting.py의 데이터베이스구성 수정
```python
MySQL 에서 해당하는 데이터베이스의 이름을 만들어놓아야함

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_test', # 데이터베이스 스키마 이름
        'USER': 'root',
        'PASSWORD': 'aaaaa',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

`이걸 설정하는 이유는 Django 기본 데이터베이스는 sqlite3 로 진행되기 때문에 mysql로 연결시켜주는 것`
<br>

### 3. {projectname}/setting.py의 앱구성 수정
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework', # api 구동
    '{appname}', # startapp으로 만든 앱이름 추가
]

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',  # api 웹확인
    ),
}
```
<br>

### 4. {appname}/models.py의 데이터구성 수정
MySQL에 구성되어질 행, 열 구성

```python
from django.db import models

class BoardModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
```
<br>

### 5. 마이그레이션 후 데이터베이스 적용
```python
python manage.py makemigrations {appname}
python manage.py migrate
```
<br>

### 6. {appname}/urls.py API 엔드포인트 생성
```python 
from django.urls import path
from . import views

urlpatterns = [
    path('board/', views.BoardListCreate.as_view(), name='board-list-create'),
    path('board/<int:pk>/', views.BoardDetail.as_view(), name='board-detail'),
]
```
<br>

### 7. {appname}/views.py 설정
```python 
from rest_framework import generics
from .models import BoardModel
from .serializers import BoardModelSerializer

class BoardListCreate(generics.ListCreateAPIView):
    queryset = BoardModel.objects.all()
    serializer_class = BoardModelSerializer

class BoardDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BoardModel.objects.all()
    serializer_class = BoardModelSerializer
```
<br>

### 8. {appname}/serializers.py 설정
```python 
from rest_framework import serializers
from .models import BoardModel

class BoardModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardModel
        fields = '__all__'
```
<br>

### 9. {projectname}/urls.py 메인 URL 설정
```python 
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('board.urls')),
]
```
<br>

### 10. 서버 실행하기
```python 
python manage.py runserver
```
<br>

### 11. 마이그레이션 후 데이터베이스 적용
```python
python manage.py makemigrations {appname}
python manage.py migrate
```