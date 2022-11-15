from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.implicitly_wait(3)

driver.get('https://mail.qq.com/')

#------------------iframe标签切换----------
# 方式一：通过iframe标签的name属性
driver.switch_to.frame('login_frame')


# 方式二：先定位iframe标签，在进行切换
# loc_ifr = (By.ID,'login_frame')
# iframe_ele = driver.find_element(*loc_ifr)
# driver.switch_to.frame(iframe_ele)



loc_btn = (By.ID, 'switcher_plogin')
driver.find_element(*loc_btn).click()
