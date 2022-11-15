"""
============================
Author:柠檬班-木森
Time:2020/11/10  20:18
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
keys：获取字典中所有的键
values: 获取所有的值
items：同时获取字典中的键和值,每个元素的键和值会保存再一个元组中

# 使用场景：和后续内容的for循环一起使用



copy:复制字典


"""

dic = {"name": "msuen", "age": 18, 'gender': "男"}

# 获取字典中所有的键
res = list(dic.keys())
print(res)

# 获取所有的值
res2 = list(dic.values())
print(res2)

# items：同时获取字典中的键和值
res3 = list(dic.items())
print(res3)
