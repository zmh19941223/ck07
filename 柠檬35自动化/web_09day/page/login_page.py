"""
============================
Author:柠檬班-木森
Time:2021/2/3 21:55
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
"""
PO模式（POM）： Page Object Model
    可读性
    可维护性
    扩展性
    页面逻辑和测试逻辑分离。
    可复用性
    wait_element 封装，避开各种各样的切换。

登录页面：
    1、登录操作（，输入账号，输入密码，点击登录）
    2、获取页面上的文本提示
    3、获取弹框的错误提示



"""
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


class LoginPage:

    def __init__(self, driver):
        self.driver = driver

    def login(self, mobile, pwd):
        self.driver.find_element_by_xpath('//input[@placeholder="手机号"]').send_keys(mobile)
        # 2、输入密码
        self.driver.find_element_by_xpath('//input[@placeholder="密码"]').send_keys(pwd)
        # 3、点击登录
        self.driver.find_element_by_xpath("//button[text()='登录']").click()

    def get_error_text(self):
        res = self.driver.find_element_by_xpath("//div[@class='form-error-info']").text
        return res

    def get_pop_window_info(self):
        ele = WebDriverWait(self.driver, 5, 0.2).until(
            EC.visibility_of_element_located((By.XPATH, '//div[@class="layui-layer-content"]'))
        )
        res = ele.text
        return res
