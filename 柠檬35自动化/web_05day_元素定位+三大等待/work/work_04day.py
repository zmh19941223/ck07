from selenium import webdriver

# 启动浏览器
driver = webdriver.Chrome()
# 打开课堂派登录页面
driver.get('https://www.ketangpai.com/User/login.html')
# 对当前页面截图
driver.save_screenshot('page.png')
# 获取页面标题
title = driver.title
print(title)
# 获取页面的url
url = driver.current_url
print(url)
# 输入账号
driver.find_element_by_xpath('//*[@id="login"]/div[2]/div[1]/input').send_keys('3247119728@qq.com')
# 输入密码
driver.find_element_by_xpath('//*[@id="login"]/div[2]/div[2]/input').send_keys('3247119728@qq.com')
# 点击登录
driver.find_element_by_xpath('//*[@id="login"]/div[2]/a[1]').click()
# 窗口最大化
driver.maximize_window()
# 对页面进行截图
driver.save_screenshot('page2.png')
# 获取当前窗口的句柄
win = driver.current_window_handle
print(win)



