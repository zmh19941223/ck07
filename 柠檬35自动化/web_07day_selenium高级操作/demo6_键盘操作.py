from selenium.webdriver.common.keys import Keys
from selenium import webdriver

drievr = webdriver.Chrome()
drievr.implicitly_wait(5)
drievr.get('https://www.baidu.com')

# 输入python
drievr.find_element_by_id('kw').send_keys('python')

# 键盘按下ctrl+a
# drievr.find_element_by_id('kw').send_keys(Keys.CONTROL, 'a')
# drievr.find_element_by_id('kw').send_keys(Keys.CONTROL, 'c')
# drievr.find_element_by_id('kw').send_keys(Keys.CONTROL, 'v')
# drievr.find_element_by_id('kw').send_keys(Keys.CONTROL, 'v')
# drievr.find_element_by_id('kw').send_keys(Keys.CONTROL, 'v')

drievr.find_element_by_id('kw').send_keys(Keys.ENTER)