from selenium import webdriver
import time

driver = webdriver.Chrome()
driver.get("https://mail.qq.com/")
driver.implicitly_wait(5)

# 2、输入账号密码,点击登录
# 2.0 点击切换到登录的iframe
driver.switch_to.frame('login_frame')
# 2.1 点击账号密码登录
driver.find_element_by_id('switcher_plogin').click()
# 2.2定位账号输入框，输入账号
driver.find_element_by_id("u").send_keys("123292678@qq.com")
# 2.3定位密码输入输入密码
driver.find_element_by_id("p").send_keys("PYTHON01")
# 2.4、点击登录
driver.find_element_by_id('login_button').click()

# 3、切换到滑动验证码的iframe,点击滑动按钮
# 3.1切换到滑动验证码的iframe中
tcaptcha = driver.find_element_by_id("tcaptcha_iframe")
driver.switch_to.frame(tcaptcha)
# 3.2选择拖动滑块的节点
driver.find_element_by_id('tcaptcha_drag_thumb').click()


# ------------------从ifram标签种切换回原网页-------
# 切换到默认的网页中
# driver.switch_to.default_content()

# 切换到上一层的iframe中（如果只有一层，就切换到原网页中）
# driver.switch_to.parent_frame()



driver.find_element_by_xpath('//a[text()="基本版"]').click()



# 为了看效果 等5秒之后再退出
time.sleep(5)
driver.quit()
