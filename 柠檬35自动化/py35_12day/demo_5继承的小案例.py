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


# class BasePhone:
#     def call(self):
#         print("打电话的功能")
#
#
# class PhoneV2:
#
#     def call(self):
#         print("打电话的功能")
#
#     def send_msg(self):
#         print("发短息")
#
#     def music(self):
#         print("放音乐")
#
#
# class PhoneV3:
#
#     def call(self):
#         print("打电话的功能")
#
#     def send_msg(self):
#         print("发短息")
#
#     def music(self):
#         print("放音乐")
#
#     def pay(self):
#         print("手机支付")
#
#     def game(self):
#         print('玩游戏')

# --------------------继承的模式---------------------
class BasePhone:
    def call(self):
        print("打电话的功能")


class PhoneV2(BasePhone):
    def send_msg(self):
        print("发短息")

    def music(self):
        print("放音乐")


class PhoneV3(PhoneV2):

    def pay(self):
        print("手机支付")

    def game(self):
        print('玩游戏')


xiaomi = PhoneV3()

xiaomi.call()
xiaomi.send_msg()
xiaomi.music()
xiaomi.pay()
