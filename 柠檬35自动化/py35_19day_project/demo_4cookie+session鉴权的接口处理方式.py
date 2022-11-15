import requests

"""

# ===============表单类型的参数=========content-type: application/x-www-form-urlencoded===========================
# 课堂派登录接口
https://www.ketangpai.com/UserApi/login
参数:
    "email": "账号",
    "password": "密码",
    "remember": 0
请求方法：post
参数类型：content-type: application/x-www-form-urlencoded(表单类型的参数)

"""
# 创建一个会话对象（使用这个session对象去发生请求，回自动化记录请求的cookie信息，下一次请求回自动化添加cookie）
s = requests.session()

# 请求地址：
url = "https://www.ketangpai.com/UserApi/login"
# 请求参数：
params = {
    "email": "3247119728@qq.com",
    "password": "nmb123321",
    "remember": 0
}
# data:专门用来专递表单类型的参数(content-type: application/x-www-form-urlencoded)
response = s.post(url=url, data=params)
print(response.json())


# 课堂派获取课程内容的接口
url = "https://www.ketangpai.com/CourseApi/lists"
response = s.get(url=url)
print(response.text)
