---
title: TensorFlow 'tf_enable_onednn_opts=0' Error
description: TensorFlow Error 경험
layout: post
categories: TensorFlow
published: true
date_published: 2025-01-14
date_modified: 2025-01-14
tag: [python, tensorflow, keras, error]
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

## TensorFlow Error 소개
```bash
2025-01-14 17:54:21.357200: I tensorflow/core/util/port.cc:153] oneDNN custom operations are on. You may see slightly different numerical results due to floating-point round-off errors from different computation orders. To turn them off, set the environment variable `TF_ENABLE_ONEDNN_OPTS=0`.
2025-01-14 17:54:23.565144: I tensorflow/core/util/port.cc:153] oneDNN custom operations are on. You may see slightly different numerical results due to floating-point round-off errors from different computation orders. To turn them off, set the environment variable `TF_ENABLE_ONEDNN_OPTS=0`.
```
### 0. TensorFlow 에러해결

- tensorflow 를 import 하기전 os 변수를 지정시켜주기
```python
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import tensorflow as tf
```
<br>
이 방법이 케바케 없이 오류 <b>해결완료</b>됨.<br>
<br>

- 시스템 환경변수에 변수 지정하기
![tensor_error](/assets/img/tensor_error.png)
<br>
이 방법은 오류 그대로 뱉어냈었음.