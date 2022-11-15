"""
============================
Author:柠檬班-木森
Time:2020/11/26  20:21
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

#
# class Person:
#     pass
#
#
# musen = Person()
# musen.name = '木森'
# musen.age = 18
# musen.sex = '男'
# musen.height = 170
#
# Try = Person()
# Try.name = 'TRY'
# Try.age = 18
# Try.sex = '男'
# Try.height = 170


# -----------------------init-------------------
# 魔术方法：双下滑先开头和双下滑线结尾的方法，不需要手动调研，在特定的情况下自动调用
"""
初始化方法__init__:在通过类创建对象的时候自动调用的
    在创建对象的时候，给对象设置对象属性"


"""


class Person:
    attr = '类属性1111'

    def __init__(self, name, age, sex):
        """在创建对象的时候，给对象设置对象属性"""
        self.name = name
        self.age = age
        self.sex = sex
        print("这个是---init-----")


musen = Person('MUSEN', 18, '男')
Try = Person('TRY', 18, '男')

print(musen.name)
print(musen.age)
print(musen.sex)
print(Try.name)
