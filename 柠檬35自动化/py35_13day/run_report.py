"""
============================
Author:柠檬班-木森
Time:2020/12/1  20:46
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import unittest
from unittestreport import TestRunner

suite = unittest.defaultTestLoader.discover(r'C:\project\python_35\py35_13day\testcase')
runner = TestRunner(suite, filename='python35111.html', templates=1)
runner.run()




# from BeautifulReport import BeautifulReport
# runner = BeautifulReport(suites=suite)
# runner.report('木森测试报告')




