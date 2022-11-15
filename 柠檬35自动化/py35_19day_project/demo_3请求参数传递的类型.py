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

# # 请求地址：
# url = "https://www.ketangpai.com/UserApi/login"
# # 请求参数：
# params = {
#     "email": "3247119728@qq.com",
#     "password": "nmb13343243122",
#     "remember": 0
# }
# # data:专门用来专递表单类型的参数(content-type: application/x-www-form-urlencoded)
# response = requests.post(url=url, data=params)
# print(response.json())

# ======================参数类型：application/json==============================
# 项目中的注册接口：post请求
# 请求地址
# url = "http://api.lemonban.com/futureloan/member/register"
# # 请求头
# head = {
#     "X-Lemonban-Media-Type": "lemonban.v1"
# }
# # 请求参数：
# params = {
#     "mobile_phone": "13778907511",
#     "pwd": "lemonban"
# }
# # 发送请求的之后添加请求头使用heades
# # 参数类型是json情况下，需要时json来传递参数
# response = requests.post(url=url, headers=head, json=params)
# print(response.text)


#  =========================get请求的参数（查询字符串参数）=======================
# 方式一：查询字符串参数：可以直接拼接在url地址上
# 接口地址后面使用?拼接参数，参数=参数值（如果有多个参数则使用&进行连接）
# url = "http://api.lemonban.com/futureloan/loans?pageIndex=1&pageSize=20"
# head = {
#     "X-Lemonban-Media-Type": "lemonban.v1"
# }
# response = requests.get(url=url, headers=head)
# print(response.text)

# 方式二：使用params进行传递：
# url = "http://api.lemonban.com/futureloan/loans"
# head = {
#     "X-Lemonban-Media-Type": "lemonban.v1"
# }
# params = {
#     "pageIndex": 1,
#     "pageSize": 20
# }
# response = requests.get(url=url, params=params, headers=head)
# print(response.text)


# ===========================content-type:form-data==（了解即可）==================
# 通过用来进行文件上传：
# requests.post(url="", files="")
