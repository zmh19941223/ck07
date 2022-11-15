"""
CSS定位：

1、层级查找

查找所有的a标签：a

查找所有的a标签或者p标签：a,p


2、谓语（条件）

    [属性 = 值]





"""
import time

from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.ketangpai.com/User/login.html')

#  xpath定位练习

# id为login的div
# div = driver.find_element_by_xpath('//*[@id="login"]')

# div.find_element_by_xpath('./div[2]/div[1]/input').send_keys('1212')

#
# driver.find_element_by_xpath('//input[@placeholder="密码"]')

time.sleep(5)
driver.quit()
