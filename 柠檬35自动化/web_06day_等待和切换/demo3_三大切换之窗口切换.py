from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.implicitly_wait(3)

driver.get('http://www.qq.com')

loc_news = (By.XPATH, "//a[text()='新闻']")
loc_bj = (By.XPATH, "//ul[@id='main-list']//a[text()='北京']")

# print('点击之前的窗口句柄：',driver.current_window_handle)
# print(driver.window_handles)

# old_win = driver.current_window_handle

# 点击新闻
driver.find_element(*loc_news).click()

# 通过显示等待 等待新窗口出现(为了确保代码的稳定性，最好通过显式等待等待新窗口打开之后在进行切换操作)
WebDriverWait(driver, 5, 0.5).until(
    EC.new_window_is_opened(driver.window_handles)
)
# 切换到打开的新窗口
wins = driver.window_handles
driver.switch_to.window(wins[-1])

# print('点击之后的窗口句柄：',driver.current_window_handle)
# print(driver.window_handles)


# 点击北京
driver.find_element(*loc_bj).click()
