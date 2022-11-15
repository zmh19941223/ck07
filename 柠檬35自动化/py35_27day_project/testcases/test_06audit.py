"""
审核接口：  管理员去审核

审核的前置条件：
    1、管理员登录（类级别的前置）

    2、普通用户的角色添加项目
        1）、普通用户登录（类级别的前置）
        2）、创建一个项目（用例级别的前置）


"""
import os
import unittest

import requests
from jsonpath import jsonpath
from unittestreport import ddt, list_data

from common.handle_conf import conf
from common.handle_excel import HandleExcel
from common.handle_mysql import HandleDB
from common.handle_path import DATA_DIR
from common.handler_log import my_log
from common.tools import replace_data
from testcases.fixture import BaseTest


@ddt
class TestAudit(unittest.TestCase, BaseTest):
    excel = HandleExcel(os.path.join(DATA_DIR, 'apicases.xlsx'), 'audit')
    cases = excel.read_data()
    db = HandleDB()

    @classmethod
    def setUpClass(cls) -> None:
        cls.admin_login()
        cls.user_login()

    def setUp(self) -> None:
        """用例级别的前置：添加项目"""
        self.add_project()

    @list_data(cases)
    def test_audit(self, item):
        # print("执行当前用例，类属性中的loan_id", self.loan_id)
        # 第一步：准备数据
        url = conf.get('env', 'base_url') + item['url']
        item['data'] = replace_data(item['data'], TestAudit)
        params = eval(item['data'])
        method = item['method']
        expected = eval(item['expected'])
        # 第二步： 请求接口
        response = requests.request(method=method, url=url, json=params, headers=self.admin_headers)
        res = response.json()
        # 判断是否是审核通过的用例，并且审核成功，如果是则保存项目id为审核通过的项目id
        # if res['msg'] == 'OK' and params["approved_or_not"] == True:

        if res['msg'] == 'OK' and item['title'] == "审核通过":
            TestAudit.pass_loan_id = params['loan_id']
        # 第三步：断言
        print("预期结果:", expected)
        print("实际结果：", res)
        try:
            # 断言code和msg字段是否一致
            self.assertEqual(expected['code'], res['code'])
            self.assertEqual(expected['msg'], res['msg'])
            if item['check_sql']:
                sql = item['check_sql'].format(self.loan_id)
                status = self.db.find_one(sql)[0]
                print('数据库中的状态', status)
                self.assertEqual(expected['status'], status)

        except AssertionError as e:
            # 记录日志
            my_log.error("用例--【{}】---执行失败".format(item['title']))
            my_log.exception(e)
            raise e
        else:
            my_log.info("用例--【{}】---执行通过".format(item['title']))
