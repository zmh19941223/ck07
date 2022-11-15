"""
============================
Author:柠檬班-木森
Time:2021/2/5 21:34
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
"""
# ------老师账号----------
1、老师账号 登录    --->登录页面

2、点开课程        ---> 首页  


3、点击考勤        ---> 课程页面
4、点击新建考勤     --->课程页面
5、点击数字考勤     --->课程页面
6、点击开始考勤     --->课程页面
7、保存考勤码       --->课程页面

#  ------学生账号----------

1、学生登录      --->登录页面
2、点开课程       ---> 首页  

3、点击考勤       --->课程页面 
4、输入考勤码      --->课程页面


#  校验考勤是否成功
1、校验学生端考勤是否成功   ---->成绩展示页面
2、校验老师端考勤人数是否+1   --->课程页面


"""
from selenium import webdriver

driver = webdriver.Chrome()
driver.implicitly_wait(15)
driver.get('https://www.ketangpai.com/User/login.html')

#  输入老师账号密码
driver.find_element_by_xpath('placeholder="邮箱/账号/手机号"').send_keys('1303845892@qq.com')
driver.find_element_by_xpath('placeholder="邮箱/账号/手机号"').send_keys('nmb_python')
driver.find_element_by_xpath('//div[@class="padding-cont pt-login"]//a[@class="btn-btn"]').click()
# 点击进入课程
driver.find_element_by_xpath('//a[@title="Renee Brooks"]').click()

# 点击考勤
driver.find_element_by_xpath('//i[@class="iconfont iconkaoqin"]/..').click()

# 新建考勤
driver.find_element_by_xpath('//a[@class="btn-createattend"]').click()

# 数字考勤
driver.find_element_by_xpath('//div[@class="iconarea digit"]').click()

# 点击开始考勤
driver.find_element_by_xpath('//div[@id="new-perform"]//a[text()="开始考勤"]').click()

# 提取考勤码
text = driver.find_element_by_xpath('//div[@class="number-box"]').text
text = text.replace(' ', '')

# ----------------------

driver = webdriver.Chrome()
driver.implicitly_wait(15)
driver.get('https://www.ketangpai.com/User/login.html')

#  输入老师账号密码
driver.find_element_by_xpath('placeholder="邮箱/账号/手机号"').send_keys('408848063@qq.com')
driver.find_element_by_xpath('placeholder="邮箱/账号/手机号"').send_keys('nmb_python')
driver.find_element_by_xpath('//div[@class="padding-cont pt-login"]//a[@class="btn-btn"]').click()