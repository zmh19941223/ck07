# 描述符的使用,描述符其实就是一个新式类,含有 __get__ __set__ __delete__其中一个方法

# 需求:定义一个描述符类,代理其他类变量,实现类型监控

class Typed:

    def __init__(self, key):
        self.key = key

    def __set__(self, instance, value):

        """
        :param instance: 被代理类
        :param value: 需要设置的属性的值
        :return:
        """
        print("__set__方法执行")
        if not isinstance(value, str):
            raise TypeError("类型不对")

        instance.__dict__[self.key] = value

    def __get__(self, instance, owner):
        """
        访问类属性时会调用该方法
        :param instance: 被代理对象
        :param owner: 被代理对象的类
        :return:
        """
        print("__get__执行")
        return instance.__dict__[self.key]

    def __delete__(self, instance):
        """
        删除类变量时会调用
        :param instance:
        :return:
        """
        print("__delete__方法执行")
        instance.__dict__.pop(self.key)


class Foo:
    name = Typed("name")  # 调用描述符的__init__方法,存到key中,然后把该key当做字典的key
    # age = 10 没有被描述符代理的类变量

    def __init__(self, name):
        self.name = name


f1 = Foo('11')  # 调用__set__

print(f1.__dict__)

print(f1.name)  # 调用 __get__
#
# del f1.name  # 调用__delete__
#
# print(f1.__dict__)  #
# print(Foo.__dict__)

# print(f1.age)
