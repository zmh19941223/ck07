"""
============================
Author:柠檬班-木森
Time:2020/11/19  20:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
函数的返回值：关键字return
    函数中没有return,返回值数目=0：返回None
    返回值数目=1：返回object
    返回值数目>1:返回tuple
    
    
注意点：当函数执行到return之后，就会结束函数的运行
"""


# ----列表中为什么有些方法有返回值   有些没有？------
# li = [11, 22, 33]
# res = li.append(99)
# print(res)
#
# li2 = li.copy()
# print(li2)

# --------- return后面只有一个数据 -------------

# def add(a, b):
#     c = a + b
#     return c

# res = add(11, 22)
# print("add调用之后返回的结果：", res)


# -------------return后面有多个数据--------------------
# def add(a, b):
#     c = a + b
#     d = a - b
#     return c, d
#
#
# res = add(11, 22)
#
# print("add调用之后返回的结果：", res)


# ------------当函数执行到return之后，就会结束函数的运行-----------------
# def add(a, b):
#     c = a + b
#     d = a - b
#     return c, d
#     print("hello python")
#     print("hello python")
#     print("hello python")
#     print("hello python")
#
#
#
# res = add(11, 22)
#
# print("add调用之后返回的结果：", res)


# # ------------如果函数中有多个分支，每个分支中是否都可以些return-----------------

def func3(a, b, method):
    """
    计算器
    :param a: 数值1
    :param b: 数值2
    :param method: 数值的运算方法
    :return:
    """
    if method == "+":
        print("a+b的结果：", a + b)
        return a + b
    elif method == "-":
        print("a-b的结果：", a - b)
        return a - b
    elif method == "*":
        print("a*b的结果：", a * b)
        return a * b
    elif method == "/":
        print("a/b的结果：", a / b)
        return a / b


res = func3(11, 22, '*')
print(res)
print("此处需要使用func3调用的结果：就需要用变量接收函数调用之后的返回值")