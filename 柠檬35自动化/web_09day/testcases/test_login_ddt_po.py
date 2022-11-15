"""
============================
Author:柠檬班-木森
Time:2021/2/3 20:32
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""

success_case_data = [
    {'mobile': "18684720553", "pwd": "python", "expected": "登录成功"},
]
# 异常的用例数据：错误提示在页面上
error_case_data = [
    {'mobile': "", "pwd": "python1", "expected": "请输入手机号"},
    {'mobile': "1868472055a", "pwd": "python1", "expected": "请输入正确的手机号"},
    {'mobile': "1868472055", "pwd": "python1", "expected": "请输入正确的手机号"},
    {'mobile': "186847205577", "pwd": "python1", "expected": "请输入正确的手机号"},
    {'mobile': "18684720553", "pwd": "", "expected": "请输入密码"}
]
# 异常的用例数据，错误提示在弹窗中
error_alert_data = [
    {'mobile': "18684720553", "pwd": "pyt1234", "expected": "帐号或密码错误!"},
    {'mobile': "18684727888", "pwd": "python1", "expected": "此账号没有经过授权，请联系管理员!"},
]

import pytest
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from web_09day.page.login_page import LoginPage


@pytest.fixture(scope="function")
def login_fixture():
    # # 用例前置操作
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    driver.get('http://8.129.91.152:8765/Index/login.html')

    yield driver

    # 用例后置操作
    driver.quit()


class TestLogin:

    @pytest.mark.parametrize('case', success_case_data)
    def test_login_pass(self, case, login_fixture):
        driver = login_fixture
        """登录成功"""
        # 创建登录页面对象
        l_page = LoginPage(driver)
        # 调用登录的方法
        l_page.login(case['mobile'], case['pwd'])
        # 验证测试结果
        # 判断点击登录之后是否跳转到首页（首页中是否包含我的用户这个元素）
        try:
            driver.find_element_by_xpath("//a[contains(text(),'我的帐户')]")
        except:
            res = "登录失败"
        else:
            res = "登录成功"

        assert res == case['expected']

    @pytest.mark.parametrize('case', error_case_data)
    def test_login_mobile_error(self, case, login_fixture):
        driver = login_fixture

        l_page = LoginPage(driver)
        # 调用登录的方法
        l_page.login(case['mobile'], case['pwd'])
        # 验证测试结果
        # 获取页面上错误提示的文本，和预期结果做比对
        res = l_page.get_error_text()
        # 断言
        assert res == case['expected']

    @pytest.mark.parametrize('case', error_alert_data)
    def test_login_fail_pop_window(self, case, login_fixture):
        """"""
        driver = login_fixture
        l_page = LoginPage(driver)
        # 调用登录的方法
        l_page.login(case['mobile'], case['pwd'])
        # 验证测试结果：
        # 获取弹框提示的信息和预期结果进行校验
        res = l_page.get_pop_window_info()
        assert res == case['expected']
