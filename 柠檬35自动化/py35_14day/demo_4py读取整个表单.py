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

#  获取excel中第一行的数据
title = [i.value for i in res[0]]

cases = []
# 遍历第一行以外所有的行
for item in res[1:]:
    # 获取改行的数据
    data = [i.value for i in item]
    # 第一行的数据和当前这行数据打包为字典
    dic = dict(zip(title, data))
    # 把字典添加到cases这个列表中
    cases.append(dic)

print(cases)
