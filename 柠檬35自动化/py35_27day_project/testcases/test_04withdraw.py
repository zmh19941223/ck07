"""
取现的前提：登录-->提取token
unittest:
    用例级别的前置：setUp
    测试类级别的前置：setUpClass
        1、提取token,保存为类属性
        2、提取用户id，保存为类属性
    充值测试方法：
        1、动态的替换参数中的用户id (字符串的replace中的参数要是字符串类型)

注册类的优化：
    1、手机号码动态生成，替换到用例参数中


"""
import os
import unittest
import requests
from jsonpath import jsonpath
from unittestreport import ddt, list_data
from common.handle_excel import HandleExcel
from common.handle_path import DATA_DIR
from common.handler_log import conf
from common.handler_log import my_log
from common.handle_mysql import HandleDB
from common.tools import replace_data
from testcases.fixture import BaseTest

@ddt
class TestWithdraw(unittest.TestCase,BaseTest):
    excel = HandleExcel(os.path.join(DATA_DIR, 'apicases.xlsx'), 'withdraw')
    cases = excel.read_data()
    db = HandleDB()

    @classmethod
    def setUpClass(cls):
        """用例类的前置方法：登录提取token"""
        cls.user_login()


    @list_data(cases)
    def test_withdraw(self, item):
        # 第一步：准备数据
        url = conf.get('env', 'base_url') + item['url']
        # *****************************动态替换参数**************************************
        # 动态处理需要进行替换的参数
        # item['data'] = item['data'].replace('#member_id#', str(self.member_id))
        # print(item['data'])
        item['data'] = replace_data(item['data'],TestWithdraw)


        params = eval(item['data'])
        # *****************************************************************************
        expected = eval(item["expected"])
        method = item['method'].lower()

        # ************取现之前查询数据库用户账户金额******************
        sql = 'SELECT leave_amount FROM futureloan.member WHERE mobile_phone="{}"'.format(
            conf.get("test_data", 'mobile'))

        # 执行sql查询余额
        start_amount = self.db.find_one(sql)[0]
        print("用例执行之前，用户的余额：", start_amount)

        # 第二步：发送请求，获取接口返回的实际结果
        response = requests.request(method=method, url=url, json=params, headers=self.headers)
        res = response.json()
        print("预期结果：", expected)
        print("实际结果：", res)
        # ************取现之后查询数据库用户账户金额******************
        # 执行sql查询余额
        end_amount = self.db.find_one(sql)[0]
        print("用例执行之后，用户的余额：", end_amount)

        # 第三步：断言
        try:
            self.assertEqual(expected['code'], res['code'])
            self.assertEqual(expected['msg'], res['msg'])
            # ************断言用户账户金额变化值，是否等于取现成功的金额******************
            if item['check_sql']:
                self.assertEqual(params['amount'], float(start_amount - end_amount))


        except AssertionError as e:
            my_log.error("用例--【{}】---执行失败".format(item['title']))
            my_log.exception(e)
            raise e
        else:
            my_log.info("用例--【{}】---执行通过".format(item['title']))
