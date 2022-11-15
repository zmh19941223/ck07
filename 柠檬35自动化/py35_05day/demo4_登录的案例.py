"""
============================
Author:柠檬班-木森
Time:2020/11/12  20:19
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
需求一：实现登录的小案例，如果账号输入正确，打印登录成功，如果账号密码输入错误，则让用户实现重新输入？

需求二：账号密码输入正确之后，如何退出？

"""

u = 'musen'
p = 'lemonban'

# status = 0
# while status == 0:
#     user = input("输入账号:")
#     pwd = input("输入密码：")
#     if user == u and pwd == p:
#         print("账号密码正确，登录成功")
#         status = 1
#     else:
#         print("输入的账号或密码有误,请重新输入！")


# break:强制跳出循环

while True:
    user = input("输入账号:")
    pwd = input("输入密码：")
    if user == u and pwd == p:
        print("账号密码正确，登录成功")
        break
    else:
        print("输入的账号或密码有误,请重新输入！")
