import time

from selenium.webdriver import Chrome

"""
定位表达式再浏览器上能够定位到，放到代码种定位不到的原因：

1、网页内容未加载完，就去找元素，导致报错找不到元素
解决方法：加等待

等待方式：
    1、强制等待:
    time.sleep(2)：代码执行到time.sleep(n)的时候，强制暂停n秒之后再往下执行
    
    
    2、隐式等待：通过driver.implicitly_wait()方法设置隐式等待的时间，设置一次对driver的整个生命周期生效。
             等待元素出现，再往下执行，如果元素超过了设置的最大等待时间还未出现，就会报错：等待超时
    
    3、显式等待：


2、 可能在打开了新窗口，切换窗口


3、页面中有iframe标签，元素在iframe中


"""

driver = Chrome()

# 设置隐式等待时间
# driver.implicitly_wait(15)

driver.get('https://www.baidu.com/')

# 输入柠檬班，点击搜索
driver.find_element_by_id('kw').send_keys('柠檬班')
driver.find_element_by_id('su').click()

# 设置强制等待的时间为5秒
# time.sleep(2)

# 点击抗肺炎
driver.find_element_by_xpath("//span[text()='百度热榜']")

time.sleep(5)
driver.quit()
