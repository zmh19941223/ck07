"""
============================
Author:柠檬班-木森
Time:2020/11/14  10:05
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
for循环的嵌套使用


# 需求一：打印如下图形：
* * * *
* * * *
* * * *
* * * *


*
* *
* * *
* * * *



* * * *
* * *
* *
*


"""
# 在print中加一个 end=''，下一个print打印就不会换行
# print("*", end='')
# print("*", end='')
# print("*", end='')
# print("*")


#  打印5*5的正方形
# for i in range(5):
#     for j in range(5):
#         print("* ", end='')
#     print()

# 打印三角形
for i in range(9):
    for j in range(i + 1):
        print("* ", end='')
    print()


# 经典作业题：打印99乘法口诀表


