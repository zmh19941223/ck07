"""
============================
Author:柠檬班-木森
Time:2020/11/26  20:21
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
特征：属性
行为：方法

类的方法和属性
一、属性：
    1、类属性：这类事物都具备这个属性，并且属性值是一样的（定位为类属性）
        （类属性是所有的对象共有的）
        类属性的定义：直接定义在类里面的变量
                   类名.属性名 = 属性值
                    
        
    2、对象（实例）属性：对象自己的特性（属性）
        实例属性的定义：对象.属性名 = 属性值
    
    
二、方法：定义在类里面的函数叫做方法


    
    
三、self:代表的是对象自己（对象本身）
    那个对象调用该方法，self代表的就是那个对象
    

"""

class Cat:
    # 类属性
    leg = 4
    tail = 1
    eye = 2
    def func(self):
        # print(self.name)
        print("{}正在抓老鼠".format(self.name))

    def skill01(self):
        print("这换个是爬树的功能")


# 通过猫类创建对象
coffee = Cat()
jingle = Cat()
coffee.name = "加菲猫"
jingle.name = "叮当猫"

# print(coffee.name)
# print(jingle.name)


# 通过对象调用方法
coffee.func()

jingle.func()






