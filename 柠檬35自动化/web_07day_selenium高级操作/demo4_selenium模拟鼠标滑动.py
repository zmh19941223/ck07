from selenium.webdriver import ActionChains
from selenium import webdriver
import time

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get("https://www.runoob.com/try/try.php?filename=jqueryui-api-droppable")

# iframe切换
iframe = driver.find_element_by_id('iframeResult')
driver.switch_to.frame(iframe)

# 定位要操作的元素
ele1 = driver.find_element_by_id('draggable')
ele2 = driver.find_element_by_id('droppable')

actons = ActionChains(driver)

# # 在元素ele1处按下鼠标
# actons.click_and_hold(ele1)
#
# # 移动到元素2上面
# actons.move_to_element(ele2)
#
# # 释放鼠标
# actons.release()

# 移动和元素到指定位置
# actons.move_to_element_with_offset(ele1, 200, 0)

# 执行动作
# actons.perform()
