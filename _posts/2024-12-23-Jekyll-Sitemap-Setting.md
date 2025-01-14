---
title: Jekyll 사이트맵 세팅
description: Jekyll 사이트맵 세팅 설명
layout: post
categories: ETC
published: true
date_published: 2024-12-23
date_modified: 2024-12-26
tag: [github, jekyll]
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

## Jekyll 사이트맵 세팅
사이트맵을 설정하면 검색 엔진이 사이트의 구조 정확하게 수집할 수 있다.
<br>
본글은 Jekyll 로 만들어진 블로그의 Sitemap을 만드는 소개글이며 2가지 방법을 소개하고자 한다. 

### 1. _config.yml plugins 추가
`_config.yml` 파일의 `plugins: ` 부분에 `- jekyll-sitemap` 추가
```yml
  {% raw %}plugins:
    - jekyll-seo-tag
    - jekyll-github-metadata
    - jekyll-include-cache
    - jekyll-sitemap{% endraw %}
```
<br>
수정 -> 커밋 후 브라우저에서 sitemap.xml 접속 후 확인
<br>

### 2. sitemap.xml 커스텀 설정
```xml
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% raw %}{% for page in site.pages %}
    {% if page.layout == "default" %}
      {% if page.published != false %}
        <url>
          <loc>{{ site.url }}{{ page.url }}?title={{ page.title }}</loc>
          {% if page.sitemap.last_modified_date == null %}
            <lastmod>{{ page.last_modified_date | date: "%Y-%m-%d" }}</lastmod>
          {% else %}
            <lastmod>2024-04-06</lastmod>
          {% endif %}
          {% if page.sitemap.changefreq == null %}
            <changefreq>daily</changefreq>
          {% else %}
            <changefreq>{{ page.sitemap.changefreq }}</changefreq>
          {% endif %}
          {% if page.sitemap.priority == null %}
            <priority>0.5</priority>
          {% else %}
            <priority>{{ page.sitemap.priority }}</priority>
          {% endif %}
        </url>
      {% endif %}
    {% endif %}
  {% endfor %}{% endraw %}
</urlset>
```
<br>
위 내용을 제일 메인폴더에 `sitemap.xml` 파일 생성<br>
사용자가 커스텀도 가능하지만, 제일 기본적인 기능들만 추가하는게 낫고,<br><br>
[사이트맵 유효성 검사](https://products.aspose.app/html/ko/sitemap-validator) 를 통해 에러를 고쳐가며 설정하면 된다.
<br>

#### 하루종일 잡기
```html
어떠한 구조로 정해지는지 찾는 것이 매우 어려웠다.
코드에 보면 '{% raw %}{% for page in site.pages %}{% endraw %}' 구문이 있는데, 이부분에서 'site.pages' 를 쓰는게 있고 'site.docs' 나 'site.posts' 가 있었다. 
하지만 나의 블로그에 지정되는 구문은 'pages' 였다.

생각보다 정보공유가 많이 안되어있고, 블로그마다도 적용되어 있는 구성이 달라서 그걸 찾고 적용하느라 많은 시간을 보낸거같다.
```