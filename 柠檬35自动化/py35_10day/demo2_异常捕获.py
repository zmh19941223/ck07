"""
============================
Author:柠檬班-木森
Time:2020/11/24  20:33
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
try：
    有可能会出错的代码
except:
    当try里面的代码执行出现错误时，会执行exept中的代码,可以在这里对异常进行处理


try：
    有可能会出错的代码
except 异常类型 as e:
    pass




"""

# -----------------捕获所有的常规异常类型-------------------------
# try:
#     number = float(input("请输入一个数字："))
# except:
#     # 可以在这里对异常进行处理
#     # print("当try里面的代码执行出现错误时，会执行exept中的代码")
#     print("您输入的不是数字！")
#     number = 0


# try:
#     number = float(input("请输入一个数字："))
# except Exception as e:
#     # 可以在这里对异常进行处理
#     # print("当try里面的代码执行出现错误时，会执行exept中的代码")
#     print("您输入的不是数字！")
#     number = 0
#     print('错误信息：', e)


# -------------捕获指定的异常类型--------------------------

dic = {'a': 11}

# print(name)
# print(dic["b"])

# try:
#     print("------1------")
#     print(name)
#     print("------2------")
#     print(dic["b"])
# except NameError as e:
#     print(e)

# ---------------捕获多个异常类型：不同异常类型做不同的处理------------------
# try:
#     print("------1------")
#     print(name)
#     print("------2------")
#     print(dic["b"])
# except NameError as e:
#     print("nameError的处理方案")
# except KeyError as e:
#     print("KeyError的处理方案")
