"""
充值的前提：登录-->提取token
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
from common.handle_sign import HandleSign

@ddt
class TestRecharge(unittest.TestCase,BaseTest):
    excel = HandleExcel(os.path.join(DATA_DIR, 'apicases.xlsx'), 'recharge')
    cases = excel.read_data()
    db = HandleDB()

    @classmethod
    def setUpClass(cls):
        """用例类的前置方法：登录提取token"""
        cls.user_login()

    @list_data(cases)
    def test_recharge(self, item):
        # 第一步：准备数据
        url = conf.get('env', 'base_url') + item['url']
        # *****************************动态替换参数**************************************
        # 动态处理需要进行替换的参数
        # item['data'] = item['data'].replace('#member_id#', str(self.member_id))

        item['data'] = replace_data(item['data'],TestRecharge)
        # print(item['data'])
        params = eval(item['data'])


        # 0000000000000000000V3版本的改动0000000000000
        par_sign = HandleSign.generate_sign(self.token)
        params.update(par_sign)
        # 0000000000000000000V3版本的改动0000000000000


        # *****************************************************************************
        expected = eval(item["expected"])
        method = item['method'].lower()

        # &&&&&&&&&&&&&&&请求接口之前查询用户的余额&&&&&&&&&&&&&&&&
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

        # &&&&&&&&&&&&&&&请求接口之后查询用户的余额&&&&&&&&&&&&&&&&
        # 执行sql查询余额
        end_amount = self.db.find_one(sql)[0]
        print("用例执行之后，用户的余额：", end_amount)

        # 第三步：断言
        try:
            self.assertEqual(expected['code'], res['code'])
            self.assertEqual(expected['msg'], res['msg'])
            # &&&&&&&&&&&&&&&校验数据库中用户余额的变化是否等于充值的金额&&&&&&&&&&&&&&&&
            if res['msg'] == 'OK':
                # 充值成功，用户余额的变化为充值金额
                self.assertEqual(float(end_amount - start_amount), params['amount'])
            else:
                # 充值失败，用户余额变化为0
                self.assertEqual(float(end_amount - start_amount), 0)

        except AssertionError as e:
            my_log.error("用例--【{}】---执行失败".format(item['title']))
            my_log.exception(e)
            raise e
        else:
            my_log.info("用例--【{}】---执行通过".format(item['title']))
