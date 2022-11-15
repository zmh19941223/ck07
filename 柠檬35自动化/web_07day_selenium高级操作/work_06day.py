import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def work1():
    """腾讯客服页面操作"""
    driver = webdriver.Chrome()
    driver.get('https://kf.qq.com/product/weixin.html')
    WebDriverWait(driver, 10, 0.5).until(
        EC.element_to_be_clickable((By.XPATH, "//a[text()='手机版微信']"))).click()
    WebDriverWait(driver, 10, 0.5).until(
        EC.element_to_be_clickable((By.XPATH, "//a[text()='微信群']"))).click()
    WebDriverWait(driver, 10, 0.5).until(
        EC.element_to_be_clickable((By.XPATH, "//a[text()='微信群创建及设置方法']"))).click()
    time.sleep(5)
    driver.quit()
        # EC.presence_of_element_located
        # EC.visibility_of_element_located
        # EC.element_to_be_clickable


def work2():
    # 1、创建一个driver对象，访问qq登录页面,设置隐式等待时间
    browser = webdriver.Chrome()
    browser.get("https://mail.qq.com/")
    browser.implicitly_wait(30)

    # 2、输入账号密码,点击登录
    # 2.0 点击切换到登录的iframe
    browser.switch_to.frame('login_frame')
    # 2.1 点击账号密码登录
    browser.find_element_by_id('switcher_plogin').click()
    # 2.2定位账号输入框，输入账号
    browser.find_element_by_id("u").send_keys("123292678@qq.com")
    # 2.3定位密码输入输入密码
    browser.find_element_by_id("p").send_keys("PYTHON01")
    # 2.4、点击登录
    browser.find_element_by_id('login_button').click()

    # 3、切换到滑动验证码的iframe,点击滑动按钮
    # 3.1切换到滑动验证码的iframe中
    tcaptcha = browser.find_element_by_id("tcaptcha_iframe")
    browser.switch_to.frame(tcaptcha)
    # 3.2选择拖动滑块的节点
    browser.find_element_by_id('tcaptcha_drag_thumb').click()

    # 为了看效果 等5秒之后再退出
    time.sleep(5)
    browser.quit()


if __name__ == '__main__':
    # work1()
    work2()
