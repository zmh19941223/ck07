"""
============================
Author:柠檬班-木森
Time:2021/2/20 20:33
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""

import pytest
from common.handler_log import my_log
from selenium import webdriver
from datas import global_data as GD
from page.loginPage import LoginPage


@pytest.fixture
def open_browser():
    """打开浏览器"""
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.implicitly_wait(10)
    yield driver
    driver.quit()


@pytest.fixture
def teach_login():
    """老师登录"""
    driver = webdriver.Chrome()
    driver.implicitly_wait(15)
    driver.maximize_window()
    driver.get(GD.login_url)
    # 老师登录
    my_log.info("====老师身份进行登录====")
    login_page = LoginPage(driver)
    login_page.login(GD.teach_user, GD.teach_pwd)
    yield driver

    driver.quit()


@pytest.fixture
def student_login():
    """学生登录"""
    driver = webdriver.Chrome()
    driver.implicitly_wait(15)
    driver.maximize_window()
    driver.get(GD.login_url)
    # 学生登录
    my_log.info("====学生身份进行登录====")
    login_page = LoginPage(driver)
    login_page.login(GD.student_user, GD.student_pwd)
    yield driver

    driver.quit()
