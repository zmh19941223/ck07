import time

from selenium import webdriver

driver = webdriver.Chrome()

driver.get('https://www.layui.com/demo/upload.html')

#  上传文件
#  方式一：找到对应的input标签，直接使用send_keys输入文件路径
# input_ele = driver.find_element_by_xpath('//button[@id="test1"]/../input')
# input_ele.send_keys(r'C:\课件\images\qqpyimg1611646830.gif')


#  如果找不到上传文件的input标签：
# 解决方案一： pc端自动化的库：
# 1、pywinauto(只能再windows下面使用)  安装的时候也会有问题，和python很多版本不兼容的（3.7.3）
# pip install pywinauto

# 点击上传文件的按钮，打开文件上传的窗口
# driver.find_element_by_id('test1').click()
# # 强制等待
# time.sleep(2)
# from pywinauto.keyboard import send_keys
# send_keys(r'C:\课件\images\qqpyimg1611646830.gif')
# send_keys('{VK_RETURN}')


# ------------------上传多张图片-------------
# 点击上传文件的按钮，打开文件上传的窗口
# driver.find_element_by_id('test2').click()
# # 强制等待
# time.sleep(2)
# from pywinauto.keyboard import send_keys
# send_keys(r'"C:\课件\images\qqpyimg1611646830.gif"')
# send_keys(r'"C:\课件\images\4.png"')
# send_keys('{VK_RETURN}')


# 2、pyautogui(mac，linux,windows通用)
# 安装命令 pip install pyautogui
# 缺点： 上传的文件路径中不能出现中文

driver.find_element_by_id('test2').click()
# 强制等待
time.sleep(2)
import pyautogui
pyautogui.write(r"C:\Users\MuSen\3.png")
pyautogui.press('enter', 2)
