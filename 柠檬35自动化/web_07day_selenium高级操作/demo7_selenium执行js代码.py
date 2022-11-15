import time

from selenium import webdriver

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get('https://www.12306.cn/index/')

# 直接通过js去修改
# js = "document.getElementById('train_date').value = '2021-01-30'"
# driver.execute_script(js)


# 执行js代码
# js = "document.getElementById('train_date').readOnly = false"
# driver.execute_script(js)
# time.sleep(2)
# # 定位日期输入框
# date_ele = driver.find_element_by_id('train_date')
# # 清空输入框
# date_ele.clear()
# # 输入内容
# date_ele.send_keys('2021-01-30')
