"""
============================
Author:柠檬班-木森
Time:2020/11/19  21:16
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
min:获取最小值
max:获取最大值
sum:求和

可迭代对象（iterable）：能够使用for进行遍历的数据都是可迭代对象（字符串、列表、字典、元组、集合）

# --------------高级的内置函数-------------------
1、eval():识别字符串中有效的python表达式



"""
# -------做数据统计的内置函数--------------

# li = [11, 2, 343, 5, 2, 5, 33, 55, 33, 55, 441, 6, 6, 4]
# # 获取最小值
# res = min(li)
# print(res)
#
# # 获取最大值
# res = max(li)
# print(res)
#
# # 求和
# res3 = sum(li)
# print(res3)


# --------------高级的内置函数-------------------
# 1、eval():识别字符串中有效的python表达式
# print(eval('11+22'))


# 2、enumerate:获取列表中的数据以及索引
# li = ["name", "python", "java", "php"]

# for i in li:
#     print(li.index(i), i)
print("------------------------")
# for i, v in enumerate(li):
#     print(i, v)

# 3、zip:数据的聚合打包
# title = ["name", "age", "gender"]
# datas = ["木森", 18, "男"]

# res = zip(title, datas)
# print(list(res))
# print(dict(res))

# 注意点：zip聚合之后的数据只能使用一次


# -----------zip的扩展------
# li1 = [1, 2]
# li2 = [11, 22, 33, 44]
# li3 = [111, 222, 333, 444]
# li4 = [111]
# li5 = [111, 222, 333, 444]
# li6 = [111, 222, 333, 444]
# res = zip(li1,li2,li3,li4,li5,li6)
# print(list(res))


# 4、filter:过滤器函数(扩展了解)
"""
filter的作用：批量的过滤数据
参数一：过滤的规则（函数）
参数二：需要过滤的数据
"""
# filter()

# stu = [45, 66, 88, 99, 100, 89, 97, 96]
# new_list = []
# for i in stu:
#     if i > 80:
#         new_list.append(i)
# print(new_list)

# def func(x):
#     return x > 80
# res = filter(func, stu)
# res = filter(lambda x: x > 80, stu)
# print(list(res))

#  -----------列表排序扩展------------
# li = [45, 66, 88, 99, 100, 89, 97, 96]
# li = [(11, 22, 33), (3, 100, 55), (98, 78, 1)]
# li = [[11, 22, 33], [3, 100, 55], [98, 78, 99]]

# x = (11, 22, 33)
# print(x[1])

# def func(x):
#     return x[1]
# li.sort(key=func)

# li.sort(key=lambda x: x[2])

# print(li)
