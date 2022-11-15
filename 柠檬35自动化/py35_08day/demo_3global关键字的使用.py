"""
============================
Author:柠檬班-木森
Time:2020/11/19  20:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
需求：在函数内部定义或者修改全局变量

global:函数内部声明操作的全局变量




"""

number = 100


def func():
    # print(number+100)
    global number,name
    name = 'musen'
    number = number + 100


func()

print(number)
print(name)


