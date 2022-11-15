"""
============================
Author:柠檬班-木森
Time:2021/2/5 20:34
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver


class IndexPage:
    user_loc = (By.XPATH, "//a[contains(text(),'我的帐户')]")

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def is_login_success(self):
        try:
            self.driver.find_element(*self.user_loc)
        except:
            res = "登录失败"
        else:
            res = "登录成功"
        return res
