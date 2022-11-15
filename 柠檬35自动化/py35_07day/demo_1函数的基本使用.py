"""
============================
Author:柠檬班-木森
Time:2020/11/17  20:18
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""

print('xxxx')




函数可以用来封装独立的功能代码，通过封装可以提高代码的重用率，提高开发效率

1、函数的定义：函数在定义之后不会自动执行

语法：
    def 函数名():
        # 函数体（写到函数里面的功能代码）

2、函数调用：函数名("参数")

3、函数名的命名规则：（和变量的命名规则一样）
   函数名推荐下划线命名法，尽量做到见名知意




"""


# 打印三角形
# for i in range(9):
#     for j in range(i + 1):
#         print("* ", end='')
#     print()
#
# print("--执行了200代码之后---")
#
# for i in range(9):
#     for j in range(i + 1):
#         print("* ", end='')
#     print()
#
# print("--执行了100代码之后---")
#
# for i in range(9):
#     for j in range(i + 1):
#         print("* ", end='')
#     print()

# 定义函数
def print_func():
    """打印三角形的函数"""
    for i in range(9):
        for j in range(i + 1):
            print("* ", end='')
        print()


# 调用函数
print_func()
print("--执行了100代码之后---")
print_func()
print("--执行了200代码之后---")
print_func()

print('你好')
