
import time
from selenium import webdriver
from selenium.webdriver.support.select import Select


"""
Select下拉选择框


第一种：原生html标签select实现的
    可以使用from selenium.webdriver.support.select import Select来进行操作和选择


第二种：前端框架组件实现的
    没有现成的操作方法，只能定位选框，点击显示选项，再点击对应的选项


"""

# --------------------原生html标签select实现的选择框-------------------
# driver = webdriver.Chrome()
# driver.get(r'C:\project\python_35\py35_web_test\web_07day_selenium高级操作\demo.html')
#
# time.sleep(2)
# # 定位选中框
# ele = driver.find_element_by_id('city')
# # 创建一个选择对象
# select = Select(ele)
# # 通过选项文本进行选择
# select.select_by_visible_text('广州')
# time.sleep(2)
# # 通过选项的value属性进行选择
# select.select_by_value('sh')
# time.sleep(2)
# # 通过选项的索引进行选择
# select.select_by_index(3)





