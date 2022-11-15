"""
============================
Author:柠檬班-木森
Time:2020/11/21  10:54
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
1、什么模块？
    一个以.py结尾的文件就是一个python模块

2、什么是包？
    一个包含__init__.py的文件夹，称之为一个python包


注意点：和变量命名规范一样（尽量简短）


3、模块和包导入
导入的关键字： from  import

模块导入：
import 模块名

# 自定义的模块在导入的时候，要从项目的根目录开始一级一级往下找
from xxx.xx import xxx

"""

#  --------------------模块导入---------------------
import random

res = random.random()
# print(res)
# import musen

# from py35_09day.demo_7package import musen
# print(musen.name)
# musen.print_func(5)


# -------------------包导入------------------
import requests
from requests import sessions

# 不推荐
# from py35_09day.demo_7package import pack01
# print(pack01.name)


# 推荐
# from py35_09day.demo_7package.pack01 import text_01
# print(text_01.name)

