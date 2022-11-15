import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get('https://www.12306.cn/index/')

# 输入出发地和目的地
form_addr = driver.find_element_by_id('fromStationText')
to_addr = driver.find_element_by_id('toStationText')
# 通过js修改日期的readonly属性
date_ele = driver.find_element_by_id('train_date')

js = """
    console.log(arguments)
    arguments[0].value='长沙';
    arguments[1].value='深圳';
    arguments[2].value='2021-01-02';
"""

driver.execute_script(js, form_addr, to_addr, date_ele)


time.sleep(5)