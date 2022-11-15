"""
============================
Author:柠檬班-木森
Time:2020/12/3  21:11
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
from unittestreport import TestRunner
import unittest

suite = unittest.defaultTestLoader.discover(r"C:\project\python_35\py35_14day\demo_01\testcase")
runner = TestRunner(suite)

runner.run()
