"""
============================
Author:柠檬班-木森
Time:2020/11/14  10:05
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
for i in XXX:
	# 循环体


1、遍历列表


2、遍历字典：

"""
# 遍历字符串
# for i in 'wqrfwegterg':
#     print(i)



# 一、遍历列表
# li = [34, 66, 33, 78, 66, 90, 78, 87]
# for price in li:
#     if price > 60:
#         print("您的成绩为{},及格".format(price))
#     else:
#         print("您的成绩为{},不及格".format(price))


# 二、遍历字典

dic = {"aa": 11, "bb": 22, "cc": 33, "dd": 44}
# 1、默认遍历出来的是键：
# for i in dic:
#     print(i)

# 2、遍历字典的值
# for i in dic.values():
#     print(i)

# 3、遍历键和值
for k, v in dic.items():
    print("key:", k, "value:", v)

#  -------------------扩展知识点：元组拆包------------------
# tu = ("python", 323243, 'musen')
# # 元组拆包
# k, v, name = tu
# print("key:", k, "value:", v, "name:", name)
