import time

from selenium.webdriver import Chrome
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

"""
定位表达式再浏览器上能够定位到，放到代码种定位不到的原因：

1、网页内容未加载完，就去找元素，导致报错找不到元素
解决方法：加等待


等待方式：
    1、强制等待:
        time.sleep(2)：代码执行到time.sleep(n)的时候，强制暂停n秒之后再往下执行
    
    
    2、隐式等待：通过driver.implicitly_wait()方法设置隐式等待的时间，设置一次对driver的整个生命周期生效。
             等待元素出现，再往下执行，如果元素超过了设置的最大等待时间还未出现，就会报错：等待超时
    
    3、显式等待：可以指定等待元素处于某个状态
        1、等待元素的定位表达式
            loc = （BY.XPATH,'表达式'）
    
        2、使用WebDriverWait创建一个等待对象，需要三个参数
            参数1：driver对象
            参数2：等待的最大时间
            参数3：轮询时间（每间隔多次时间去查询一次元素是否满足等待条件）
            
        3、创建一个等待条件对象,传入定位表达式
            ec = EC.presence_of_element_located(loc)
        
        4、调用等待对象的until()，方法传入等待的条件   
        
    from selenium.webdriver.support.wait import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.common.by import By
"""

driver = Chrome()
driver.get('https://www.baidu.com/')

# 输入柠檬班，点击搜索
driver.find_element_by_id('kw').send_keys('柠檬班')
driver.find_element_by_id('su').click()

# loc_input = (By.ID, 'kw')
# loc_btn = (By.ID, 'su')
# driver.find_element(*loc_input).send_keys('柠檬班')
# driver.find_element(*loc_btn).click()
# --------------------
# # 定位表达式
# loc = (By.XPATH, "//span[text()='百度热榜']")
# # 创建一个等待对象
# wt = WebDriverWait(driver, 20, 0.5)
# # 创建一个等待条件的对象
# ec = EC.presence_of_element_located(loc)
# # 调用等待对象的until方法进行等待
# wt.until(ec)
# -----------------------

# WebDriverWait(driver, 20, 0.5).until(
#     EC.presence_of_element_located(
#         (By.XPATH, '//span[text()="百度热榜"]')
#     )
# )


# 点击抗肺炎
driver.find_element_by_xpath("//span[text()='百度热榜']")

time.sleep(5)
driver.quit()
