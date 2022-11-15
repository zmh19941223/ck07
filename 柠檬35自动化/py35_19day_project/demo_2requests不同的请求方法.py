import requests

# 项目中的注册接口：post请求
# # url = "http://api.lemonban.com/futureloan/member/register"
# # response = requests.post(url=url)
# # print(response.text)


"""
# 课堂派登录接口
https://www.ketangpai.com/UserApi/login
参数:
    "email": "账号",
    "password": "密码",
    "remember": 0
请求方法：post
参数类型：content-type: application/x-www-form-urlencoded(表单类型的参数)

"""
# 请求地址：
url = "https://www.ketangpai.com/UserApi/login"
# 请求参数：
params = {
    "email": "3247119728@qq.com",
    "password": "nmb13343243122",
    "remember": 0
}
# data:专门用来专递表单类型的参数(content-type: application/x-www-form-urlencoded)
response = requests.post(url=url, data=params)
print(response.json())

#  get请求：
# requests.get()

# put请求
# requests.put()

# 常用的请求类型  requests中都封装了请求方法，直接使用requests去调用就可以了
# .....