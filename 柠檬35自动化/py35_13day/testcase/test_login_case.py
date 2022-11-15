"""
============================
Author:柠檬班-木森
Time:2020/12/1  20:18
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import unittest
from py35_13day.login_func import login_check

"""
unittest中测试用例的编写规范
1、定义一个测试用例类,必须继承unittest模块中的TestCase
2、测试用例类中，一个test开头的方法就是一条测试用例
3、将测试用例执行的代码逻辑写到对应的测试方法中
    # 第一步：准备用例数据
    # 第二步：调用被测的功能函数（发送请求调用接口），获取实际结果
    # 第三步：断言

"""


class TestLogin(unittest.TestCase):

    def test_login_pass(self):
        # 第一步：准备用例数据
        params = {'username': "python35", "password": "lemonban"}
        expected = {"code": 0, "msg": "登录成功"}

        # 第二步：调用被测的功能函数（发送请求调用接口），获取实际结果
        result = login_check(username=params['username'], password=params['password'])

        # 第三步：断言
        assert expected == result

    def test_login_pwd_error(self):
        # 第一步：准备用例数据
        params = {'username': "python35", "password": "lemonban11"}
        expected = {"code": 1, "msg": "账号或密码不正确"}

        # 第二步：调用被测的功能函数（发送请求调用接口），获取实际结果
        result = login_check(username=params['username'], password=params['password'])

        # 第三步：断言
        assert expected == result

    def test_login_user_error(self):
        # 第一步：准备用例数据
        params = {'username': "python3522", "password": "lemonban"}
        expected = {"code": 1, "msg": "账号或密码不正确"}

        # 第二步：调用被测的功能函数（发送请求调用接口），获取实际结果
        result = login_check(username=params['username'], password=params['password'])

        # 第三步：断言
        assert expected == result


class TestRegister(unittest.TestCase):

    def test_register_01(self):
        assert 'OK' == 'NO'

    def test_register_02(self):
        assert '100' == '100'
