import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get('https://www.12306.cn/index/')
driver.implicitly_wait(10)

# ----------------js滑动窗口页面-------------------
# js = 'window.scrollBy(0,arguments[0])'
#
# driver.execute_script(js, 500)


# js = 'window.scrollTo(0,arguments[0])'
# driver.execute_script(js, 500)