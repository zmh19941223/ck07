"""
============================
Author:柠檬班-木森
Time:2021/2/3 20:04
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
import time
from selenium import webdriver
from pywinauto.keyboard import send_keys


def work1():
    drievr = webdriver.Chrome()
    drievr.get('https://www.12306.cn/index/')
    res = drievr.find_element_by_id("index_ads").location_once_scrolled_into_view
    print(res)

    time.sleep(2)
    drievr.quit()


def upload_file(*args):
    time.sleep(2)
    for path in args:
        send_keys('"{}"'.format(path))
    send_keys('{VK_RETURN}')


def work2():
    driver = webdriver.Chrome()
    driver.get('https://www.layui.com/demo/upload.html')
    driver.find_element_by_id('test2').click()

    upload_file(r"C:\课件\images\qqpyimg1611646830.gif")
    time.sleep(10)


work2()
