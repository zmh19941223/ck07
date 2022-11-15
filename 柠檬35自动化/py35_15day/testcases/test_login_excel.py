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
from py35_15day.login_func import login_check, register
from py35_15day.handle_excel import HandleExcel


@ddt
class TestLogin(unittest.TestCase):
    excel = HandleExcel(r'C:\project\python_35\py35_15day\cases.xlsx', 'login')
    cases = excel.read_data()

    @list_data(cases)
    def test_login(self, item):
        # 第一步：准备数据
        expected = eval(item['expected'])
        params = eval(item["data"])
        row = item['case_id'] + 1
        print("当前用例的行号：", row)
        # 第二步：调功能函数，获取实际结果
        res = login_check(**params)
        # 第三步：断言
        try:
            self.assertEqual(expected, res)
        except AssertionError as e:
            print("用例执行未通过")
            #  把测试结果回写到excel
            self.excel.write_data(row=row, column=5, value='未通过')
            # 为了让unittest识别这条是未通过的用例，咱们捕获异常之后进行完相关处理，要主动把异常在抛出去
            raise e
        else:
            print("用例执行通过")
            #  把测试结果回写到excel
            self.excel.write_data(row=row, column=5, value='通过')


@ddt
class TestRegister(unittest.TestCase):
    excel = HandleExcel(r'C:\project\python_35\py35_15day\cases.xlsx', 'register')
    cases = excel.read_data()

    @list_data(cases)
    def test_register(self, item):
        # 第一步：准备数据
        expected = eval(item['expected'])
        params = eval(item["data"])
        row = item['case_id'] + 1
        print("当前用例的行号：", row)

        # 第二步：调功能函数，获取实际结果
        res = register(*params)
        # 第三步：断言
        try:
            self.assertEqual(expected, res)
        except AssertionError as e:
            print("用例执行未通过")
            #  把测试结果回写到excel
            self.excel.write_data(row=row, column=5, value='未通过')
            # 为了让unittest识别这条是未通过的用例，咱们捕获异常之后进行完相关处理，要主动把异常在抛出去
            raise e
        else:
            print("用例执行通过")
            #  把测试结果回写到excel
            self.excel.write_data(row=row, column=5, value='通过')
