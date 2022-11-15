import requests

# 发送一个最简单get的请求
url = "http://www.lemonban.com/"
response = requests.get(url=url)
#  --------------------------------响应信息的获取----------------------------------------
# 1、获取返回的响应状态码
# print(response.status_code)

# 2、获取响应头：
# print(response.headers)

# 3、获取响应体：
# 方式一：自动识别返回内容的编码，进行解码（有可能会出现错误或乱码）
# 对返回任意类型的数据都可以使用该方式去获取
# print(response.text)

# 方式二：指定编码对返回内容进行解码
# print(response.content.decode('utf-8'))


# 方式三：只能在返回数据是json的情况下才能使用该方法（接口测试常用），
# 优点：会自动化返回的json转换为对应的python数据类型
# print(response.json())  # 如果返回的不是json，调用改方法会直接报错

#  --------------------------------请求信息的获取----------------------------------------
# 1、获取请求头
# print(response.request.headers)

# 2、获取请求体
# print(response.request.body)
