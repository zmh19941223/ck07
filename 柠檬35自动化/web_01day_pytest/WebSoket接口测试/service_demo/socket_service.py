import time
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from geventwebsocket.handler import WebSocketHandler
from gevent.pywsgi import WSGIServer

app = Flask(__name__)
cors = CORS(app)
WEBSOCKET_LIST = []

USERS = [
    {"id": 0, 'name': '小明', 'count': 5},
    {'id': 1, 'name': '小王', 'count': 10},
    {'id': 2, "name": '木木', 'count': 20},
]


@app.route('/users', methods=['GET'])
def users():
    return jsonify(USERS)


@app.route('/vote')
def vote():
    # 获取websocket请求对象，不是websocket请求否则为None
    ws = request.environ.get('wsgi.websocket')
    if not ws:
        return jsonify({'status': "error", 'msg': "请使用websocket协议请求", "data": None})
    WEBSOCKET_LIST.append(ws)  # 把当前的 ws 连接添加列表中(WEBSOCKET_LIST)中
    while True:
        r_data = ws.receive()
        if not r_data:  # 如果客户端关闭连接 ws.receive() 接收到的将会是 None
            WEBSOCKET_LIST.remove(ws)
            ws.close()
            break
        try:
            data = json.loads(r_data)
            id = data['id']
        except:
            ws.send(json.dumps({'status': "error", 'msg': '请求参数有误！', "data": None}, ensure_ascii=False))
        else:
            for user in USERS:
                if id == user['id']:
                    user['count'] += 1
                    # 将最新的数据 推送到所有的连接客户端上
                    msg = "编号为{}的选手获得1票".format(user['id'])
                    Time_ = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
                    for client in WEBSOCKET_LIST:
                        client.send(json.dumps({'status': "success", 'msg': msg, "data": USERS, 'Time': Time_},
                                               ensure_ascii=False))
                    break
            else:
                ws.send(json.dumps({'status': "error", 'msg': '传入的id有误', "data": None}, ensure_ascii=False))

    return json.dumps({'msg': "连接断开", 'data': None})


if __name__ == '__main__':
    http_server = WSGIServer(('0.0.0.0', 5000), app, handler_class=WebSocketHandler)
    # 启动服务
    http_server.serve_forever()
