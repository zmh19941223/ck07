"""
============================
Author:柠檬班-木森
Time:2020/12/3  21:30
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

import openpyxl

workbook = openpyxl.load_workbook('test001.xlsx')
sh = workbook["musen"]

# rows:按行获取表单中所有的格子,每一行的格子放到一个元组中
res = list(sh.rows)

# title = res[0]
# print(title)
# n = []
# for i in title:
#     n.append(i.value)

#  获取excel中第一行的数据
title = [i.value for i in res[0]]
# print(title)

cases = []
for item in res[1:]:
    data = [i.value for i in item]
    dic = dict(zip(title,data))
    # print(dic)
    cases.append(dic)

print(cases)



# r2 = [i.value for i in res[1]]
# print(r2)
# print(dict(zip(title, r2)))
#
# r3 = [i.value for i in res[2]]
# print(r3)
# print(dict(zip(title, r3)))
#
# r4 = [i.value for i in res[3]]
# print(r4)
# print(dict(zip(title, r4)))
