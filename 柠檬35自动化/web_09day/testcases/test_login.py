"""
============================
Author:柠檬班-木森
Time:2021/2/3 20:32
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""

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



"""
import pytest
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


class TestLogin:

    def test_login_pass(self):
        """登录成功"""
        drievr = webdriver.Chrome()
        drievr.implicitly_wait(10)
        drievr.get('http://8.129.91.152:8765/Index/login.html')
        # 1、输入账号
        drievr.find_element_by_xpath('//input[@placeholder="手机号"]').send_keys('18684720553')
        # 2、输入密码
        drievr.find_element_by_xpath('//input[@placeholder="密码"]').send_keys('python')
        # 3、点击登录
        drievr.find_element_by_xpath("//button[text()='登录']").click()
        # 验证测试结果
        # 判断点击登录之后是否跳转到首页（首页中是否包含我的用户这个元素）
        try:
            drievr.find_element_by_xpath("//a[contains(text(),'我的帐户')]")
        except:
            res = False
        else:
            res = True

            # 断言res是否为True
        assert res

    def test_login_mobile_error(self):
        # 准备测试相关数据
        expected = '请输入正确的手机号'
        drievr = webdriver.Chrome()
        drievr.implicitly_wait(10)
        drievr.get('http://8.129.91.152:8765/Index/login.html')
        # 1、输入账号
        drievr.find_element_by_xpath('//input[@placeholder="手机号"]').send_keys('1868472055')
        # 2、输入密码
        drievr.find_element_by_xpath('//input[@placeholder="密码"]').send_keys('python')
        # 3、点击登录
        drievr.find_element_by_xpath("//button[text()='登录']").click()
        # 验证测试结果
        # 获取页面上错误提示的文本，和预期结果做比对
        res = drievr.find_element_by_xpath("//div[@class='form-error-info']").text
        # 断言
        assert res == expected

    def test_login_fail_pop_window(self):
        """"""
        # 预期结果
        expected = "此账号没有经过授权，请联系管理员!"

        #  用例执行的步骤
        drievr = webdriver.Chrome()
        drievr.implicitly_wait(10)
        drievr.get('http://8.129.91.152:8765/Index/login.html')
        # 1、输入账号
        drievr.find_element_by_xpath('//input[@placeholder="手机号"]').send_keys('18684720778')
        # 2、输入密码
        drievr.find_element_by_xpath('//input[@placeholder="密码"]').send_keys('python')
        # 3、点击登录
        drievr.find_element_by_xpath("//button[text()='登录']").click()

        # 验证测试结果：
        # 获取弹框提示的信息和预期结果进行校验
        ele = WebDriverWait(drievr, 5, 0.2).until(
            EC.visibility_of_element_located((By.XPATH, '//div[@class="layui-layer-content"]'))
        )
        res = ele.text

        assert res == expected
