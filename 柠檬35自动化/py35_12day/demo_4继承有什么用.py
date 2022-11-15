"""
============================
Author:柠檬班-木森
Time:2020/11/28  10:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
作用：子类通过继承可以获得父类的属性和方法，提高开发的效率及代码的复用率。(__开头的私有属性和方法的除外)

"""


class BasePhone:
    attr = '移动电话'
    __attr2 = '1000'

    def __init__(self, name):
        self.name = name

    def call(self):
        print(f"{self.name}打电话的功能")


class PhoneV2(BasePhone):

    def __init__(self, name, price):
        # 方式一：类名.方法名（self,）
        # BasePhone.__init__(self, name)
        # 方式二：super().方法（）
        super().__init__(name)
        # 对该方法的功能扩展
        self.price = price

    def send_msg(self):
        print("发短息")

    def music(self):
        print("放音乐")


# p = PhoneV2('诺基亚N95')
# p.call()
# print(p.attr)


p = PhoneV2('诺基亚N95', 5880)
p.send_msg()
p.call()

print(p.price)
