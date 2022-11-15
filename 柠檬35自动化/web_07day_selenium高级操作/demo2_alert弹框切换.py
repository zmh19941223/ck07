import time

from selenium import webdriver

driver = webdriver.Chrome()


driver.get(r'C:\project\python_35\py35_web_test\web_07day_selenium高级操作\demo.html')


driver.find_element_by_id('btn2').click()



# ---------------alert弹框切换--------------
# 获取到alert弹框
alert = driver.switch_to.alert

time.sleep(2)
# 1、点击确定
# alert.accept()

# 2、点击取消
# alert.dismiss()

# 3、获取弹框的提示文本
content = alert.text
print("弹出的提示内容：",content)

alert.dismiss()




time.sleep(5)
driver.quit()