"""
============================
Author:柠檬班-木森
Time:2020/11/26  20:21
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
""" 
类属性的调用：
    1、可以通过类去调用   -->类.属性名
    2、也可以通过对象调用   -->对象.属性名

实例属性的调用：
    只能通过对象去调用自己的属性



方法的调用：
    1、不能直接类调用（因为没有对象）
    2、只能通过对象直接调用



# 方法的分类：
方法中第一个参数是self的方法：叫做实例（对象）方法

类方法：
静态方法：


"""


class Cat:
    # 类属性
    leg = 4
    tail = 1
    eye = 2

    def func(self):
        print("抓了3只老鼠")

    def skill01(self):
        print("正在爬树")


# 通过猫类创建对象
coffee = Cat()
coffee.name = '加菲猫'

# ------类属性的调用------------
# print(Cat.leg)
# print(coffee.leg)


# ------实例属性的调用----------
# print(Cat.name)  # 类调用不了
# print(coffee.name)


# ----------方法的调用---------------
# Cat.func()  # 不能直接用类调用
# coffee.func()
