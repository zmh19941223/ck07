"""
============================
Author:柠檬班-木森
Time:2019/12/20
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
安装请求库：websocket-client

pip install websocket-client

"""

import json
from websocket import create_connection

ws = create_connection("ws://127.0.0.1:5000/vote")

# print("获取连接状态：", ws.getstatus())
# 发送请求参数
# params = {'id': 1}
# ws.send(json.dumps(params))

params = {'id': 'a'}
ws.send(json.dumps(params))
# # 获取返回结果
result = ws.recv()
data = json.loads(result)
print("接收结果：", data)

# 关闭连接
ws.close()

"""
{'status': 'success',
 'msg': '编号为1的选手获得1票',
 'data': [{'id': 0, 'name': '小明', 'count': 9}, {'id': 1, 'name': '小王', 'count': 14}, {'id': 2, 'name': '木木', 'count': 22}], 
 'Time': '2021-01-14 20:32:14'}

"""
