import time
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get('https://www.12306.cn/index/')
driver.implicitly_wait(10)


# ----------------js滑动窗口页面-------------------
#
# old_win = driver.window_handles
#
# js = 'window.open(arguments[0])'
# driver.execute_script(js, "https://www.baidu.com")
#
# # 等待新窗口打开
# WebDriverWait(driver, 20, 0.5).until(
#     EC.new_window_is_opened(old_win)
# )
# new_wins = driver.window_handles
# driver.switch_to.window(new_wins[-1])
#
# driver.find_element_by_id('kw').send_keys('python')


def open_new_window_and_switch(driver, url):
    """新窗口打开页面并进行切换"""
    old_win = driver.window_handles
    js = 'window.open(arguments[0])'
    driver.execute_script(js, url)
    # 等待新窗口打开
    WebDriverWait(driver, 20, 0.5).until(
        EC.new_window_is_opened(old_win)
    )
    new_wins = driver.window_handles

    driver.switch_to.window(new_wins[-1])


open_new_window_and_switch(driver, 'https://www.taobao.com')
