"""
============================
Author:柠檬班-木森
Time:2020/11/28  9:41
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
私有属性：仅供类的内部使用（不要在外部调用）
    _单下划线开头：表示这是一个私有属性（没有真正的私有化，类外部依然可以调用）
    __双下滑线开头：表示这是一个私有属性（类外部不可以调用）

私有方法：
    _单下划线开头：表示这是一个私有方法（没有真正的私有化，类外部依然可以调用）
    __双下滑线开头：表示这是一个私有方法（类外部不可以调用）

"""


class MyClass:
    _attr = 100
    __name = 'musen'

    def __get_info(self):
        print('---get_info')

    def _get_name(self):
        print('---get_info')

    def func(self):
        print(self.__name)


b = MyClass()

# print(b._attr)
# print(b.__name)  # 不能直接使用
# b.func()
