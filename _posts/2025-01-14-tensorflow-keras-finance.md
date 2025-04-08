---
title: "TensorFlow, Keras 주가예상 코드"
description: "TensorFlow, Keras 주가예상 코드"
layout: post
categories: ["TensorFlow"]
published: true
date: 2025-01-08
last_modified_at: 2025-01-14
tag: [python, tensorflow, keras, scrapbook]
---
---
{: .no_toc .text-delta }

1. TOC
{:toc}
---

<!-- 글의 제목은 ##
    나머지 큰 제목은 ###
    이후 나머지는 3개이상 -->

## TensorFlow, Keras 모듈 세팅
```bash
pip install tensorflow yfinance pandas numpy python-dateutil scikit-learn matplotlib
```
### 0. TensorFlow 주가예상 코드
[원본글](https://blog.naver.com/dorergiverny/223550520432)
```python
import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime
from dateutil.relativedelta import relativedelta
from sklearn.preprocessing import MinMaxScaler

# 날짜 지정
now = datetime.now()
before = now - relativedelta(years=10)
now_day = now.strftime("%Y-%m-%d")
before_day = before.strftime("%Y-%m-%d")

# 티커 설정
ticker = "005930.KS"
data = yf.download(ticker, start=before_day, end=now_day)

data = data[['Close']]

# 데이터 전처리
scaler = MinMaxScaler(feature_range=(0,1))
scaled_data = scaler.fit_transform(data)

# 학습데이터 테스트 데이터 지정
train_size = int(len(scaled_data)*0.8)
train_data = scaled_data[:train_size]
test_data = scaled_data[train_size:]

def create_dataset(data, time_step=1):
    X, y = [], []
    for i in range(len(data) - time_step - 1):
        a = data[i:(i+time_step), 0]
        X.append(a)
        y.append(data[i + time_step, 0])
    return np.array(X), np.array(y)

# 60일 기준으로 다음날 종가 예측
time_step = 60

X_train, y_train = create_dataset(train_data, time_step)
X_test, y_test = create_dataset(test_data, time_step)

X_tomorrow = np.array(scaled_data[len(data)-time_step:])

X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)

X_tomorrow = X_tomorrow.reshape(X_tomorrow.shape[1], X_tomorrow.shape[0], 1)

X_tomorrow.shape


# 모델 구성 및 학습
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM
from tensorflow.keras.callbacks import EarlyStopping

# LSTM 모델 생성
model = Sequential()
# 첫번째 LSTM 레이어
model.add(LSTM(50, return_sequences=True, input_shape=(time_step, 1)))
# 두번째 LSTM 레이어
model.add(LSTM(50, return_sequences=False))
# Dense Layer 25개로 줄임
model.add(Dense(25))
# 마지막 Dense layer 신경망 수(예측값) 1개
model.add(Dense(1))

model.compile(optimizer='adam', loss='mean_squared_error')

# EarlyStopping (loss 모니터링 후 epoch 중단 후 verbose=화면출력)
early_stop = EarlyStopping(monitor='loss', patience=5, verbose=1)
model.fit(X_train, y_train, batch_size=20, epochs=20, verbose=1, callbacks=[early_stop])

# 예측 및 평가
train_predict = model.predict(X_train)
test_predict = model.predict(X_test)

tomorrow_predict = model.predict(X_tomorrow)

# 역스케일링 실제값 다시 환산
train_predict = scaler.inverse_transform(train_predict)
test_predict = scaler.inverse_transform(test_predict)
tomorrow_predict = scaler.inverse_transform(tomorrow_predict)

y_train = scaler.inverse_transform([y_train])
y_test = scaler.inverse_transform([y_test])

# 결과값 출력
print(tomorrow_predict)

# 실제로 얼마 차이나는지 신빙성 계산
import math
from sklearn.metrics import mean_squared_error
train_rmse = math.sqrt(mean_squared_error(y_train[0], train_predict[:, 0]))
test_rmse = math.sqrt(mean_squared_error(y_test[0], test_predict[:, 0]))
print(f'Train RMSE: {train_rmse}')
print(f'Test RMSE: {test_rmse}')


# 예측 결과 시각화
import matplotlib.pyplot as plt

plt.figure(figsize=(14, 5))
plt.plot(data.index, scaler.inverse_transform(scaled_data), label='Actual Price')
train_predict_plot = np.empty_like(scaled_data)
train_predict_plot[:,:] = np.nan
train_predict_plot[time_step:len(train_predict)+time_step, :] = train_predict
plt.plot(data.index, train_predict_plot, label='Train Predict')

test_predict_plot = np.empty_like(scaled_data)
test_predict_plot[:,:] = np.nan
test_predict_plot[len(train_predict)+ (time_step * 2) + 1:len(scaled_data) -1, :] = test_predict
plt.plot(data.index, test_predict_plot, label='Test Predict')

plt.xlabel("Date")
plt.ylabel("Price")
plt.legend()
plt.show()
```

[원본글](https://blog.naver.com/dorergiverny/223550520432)