"""
============================
Author:柠檬班-木森
Time:2021/2/20 20:07
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
import pytest

from page.indexPage import IndexPage
from page.loginPage import LoginPage
from datas import global_data as GD
from datas.test_data import LoginData

"""
登录功能：

页面：  
    一、登录页面
        1、 登录操作
            涉及到的元素：
                - 账号输入框
                - 密码输入框
                - 点击登录
        2、获取错误提示
            涉及到的元素：
               - 错误信息提示
                
    二、首页
        1、判断用户是登录成功（获取用户信息的元素，看是否存在）
            涉及到的元素：
               - 用户信息
                           
用例执行的步骤：

    1、打开浏览器
    2、进行登录操作
    3、断言

"""


class TestLogin:
    """测试登录功能"""

    def test_login_success(self, open_browser):
        """登录成功的用例"""
        # 前置操作：打开浏览器
        driver = open_browser
        driver.get('https://www.ketangpai.com/User/login.html')
        login_page = LoginPage(driver)
        # 进行登录
        login_page.login(GD.student_user, GD.student_pwd)
        # 断言
        index_page = IndexPage(driver)
        res = index_page.is_login_success()
        assert res == True

    @pytest.mark.parametrize('case', LoginData.login_error_test_data)
    def test_login_error(self, case, open_browser):
        """登录的反向用例"""
        driver = open_browser
        driver.get('https://www.ketangpai.com/User/login.html')
        login_page = LoginPage(driver)
        # 进行登录
        login_page.login(case['user'], case['pwd'])
        # 断言
        res = login_page.get_error_info()
        assert res == case['expected']
