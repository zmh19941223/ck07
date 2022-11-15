"""
============================
Author:柠檬班-木森
Time:2020/11/14  10:05
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
列表推导式：可以用来快速的生成一个列表
li = [i for i in XXX]


"""

# 需求：生成这样一个列表["page0",'page1','page2',.....'page20']

# 常规的for循环语法
# li = []
# for i in range(21):
#     d = 'page{}'.format(i)
#     li.append(d)
# print(li)


# 列表推导式实现
# li2 = ['page{}'.format(i) for i in range(21)]
# print(li2)
# li2 = ['http://www.baidu.com/page{}'.format(i) for i in range(10)]


tu = (11, 22, 33, 44, 55, 66, 77)
# 需求：将元组中的每个数据+1，转换为列表
li = [i + 1 for i in tu]
print(li)



# li = [i * 10 for i in tu]
# print(li)
