"""
============================
Author:柠檬班-木森
Time:2020/12/1  21:27
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import unittest

"""
fixture:测试夹具

1、用例级别：
setUp：用例级别的前置：每条测试用例执行之前都会执行
tearDown：用例级别的后置：每条测试用例执行之后都会执行

2、测试类级别：
setUpClass：测试类级别的前置：测试类中的用例执行前执行
tearDownClass测试类级别的后置：测试类中的所有用例执行完毕之后执行

"""


class TestMusen(unittest.TestCase):

    @classmethod
    def setUpClass(cls) -> None:
        # 测试类级别的前置
        print("------setupClass--------------")

    @classmethod
    def tearDownClass(cls) -> None:
        # 测试类级别的后置
        print('------tearDownClass----------')

    def setUp(self):
        # 每条测试用例执行之前都会执行：用例前置脚本
        print("这个————setup----方法")

    def tearDown(self):
        print("---tearDown-----方法")

    def test_01(self):
        print("这个是第1条测试用例")

    def test_02(self):
        print("这个是第2条测试用例")

    def test_03(self):
        print("这个是第3条测试用例")

    def test_04(self):
        print("这个是第4条测试用例")


if __name__ == '__main__':
    unittest.main()
