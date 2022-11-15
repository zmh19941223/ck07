"""
============================
Author:柠檬班-木森
Time:2020/11/28  9:41
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
实例方法：
    1、只能通过对象调用（第一个参数self:代表对象本身）
    2、适用场景：方法内部如果要使用对象的属性或者方法，就要定义成对象方法

类方法定义：要先使用@classmethod声明
类方法：（第一个参数cls:代表类本身）
    1、可以通过类调用，也可以通过对象用
    2、适用场景：方法内部只使用类属性或者类方法（不需要使用对象属性和方法），适合定义为类方法
    
    
    
静态方法定义：要先使用@staticmethod声明   
静态方法：
    1、可以通过类调用，也可以通过对象用
    2、适用场景：方法内部（既不需要使用类属性和类方法也不需要使用对象属性和方法），适合定义为静态方法方法
"""


# class MyClass:
#
#     def func(self):
#         print('----func---实例方法')
#
#     @classmethod
#     def func_cls(cls):
#         print(cls)
#         print("----func---类方法-")
#
#     @staticmethod
#     def func_static():
#         print("----func---静态方法------")
#
#
# MyClass.func_cls()


class MyTest:
    attr = 100

    def __init__(self, name):
        self.name = name

    def func1(self):
        print(self.name)

    @classmethod
    def func2(cls):
        print(cls.attr)

    @staticmethod
    def func3():
        print("静态方法")
