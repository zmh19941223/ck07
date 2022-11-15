"""
============================
Author:柠檬班-木森
Time:2020/12/1  20:46
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import unittest
# 第一步：创建测试套件，加载测试用例到套件
# # 1、创建套件
# suite = unittest.TestSuite()
# # 2、创建一个用例加载器
# load = unittest.TestLoader()
# # 3、加载测试用例到套件
# suite.addTest(load.discover(r'C:\project\python_35\py35_13day\testcase'))

#  上面三行代码的一行替代方式
suite = unittest.defaultTestLoader.discover(r'C:\project\python_35\py35_13day\testcase')


# 第二步：创建一个测试用例运行程序
runner = unittest.TextTestRunner()


# 第三步：运行测试用例
runner.run(suite)






