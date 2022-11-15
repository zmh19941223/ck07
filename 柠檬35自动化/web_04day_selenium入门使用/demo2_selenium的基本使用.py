"""
selenium操作浏览器的原理：


selenium                  http协议
(写的python代码)客户端-----------------> webdriver的服务器--->(浏览器的驱动：chromedriver) ------------------>浏览器

"""
from selenium import webdriver
import time

# 1、启动浏览器（通过wevdriver创建了一个服务,），
driver = webdriver.Chrome()

# ------------------------driver对象的方法------------------------
# 2、打开网页
driver.get('https://www.baidu.com')

time.sleep(2)  # 等待2秒再往下执行
# driver.get('https://www.taobao.com')
# 3、窗口最大化
# driver.maximize_window()

# 4、窗口最小化
# driver.minimize_window()

# 5、关闭浏览器，退出chromedriver,
# driver.quit()

# 6、返回上一个页面
# driver.back()

# time.sleep(2)
# 7、进入下一个页面
# driver.forward()

# 8、刷新页面
# driver.refresh()

# 9、页面截图（保存当前页面为图片）
# driver.save_screenshot('page.png')

#  扩展：后面的知识点(执行js代码)
# js = 'window.open("https://www.taobao.com")'
# driver.execute_script(js)


# ---------------------------driver对象的属性---------------------------------
# 1、获取页面的标题
# title = driver.title
# print(title)

# 2、获取页面的源代码
# html = driver.page_source
# print(html)

# # 3、获取当前窗口的句柄（编号）
# win = driver.current_window_handle
# print(win)
#
# # 4、获取浏览打开的所有窗口的句柄
# wins = driver.window_handles
# print(wins)

# # 5、获取当前页面的url地址
# url = driver.current_url
# print(url)


time.sleep(5)
# 关闭driver对象
driver.quit()
