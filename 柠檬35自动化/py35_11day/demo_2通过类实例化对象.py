"""
============================
Author:柠檬班-木森
Time:2020/11/26  20:21
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""

1、通过类实例化对象：
    语法：
        对象 = 类名（）


万物皆对象：所以的数据都是对象
    字符串：str类型的对象
    列表：list类型的对象
    函数：函数类型的对象
    整数：int类型的对象

    
"""


class Cat:
    pass


# 通过猫类创建对象
coffee = Cat()
jingle = Cat()

print(coffee,type(coffee))
print(jingle,type(jingle))


class PersonClass(object):
    pass


# 通过人类创建对象
wen = PersonClass()
Try = PersonClass()
print(wen,type(wen))
print(Try,type(Try))



s = 'asas'

str()
list()
print(s,type(s))