"""
============================
Author:柠檬班-木森
Time:2020/12/3  20:41
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
ddt：Data Driver Test(数据驱动测试)
思想：把测试数据和用例代码进行分离，通过外部数据去生成测试用例，方便后期的维护，以及测试数据的管理


ddt的使用步骤：
    1、测试类前面使用@ddt
    2、在测试方法前使用@list_data(测试数据)
    3、在测试方法中定义一个参数，用例接收用例数据


ddt的底层原理（扩展）：
    1、保存测试数据
    2、遍历测试数据，生成测试方法
"""

import unittest
from unittestreport import ddt, list_data

#   -------案例1------------
#
# @ddt
# class TestMusen(unittest.TestCase):
#
#     @list_data([111, 222, 3, 4, 3335, 446, 7])
#     def test_01(self, item):
#         print("item:", item)
#         pass


# cases = [
#     {'expected': "OK", "data": 11},
#     {'expected': "OK", "data": 22},
#     {'expected': "OK", "data": 333},
#     {'expected': "OK", "data": 44},
# ]

cases = [
    (11, 22, 33),
    (222, 333, 44),
    (222, 333, 44),
    (222, 333, 44),
    (222, 333, 44)
]


@ddt
class TestMusen(unittest.TestCase):

    @list_data(cases)  # 存储用例数据
    def test_01(self, item):
        print("item:", item)
        pass

#  遍历测试数据，创建用例方法，设置为测试类的实例方法

#  错误示范：  行不通
# class TestMusen(unittest.TestCase):
#     for item in cases:
#         def test_01(self):
#             print("item:", item)
#             pass
