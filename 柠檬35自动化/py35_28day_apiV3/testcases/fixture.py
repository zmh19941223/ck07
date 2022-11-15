import requests
from jsonpath import jsonpath
from common.handle_conf import conf


class BaseTest:

    @classmethod
    def admin_login(cls):
        url = conf.get('env', 'base_url') + '/member/login'
        # --------------------管理员登录-----------------
        # 1、准备登录的数据
        params = {
            'mobile_phone': conf.get('test_data', 'admin_mobile'),
            "pwd": conf.get('test_data', 'admin_pwd')
        }
        headers = eval(conf.get('env', 'headers'))
        # 2、请求登录接口
        response = requests.post(url=url, json=params, headers=headers)
        res = response.json()
        # 3、提取token，放到请求头中 给后面的用例使用
        admin_token = jsonpath(res, '$..token')[0]
        headers['Authorization'] = 'Bearer ' + admin_token

        cls.admin_headers = headers
        # 4、提取用户id
        cls.admin_member_id = jsonpath(res, "$..id")[0]

    @classmethod
    def user_login(cls):
        url = conf.get('env', 'base_url') + '/member/login'
        # --------------------普通用户登录------------------------
        # 1、准备登录的数据
        params = {
            'mobile_phone': conf.get('test_data', 'mobile'),
            "pwd": conf.get('test_data', 'pwd')
        }
        headers = eval(conf.get('env', 'headers'))
        # 2、请求登录接口
        response = requests.post(url=url, json=params, headers=headers)
        res = response.json()
        # 3、提取token，放到请求头中 给后面的用例使用
        cls.token = jsonpath(res, '$..token')[0]
        headers['Authorization'] = 'Bearer ' + cls.token
        cls.headers = headers
        # 4、提取用户id
        cls.member_id = jsonpath(res, "$..id")[0]

    @classmethod
    def add_project(cls):
        url = conf.get('env', 'base_url') + '/loan/add'
        params = {
            "member_id": cls.member_id,
            "title": "借钱实现财富自由",
            "amount": 2000,
            "loan_rate": 12.0,
            "loan_term": 3,
            "loan_date_type": 1,
            "bidding_days": 5}
        # 第二步：请求添加项目的接口
        response = requests.post(url=url, json=params, headers=cls.headers)
        res = response.json()
        # print(res)
        # 第三步：提取项目的id,保存为类属性
        cls.loan_id = jsonpath(res, '$..id')[0]

    @classmethod
    def audit(cls):
        """审核"""
        url = conf.get('env', 'base_url') + '/loan/audit'
        params = {"loan_id": cls.loan_id,
                  "approved_or_not": True
                  }
        # 第二步：请求添加项目的接口,对项目进行审核
        res = requests.patch(url=url, json=params, headers=cls.admin_headers)
        print()