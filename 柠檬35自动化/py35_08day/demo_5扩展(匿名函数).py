"""
============================
Author:柠檬班-木森
Time:2020/11/19  20:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
匿名函数：适用于函数内部代码非常简单的函数（函数）
    语法:lambda 参数:返回值



"""


def func(x):
    return x * 2


res = func(10)
print(res)

# 接收一个参数的匿名函数
func1 = lambda x: 2 * x
res2 = func1(10)
print(res2)

# 接收两个参数的匿名函数
func3 = lambda x, y: x + y
func3(11, 22)
