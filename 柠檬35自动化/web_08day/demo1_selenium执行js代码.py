import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get('https://www.12306.cn/index/')

# 输入出发地和目的地
form_addr = driver.find_element_by_id('fromStationText')
form_addr.clear()
form_addr.send_keys('北京')
form_addr.send_keys(Keys.ENTER)

to_addr = driver.find_element_by_id('toStationText')
to_addr.clear()
to_addr.send_keys('上海')
to_addr.send_keys(Keys.ENTER)

# 勾选学生和高铁动车
driver.find_element_by_xpath('//li[@id="isStudentDan"]/i').click()
driver.find_element_by_xpath('//li[@id="isHighDan"]/i').click()

# 通过js修改日期的readonly属性
date_ele = driver.find_element_by_id('train_date')

# 通过js代码修改元素的value属性
# js = 'arguments[0].value=arguments[1]'
#  arguments = [date_ele,'2021-01-31']
# driver.execute_script(js, date_ele, '2021-02-05')

# 通过js代码修改元素的readonly
js = 'arguments[0].readOnly=false'
driver.execute_script(js, date_ele)
# 执行完js代码之后，再执行其他的selenium操作相同的元素，必须加强制等待
time.sleep(2)
date_ele.clear()
date_ele.send_keys('2021-02-03')
