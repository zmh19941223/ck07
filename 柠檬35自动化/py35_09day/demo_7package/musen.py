"""
============================
Author:柠檬班-木森
Time:2020/11/21  11:03
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

name = "木森"


# 定义函数
def print_func(n):
    """打印三角形的函数"""
    for i in range(n):
        for j in range(i + 1):
            print("* ", end='')
        print()


# 这个条件只有在直接运行该文件的时候才会成立（程序的入口）
if __name__ == "__main__":
    print_func(10)
    print("musen，py的代码执行了")
