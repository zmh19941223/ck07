import time

from selenium import webdriver

driver = webdriver.Chrome()

driver.get('https://www.baidu.com')
time.sleep(2)

# ------------------driver对象查找页面元素的方法----------------
# 1、通过元素id属性查找元素  《这个是重点》
# element = driver.find_element_by_id('kw')

# 2、通过元素class属性查找元素(通常不用，因为找到的元素不唯一)
# element = driver.find_element_by_class_name('s_ipt')
# print(element)

# 3、通过标签名查找元素(通常不用，因为找到的元素不唯一)
# ele = driver.find_element_by_tag_name('input')
# print(ele)

# 4、通过链接标签（a）的文本去查找 （不常用）
# ele = driver.find_element_by_link_text('新闻')
# print(ele)

# 5、通过链接标签（a）的文本去查找(部分匹配)  （不常用）
# ele = driver.find_element_by_partial_link_text('新')
# print(ele)

# 6 通过元素的name属性查找元素（不常用）
# ele = driver.find_element_by_name('wd')
# print(ele)

# 7、通过xpath定位表达式去查找  (重点定位特别精准)
# ele = driver.find_element_by_xpath('//*[@id="kw"]')
# ele.send_keys('柠檬班')

# 8、通过css定位表达式去查找
# ele = driver.find_element_by_css_selector('#kw')
# ele.send_keys('python')



# -----------------元素的基本操作方法------------------------
# 1、输入
element = driver.find_element_by_id('kw')
element.send_keys('柠檬班')

# 2、点击
driver.find_element_by_id('su').click()

time.sleep(5)
driver.quit()

# requests   # 自动导包：alt + enter
