## 一、接口服务运行环境：需要安装如下依赖库
```python
pip install flask
pip install gevent-websocket
```


## 二、接口说明：
### 1、投票接口
- 接口地址：ws://127.0.0.1:5000/vote
  
- 请求协议：websocket

- 参数类型：json
- 请求参数：

|   参数名   |  说明    | 是否必填     |
| ---- | ---- | ---- |
|   id   |   选手编号   |  是    |

- 返回结果：
    - status: 状态
    - msg:相关描述
    - data:返回得数据
    - Time:当前时间
    
    



       
    




