"""
============================
Author:柠檬班-木森
Time:2021/2/5 20:46
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
from selenium.webdriver.common.by import By


class LoginLocator:
    """登录页面的定位表达式"""
    mobile_loc = (By.XPATH, '//input[@placeholder="手机号"]')
    pwd_loc = (By.XPATH, '//input[@placeholder="密码"]')
    login_btn_loc = (By.XPATH, "//button[text()='登录']")
    page_error_info_loc = (By.XPATH, "//div[@class='form-error-info']")
    pop_windows_info_loc = (By.XPATH, '//div[@class="layui-layer-content"]')
