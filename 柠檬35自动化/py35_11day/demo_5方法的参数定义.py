"""
============================
Author:柠檬班-木森
Time:2020/11/26  20:21
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
""" 
二、方法：定义在类里面的函数叫做方法
    方法中的参数除self之外，其他的参数传递和函数是一样的
    
    方法中也是使用return来返回数据的

"""


class Cat:
    # 类属性
    leg = 4
    tail = 1
    eye = 2

    def func(self, addr, number):
        # print(self.name)
        print("{}正{}抓{}只老鼠".format(self.name, addr, number))
        return '3只老鼠'

# 通过猫类创建对象
coffee = Cat()
jingle = Cat()
coffee.name = "加菲猫"
jingle.name = "叮当猫"

# 通过对象调用方法
res = coffee.func('在树上',1)
print(res)
jingle.func('小黑屋',10)




