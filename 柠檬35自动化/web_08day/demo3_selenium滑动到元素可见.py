import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get('https://www.layui.com/demo/form.html')
driver.implicitly_wait(10)

# 定位选择省份
ele = driver.find_element_by_xpath('(//input[@placeholder="请选择省"])[1]')

# 滑动元素可见的第一种方式
# 滑动到元素处于可见状态，并且返回元素的坐标位置 （注意使用的时候不要加括号）
# loc = ele.location_once_scrolled_into_view
# print(loc)


# 滑动元素可见的第二种方式：js
# js = 'arguments[0].scrollIntoView()'
# driver.execute_script(js, ele)





