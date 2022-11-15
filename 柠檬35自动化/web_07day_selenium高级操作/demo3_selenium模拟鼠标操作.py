"""
1、点击
    单击
    双击
    右击

2、拖拽



"""
from selenium.webdriver import ActionChains

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

# -----------------------鼠标操作------------------------
# 3.2选择拖动滑块的节点
sli_ele = driver.find_element_by_id('tcaptcha_drag_thumb')

# --------------------点击-------------------
# 创建一个鼠标对象
# action = ActionChains(driver)
# # 单击：
# action.click(sli_ele)
# action.perform()  # 执行动作
# -------------------------
# action2 = ActionChains(driver)
# 鼠标右击
# action2.context_click(sli_ele)
# action2.perform()

# ----------------------------
# action2 = ActionChains(driver)
# # 鼠标双击
# action2.double_click(sli_ele)
# action2.perform()


action2 = ActionChains(driver)

# -------------按下鼠标----------------
action2.click_and_hold(sli_ele)

# -------------移动鼠标--------------
action2.move_by_offset(xoffset=180, yoffset=0)

# ----------释放鼠标--------------
action2.release()

# 执行动作
action2.perform()
