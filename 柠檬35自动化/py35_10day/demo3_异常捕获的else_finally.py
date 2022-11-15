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
    有可能会出错的代码(try会去监测代码执行是否出错)
except:
    当try里面的代码执行出现错误时，会执行except中的代码,可以在这里对异常进行处理
else:
    try中的代码执行没有错误，则会执行else中的代码
finally:
    不管try中的代码执行是否出错，都会执行finally中的代码

"""

# ---------------------else---------------
# 读取data1.txt文件中的内容， 然后再写入： python 你好

# try:
#     with open('data1.txt', "r", encoding='utf-8') as f:
#         res = f.read()
# except:
#     print("data1.txt这个文件不存在")
# else:
#     print(res)
#
# with open('data1.txt', "w", encoding='utf-8') as f:
#     f.write('python 你好')


# -------------------finally---------------

# name = 'musen'
#
# try:
#     print(name)
# except NameError:
#     # res = 11 + '11'
#     print("代码出错了")
# else:
#     print("代码没出错")
# finally:
#     print("finally执行了")

# print("----9999---------")
