"""
============================
Author:柠檬班-木森
Time:2021/2/5 21:17
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
import pytest
from selenium import webdriver


@pytest.fixture(scope="function")
def login_fixture():
    # # 用例前置操作
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    driver.get('http://8.129.91.152:8765/Index/login.html')

    yield driver

    # 用例后置操作
    driver.quit()
