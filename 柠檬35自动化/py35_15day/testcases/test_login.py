"""
============================
Author:柠檬班-木森
Time:2020/12/5  9:35
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import unittest
from unittestreport import ddt, list_data
from py35_15day.login_func import login_check

import openpyxl

workbook = openpyxl.load_workbook(r"C:\project\python_35\py35_15day\cases.xlsx")
sh = workbook['login']
res = list(sh.rows)
# 获取第一行的表头
title = [i.value for i in res[0]]

cases = []
# 遍历第一行之外的其他行
for item in res[1:]:
    data = [i.value for i in item]
    dic = dict(zip(title, data))
    cases.append(dic)


@ddt
class TestLogin(unittest.TestCase):

    @list_data(cases)
    def test_login(self, item):
        # 第一步：准备数据
        expected = eval(item['expected'])
        params = eval(item["data"])
        # 第二步：调功能函数，获取实际结果
        res = login_check(**params)
        # 第三步：断言
        self.assertEqual(expected, res)


