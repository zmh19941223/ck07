"""
============================
Author:柠檬班-木森
Time:2020/11/28  10:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
多继承：同时继承多个父类(了解)


"""


class BaseA:
    A = 100

    def func(self):
        print('-----A---func')


class BaseB:
    B = 200

    def func(self):
        print('-----B---func')


class MyClass(BaseA, BaseB):

    def func(self):
        print('-----MyClass----func')
        super().func()


m = MyClass()

m.func()
