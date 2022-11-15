"""

注意点：
find_element_by_xxx：查找符合规范的元素，并返回的是第一个元素（通常用这个方法）

find_elements_by_xxx：查找符合规范的元素，并以列表的形式返回


xpath定位表达式：

绝对定位：从根路径开始，一级一级往下找

相对定位：



语法：
/   ：  代表根节点，查找元素只能一级一级往下找
//  ：查找子孙元素，不用考虑元素的层级
.   : 代表当前已经选中的节点
..  :  代表当前节点的父节点
*   ： 通配符（表示匹配所有的元素）


谓语（条件）：通过中括号来表示

    1、下标取值：[index]
        xpath的索引是从1开始的
        注意点：xpath的下标使用的时候有坑，使用索引的时候，前后的部分使用括号括起来（索引的优先级高于//）
        例子：(//input)[1]

    2、通过属性筛选：[@属性名=属性值]
        例子： //input[@id='kw']

    3、通过元素的文本进行定位 ：[text()='文本值']
        例子： //a[text()='新闻']


    4、部分匹配函数：
        starts-with：匹配是否以XX开头
            匹配文本：//a[starts-with(text(),'hao')]
            匹配属性：//a[starts-with(@href,'http://news')]

        contains：包含匹配
            匹配文本：//a[contains(text(),'hao')]
            匹配属性：//a[contains(@href,'http://news')]

逻辑运算符
    and :通过多个条件进行筛选 [条件1 and 条件2]
    例子：//input[@type="hidden" and @name='rsv_spt']

    or : 符合多个条件中的一个即可





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
