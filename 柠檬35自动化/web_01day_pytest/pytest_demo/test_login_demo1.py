# ---------------------unittest编写用例----------------------------------------
# 用例文件：test开头
# 用例类：继承unittest.TestCase
# 用例方法：test开头
# 用例只能使用类去定义

# import unittest
# class TestLogin(unittest.TestCase):
#
#     def test_01(self):
#         assert 1 == 100
#
#     def test_02(self):
#         assert 100 == 100
#
#     def test_03(self):
#         assert 100 == 100


# ---------------------pyest编写用例----------------------------------------
"""
# 默认的用例规范
1、用例文件：test开头
2、以test开头的函数会当成一条测试用例
3、以Test开头的类，会当成测试用例类
    测试类中，以test开头的方法，会当成一条用例

# 注意点：用例规范可以自己通过pytest.ini去配置

"""
def test_login():
    pass
    # 第一步：准备数据

    # 第二步：请求接口

    # 第三步：断言




def check_data():
    assert 99 == 100


def test_login01():
    assert 1 == 100


def login_test():
    assert 100 == 100


class TestLogin01:

    def test_01(self):
        assert 99 == 99


class TestLogin02:
    def demo_test(self):
        assert 99 == 99


class LoginCheck:
    def test_c01(self):
        assert 1000 == 1000
