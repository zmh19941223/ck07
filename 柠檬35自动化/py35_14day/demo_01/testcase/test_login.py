"""
============================
Author:柠檬班-木森
Time:2020/12/3  20:25
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

import unittest
from py35_14day.demo_01.login_func import login_check
from unittestreport import ddt, list_data
# from ddt import ddt,data


"""
ddt的使用步骤：
    1、测试类前面使用@ddt
    2、在测试方法前使用@list_ddt(测试数据)
    3、在测试方法中定义一个参数，用例接收用例数据


# 如果要给测试用例添加 用例描述：需要在测试数据中添加一个title(desc)字段（测试数据需要是字典类型）

"""

cases = [
    {'desc': "登录成功", 'expected': {"code": 0, "msg": "登录成功"},
     "params": {'username': "python35", "password": "lemonban"}},
    {'title': "XXX成功", 'expected': {"code": 0, "msg": "登录成功"},
     "params": {'username': "python35", "password": "lemonban"}}
]


@ddt
class TestLogin(unittest.TestCase):

    @list_data(cases)
    def test_login(self, item):
        # 准备用例数据
        data = item["params"]
        expected = item["expected"]
        # 调用被测的函数，获取实际结果
        res = login_check(**data)
        # 断言
        self.assertEqual(expected, res)
