"""
前置操作：
    1、普通用户登录（类级别）
    2、管理员登录（类级别）
    3、添加项目（类级别）
    4、审核项目（类级别）

用例前置操作的封装优化：
    1、把多个用例要使用的一些前置步骤封装到一个类中
    2、需要使用这些前置步骤的测试类，直接去继承（多继承）咱们封装好的前置步骤方法
    3、在类级别的前和用例级别的前置中，调用对应的前置方法即可


用例方法：
    1、准备数据
    2、发生请求
    3、断言


    # 数据校验
        用户表： 用户的余额投资前后会变化
            投资前-投资后 == 投资的金额

        流水记录表： 投资成功会新增一条流水记录
            投资后用户流水记录数量-投资前用户流水记录数量 ==  1

        投资表： 投资成功会新增一条投资记录
            投资后用户的记录数量-投资前用户的记录数量 ==  1


    -----扩展投资后（可投金额为0）满标的情况，会生成回款计划---------自行去研究
        1、先把项目的投资记录id都查询出来
        2、遍历投资记录id
        3、根据每个投资记录的id去查询是否生成回款计划表：

"""
import os
import unittest

import requests
from unittestreport import ddt, list_data

from common.handle_conf import conf
from common.handle_excel import HandleExcel
from common.handle_mysql import HandleDB
from common.handle_path import DATA_DIR
from common.handler_log import my_log
from common.tools import replace_data
from testcases.fixture import BaseTest


@ddt
class TestInvest(unittest.TestCase, BaseTest):
    excel = HandleExcel(os.path.join(DATA_DIR, 'apicases.xlsx'), 'invest')
    cases = excel.read_data()
    db = HandleDB()

    @classmethod
    def setUpClass(cls) -> None:
        # 管理员登录
        cls.admin_login()
        # 普通用户登录
        cls.user_login()
        # 添加项目
        cls.add_project()
        # 审核
        cls.audit()

    @list_data(cases)
    def test_invest(self, item):
        # 第一步：准备用例数据
        url = conf.get('env', 'base_url') + item['url']
        item['data'] = replace_data(item['data'], TestInvest)
        params = eval(item['data'])
        expected = eval(item['expected'])
        method = item['method']
        # ----------------投资前查询数据库---------------------------------
        # 查用户表的sql
        sql1 = 'SELECT leave_amount FROM futureloan.member WHERE id="{}"'.format(self.member_id)
        # 查投资记录的sql
        sql2 = 'SELECT id FROM futureloan.invest WHERE member_id="{}"'.format(self.member_id)
        # 查流水记录的sql
        sql3 = 'SELECT id FROM futureloan.financelog WHERE pay_member_id="{}"'.format(self.member_id)
        #
        if item['check_sql']:
            s_amount = self.db.find_one(sql1)[0]
            s_invest = self.db.find_count(sql2)
            s_financelog = self.db.find_count(sql3)

        # 第二步： 发生请求
        response = requests.request(method=method, url=url, json=params, headers=self.headers)
        res = response.json()
        print("预期结果：", expected)
        print("实际结果：", res)

        # -------------------投资后查询数据库--------------------------------
        if item['check_sql']:
            e_amount = self.db.find_one(sql1)[0]
            e_invest = self.db.find_count(sql2)
            e_financelog = self.db.find_count(sql3)

        # 第三步：断言
        try:
            self.assertEqual(expected['code'], res['code'])
            self.assertIn(expected['msg'], res['msg'])
            # 断言实际结果中的msg是否包含 预期结果msg中的内容
            if item['check_sql']:
                # 断言用户余额
                self.assertEqual(params['amount'], float(s_amount - e_amount))
                # 断言投资记录
                self.assertEqual(1, e_invest - s_invest)
                # 断言流水记录
                self.assertEqual(1, e_financelog - s_financelog)

        except AssertionError as e:
            my_log.error("用例--【{}】---执行失败".format(item['title']))
            my_log.exception(e)
            raise e
        else:
            my_log.info("用例--【{}】---执行成功".format(item['title']))

# self 是实例方法的第一个参数，代表的是实例对象本身
# cls  是类方法的第一个参数，代表的是类的本身
