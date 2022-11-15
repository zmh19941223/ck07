from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.baidu.com')

"""
1、安装selenium
    pip install selenium
    
    
2、下载chromedriver (https://npm.taobao.org/mirrors/chromedriver/71.0.3578.80/)

 
3、解压：
    1、windows:将解压之后的chromedriver.exe放入python的安装路径中
    2、msc:将解压之后的chromedriver.放入/usr/local/bin目录中

4、运行如下代码：测试环境是否安装成功

from selenium import webdriver
driver = webdriver.Chrome()
driver.get('https://www.baidu.com')

"""
