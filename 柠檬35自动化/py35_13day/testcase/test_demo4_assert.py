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
unittest提供的断言方式
assertEqual:断言两个数据是否相等
assertIn:成员断言

"""


class TestMusen(unittest.TestCase):

    def test_01(self):
        print("这个是第1条测试用例")
        # 断言相等
        # assert 200 == 201
        # self.assertEqual(200, 201)
        # self.assertEqual("成功", '失败')
        # 成员断言
        # data = ['11', '22']
        # n = '111'
        # assert  n in data
        # self.assertIn(n, data)
        self.assertIn('错误', '您输入的账号或者密码错误！')


if __name__ == '__main__':
    unittest.main()
