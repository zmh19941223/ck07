"""
============================
Author:柠檬班-木森
Time:2021/2/3 20:24
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
from selenium import webdriver

drievr = webdriver.Chrome()
drievr.get('http://8.129.91.152:8765/Index/login.html')

# 1、输入账号
drievr.find_element_by_xpath('//input[@placeholder="手机号"]').send_keys('18684720553')
# 2、输入密码
drievr.find_element_by_xpath('//input[@placeholder="密码"]').send_keys('python')
# 3、点击登录
drievr.find_element_by_xpath("//button[text()='登录']").click()


