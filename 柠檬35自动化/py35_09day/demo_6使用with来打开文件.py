"""
============================
Author:柠檬班-木森
Time:2020/11/21  9:45
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
with  as  :上下文管理器协议的启动器(扩展)


with open去操作文件会自动关闭文件（记住）

"""

# 1、打开文件，返回文件的句柄
with open(file='log.jpg', mode='rb') as f:
    res = f.read()
    print(res)
