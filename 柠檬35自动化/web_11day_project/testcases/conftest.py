"""
============================
Author:柠檬班-木森
Time:2021/2/20 20:33
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""

import pytest
from selenium import webdriver


@pytest.fixture
def open_browser():
    """打开浏览器"""
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.implicitly_wait(10)
    yield driver
    driver.quit()
