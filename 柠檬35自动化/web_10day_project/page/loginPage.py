"""
============================
Author:柠檬班-木森
Time:2021/2/5 20:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""

from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

"""
页面元素定位的优化：
1、将所有操作的元素定位方式  保存为页面类类属性

2、单独抽取一个定位的模块



"""

#
# class LoginPage:
#     """登录页面"""
#     mobile_loc = (By.XPATH, '//input[@placeholder="手机号"]')
#     pwd_loc = (By.XPATH, '//input[@placeholder="密码"]')
#     login_btn_loc = (By.XPATH, "//button[text()='登录']")
#     page_error_info_loc = (By.XPATH, "//div[@class='form-error-info']")
#     pop_windows_info_loc = (By.XPATH, '//div[@class="layui-layer-content"]')
#
#     def __init__(self, driver: WebDriver):
#         self.driver = driver
#
#     def login(self, user, pwd):
#         """登录操作"""
#         # 1、输入账号
#         self.driver.find_element(*self.mobile_loc).send_keys(user)
#         # 2、输入密码
#         self.driver.find_element(*self.pwd_loc).send_keys(pwd)
#         # 3、点击登录
#         self.driver.find_element(*self.login_btn_loc).click()
#
#     def get_page_error_info(self):
#         """获取页面上的错误提示"""
#         res = self.driver.find_element(*self.page_error_info_loc).text
#         return res
#
#     def get_pop_windows_error_info(self):
#         """获取弹窗的错误提示信息"""
#         ele = WebDriverWait(self.driver, 5, 0.2).until(
#             EC.visibility_of_element_located(self.pop_windows_info_loc)
#         )
#         return ele.text


from locator.userLocator import LoginLocator as loc


class LoginPage:
    """登录页面"""

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def login(self, user, pwd):
        """登录操作"""
        # 1、输入账号
        self.driver.find_element(*loc.mobile_loc).send_keys(user)
        # 2、输入密码
        self.driver.find_element(*loc.pwd_loc).send_keys(pwd)
        # 3、点击登录
        self.driver.find_element(*loc.login_btn_loc).click()

    def get_page_error_info(self):
        """获取页面上的错误提示"""
        res = self.driver.find_element(*loc.page_error_info_loc).text
        return res

    def get_pop_windows_error_info(self):
        """获取弹窗的错误提示信息"""
        ele = WebDriverWait(self.driver, 5, 0.2).until(
            EC.visibility_of_element_located(loc.pop_windows_info_loc)
        )
        return ele.text
