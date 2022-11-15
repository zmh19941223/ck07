"""
============================
Author:柠檬班-木森
Time:2019/12/20
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import json
import unittest
from websocket import create_connection
import websocket


class TestVote(unittest.TestCase):
    url = 'ws://127.0.0.1:5000/vote'

    @classmethod
    def setUpClass(cls):
        # websocket连接地址
        websocket.enableTrace(True)  # 打开跟踪，查看日志
        cls.ws = create_connection(cls.url)  # 创建连接
        cls.ws.settimeout(10)

    def test_01connect_status(self):
        """测试连接状态"""
        print(self.ws.getstatus())
        # 断言连接状态
        self.assertEqual(101, self.ws.getstatus())
        # 设置超时时间

    def test_02send_info(self):
        # 第一步：准备参数
        params = {'id': 1}
        expected = {'status': "success"}
        # 第二步：发送请求
        self.ws.send(json.dumps(params))
        # 获取结果
        result = self.ws.recv()
        res = json.loads(result)
        # 第三步：断言：
        print("接收结果：", res)
        self.assertEqual(expected['status'], res['status'])

    def test_03send_info(self):
        # 第一步：准备参数
        params = {'id': 'a'}
        expected = {'status': "error",'msg':"传入的id有误"}
        # 第二步：发送请求
        self.ws.send(json.dumps(params))
        # 获取结果
        result = self.ws.recv()
        res = json.loads(result)
        # 第三步：断言：
        print("接收结果：", res)
        self.assertEqual(expected['status'], res['status'])
        self.assertEqual(expected['msg'], res['msg'])

    @classmethod
    def tearDownClass(cls):
        cls.ws.close()


if __name__ == '__main__':
    unittest.main()
