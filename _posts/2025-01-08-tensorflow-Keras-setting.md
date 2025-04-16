---
title: "TensorFlow, Keras 기본적인 세팅"
description: "TensorFlow, Keras 기본적인 세팅 설명"
layout: post
categories: ["TensorFlow"]
published: true
date: 2025-01-08
last_modified_at: 2025-01-14
tag: [python, tensorflow, keras]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## TensorFlow, Keras 기본적인 세팅

### 0. TensorFlow 및 Keras 소개
`TensorFlow`: Google에서 개발한 오픈소스 딥러닝 프레임워크로, 머신러닝과 딥러닝 모델을 구축, 학습, 배포할 수 있다.<br>
장점이자 단점은 저수준 API로 세부적인 동작을 모두 직접 구현할 수 있다.

`Keras`: Keras는 TensorFlow에서 제공하는 고수준 딥러닝 API로, 복잡한 딥러닝 모델을 더 간단하고 직관적으로 구현할 수 있다.<br>
#초기에 독립적인 라이브러리였지만, TensorFlow 2.0부터는 TensorFlow 내부에 통합되었다.<br>
<br>

### 1. TensorFlow 및 주요 패키지 설치 및 버전확인

```bash
pip install tensorflow
```
<br>
```python
import tensorflow as tf
print(tf.__version__)
print(tf.keras.__version__)
```
<br>
<br>