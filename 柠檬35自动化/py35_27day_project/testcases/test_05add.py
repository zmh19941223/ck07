import unittest
import os

import requests
from jsonpath import jsonpath
from unittestreport import ddt, list_data
from common.handle_excel import HandleExcel
from common.handle_path import DATA_DIR
from common.handle_conf import conf
from common.tools import replace_data
from common.handler_log import my_log
from common.handle_mysql import HandleDB
from testcases.fixture import BaseTest

"""
添加项目：需要登录
    定义用例的前置方法（类级别）
"""


@ddt
class TestAdd(unittest.TestCase, BaseTest):
    excel = HandleExcel(os.path.join(DATA_DIR, 'apicases.xlsx'), 'add')
    cases = excel.read_data()
    db = HandleDB()

    @classmethod
    def setUpClass(cls) -> None:
        """前置登录"""
        cls.user_login()

    @list_data(cases)
    def test_add(self, item):
        # 第一步:准备数据
        url = conf.get('env', 'base_url') + item['url']
        item['data'] = replace_data(item['data'], TestAdd)
        params = eval(item['data'])
        expected = eval(item['expected'])
        method = item['method']
        # 调用接口之前：查询数据库该用户的项目数量
        sql = "SELECT * FROM futureloan.loan WHERE member_id={}".format(self.member_id)
        start_count = self.db.find_count(sql)
        print("调用接口之前的项目个数：", start_count)
        # 第二步：调用接口，获取实际结果
        response = requests.request(method=method, url=url, json=params, headers=self.headers)
        res = response.json()

        # 调用接口之后：查询数据库该用户的项目数量
        end_count = self.db.find_count(sql)
        print("调用接口之后的项目个数：", end_count)
        # 第三步： 断言
        try:
            self.assertEqual(expected['code'], res['code'])
            self.assertEqual(expected['msg'], res['msg'])
            # 根据添加项目是否成功，来对数据库进分别的校验
            if res['msg'] == 'OK':
                self.assertEqual(end_count - start_count, 1)
            else:
                self.assertEqual(end_count - start_count, 0)
        except AssertionError as e:
            my_log.error("用例--【{}】---执行失败".format(item['title']))
            my_log.exception(e)
            raise e
        else:
            my_log.info("用例--【{}】---执行成功".format(item['title']))
