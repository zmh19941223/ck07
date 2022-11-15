import unittest
import os
import requests
from unittestreport import ddt, list_data
from common.handle_excel import HandleExcel
from common.handle_path import DATA_DIR
from common.handle_conf import conf
from common.handler_log import my_log


@ddt
class TestLogin(unittest.TestCase):
    excel = HandleExcel(os.path.join(DATA_DIR, "apicases.xlsx"), "login")
    # 读取用例数据
    cases = excel.read_data()
    # 项目的基本地址
    base_url = conf.get('env', 'base_url')
    # 请求头
    headers = eval(conf.get('env', 'headers'))

    @list_data(cases)
    def test_login(self, item):
        # 第一步、准备用例数据
        # 1、接口地址
        url = self.base_url + item['url']
        # 2、接口请求参数
        params = eval(item['data'])
        # 3、请求头
        # 4、获取请求方法 ，并转换为小写
        method = item['method'].lower()
        # 5、用例预期结果
        expected = eval(item['expected'])
        # 第二步：请求接口，获取返回实际结果
        # requests.post(url=url, json=params, headers=self.headers)
        response = requests.request(method, url, json=params, headers=self.headers)
        res = response.json()
        # 第三步：断言
        print("预期结果:", expected)
        print("实际结果：", res)
        try:
            # 断言code和msg字段是否一致
            # self.assertEqual(expected['code'], res['code'])
            # self.assertEqual(expected['msg'], res['msg'])
            # 使用自定义的方法进行断言
            self.assertDictIn(expected,res)
        except AssertionError as e:
            # 记录日志
            my_log.error("用例--【{}】---执行失败".format(item['title']))
            my_log.exception(e)
            # 回写结果到excel(根据公司中实际需求来决定用例结果写不写到excel中) # 注：回写excel需要花费大量的时间
            raise e
        else:
            my_log.info("用例--【{}】---执行通过".format(item['title']))

    def assertDictIn(self, expected, res):
        """字典成员运算的逻辑"""
        for k, v in expected.items():
            if res.get(k) == v:
                pass
            else:
                raise AssertionError("{} not in {}".format(expected, res))
