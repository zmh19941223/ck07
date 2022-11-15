"""
============================
Author:柠檬班-木森
Time:2021/2/3 20:32
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
import pytest

from page.loginPage import LoginPage
from page.indexPage import IndexPage
from datas.login_data import LoginData


class TestLogin:

    @pytest.mark.parametrize('case', LoginData.success_case_data)
    def test_login_pass(self, case, login_fixture):
        """登录成功"""
        driver = login_fixture
        # 登录
        login_page = LoginPage(driver)
        login_page.login(user=case['mobile'], pwd=case['pwd'])

        # 判断点击登录之后是否跳转到首页（首页中是否包含我的用户这个元素）
        index_page = IndexPage(driver)
        res = index_page.is_login_success()

        assert res == case['expected']

    @pytest.mark.parametrize('case', LoginData.error_case_data)
    def test_login_mobile_error(self, case, login_fixture):
        driver = login_fixture
        # 登录
        login_page = LoginPage(driver)
        login_page.login(user=case['mobile'], pwd=case['pwd'])
        # 获取页面上错误提示的文本
        res = login_page.get_page_error_info()
        # 断言
        assert res == case['expected']

    @pytest.mark.parametrize('case', LoginData.error_alert_data)
    def test_login_fail_pop_window(self, case, login_fixture):
        """"""
        driver = login_fixture
        # 登录
        login_page = LoginPage(driver)
        login_page.login(user=case['mobile'], pwd=case['pwd'])
        # 获取弹框提示的信息
        res = login_page.get_pop_windows_error_info()

        assert res == case['expected']
