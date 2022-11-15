"""
============================
Author:柠檬班-木森
Time:2020/12/5  9:56
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import unittest
import unittestreport

suite = unittest.defaultTestLoader.discover(r'C:\project\python_35\py35_15day\testcases')

runner = unittestreport.TestRunner(suite)

runner.run()
