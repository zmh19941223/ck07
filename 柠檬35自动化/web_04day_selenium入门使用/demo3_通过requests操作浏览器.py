"""
selenium操作浏览器的原理：


selenium                  http协议
(写的python代码)客户端-----------------> webdriver的服务器--->(浏览器的驱动：chromedriver) ------------------>浏览器

"""
# import requests
#
# # 启动chromedriver
# import os
# os.popen("chromedriver")
#
#
# #
# data = {
#     "capabilities": {
#         "browserName": "chrome",
#     },
#     'desiredCapabilities': {}
# }
# response = requests.post(url="http://localhost:9515/session", json=data)
# sessionid = response.json()["sessionId"]
# print("当前会话的sessionid：", sessionid)
#
#
#
# # 让浏览器打开百度
# data1 = {"url": "http://www.baidu.com"}
# url = "http://localhost:9515/session/{}/url".format(sessionid)
# requests.post(url=url, json=data1)
