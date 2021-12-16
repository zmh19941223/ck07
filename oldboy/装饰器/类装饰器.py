# 类和函数其实都是对象,一切皆对象

# 需求: 实现给类中的类属性进行值类型的限制

# 总结: 1.描述符是一个类,要想传参,需要借助期构造方法
#      2.装饰器可以是类或者函数
#            类: 自动把装饰的函数传递到装饰器类的构造方法,而且,在被装饰类内部多了个 指向装饰器类的类属性,如果该装饰器类又是一个描述符,
#                则会执行__get__,或者__set__方法
#           函数: 通过外包多一层函数,接收*args,**kwargs参数,参数来自装饰器调用处,参数可以再内部函数访问



# 定义一个描述符
class Typed:
    def __init__(self, key, t):
        self.key = key
        self.t = t

    def __get__(self, instance, owner):
        return instance.__dict__[self.key]

    def __set__(self, instance, value):
        if not isinstance(value, self.t):
            raise TypeError("类型不匹配")
        instance.__dict__[self.key] = value


# 定义一个装饰器

def deco(**kwargs):

    def wrapper(obj):
        for k, v in kwargs.items():
            setattr(obj, k, Typed(k, v))
        return obj
    return wrapper


# 定义一个类
@deco(name=str, age=int)  # 相当于 People = wrapper(People)
class People:

    def __init__(self, name, age):
        self.name = name
        self.age = age


p1 = People("zmh", 23)  # 执行分析 实例化是调用People的__init__方法,尝试去设置name,age的值,然而该类是被装饰的,装饰过后,该类内部已经
                        # 有 name = Typed(name, value), name有被描述符代理,所以会调用描述符的 __set__方法,该方法对属性值进行了限定
# p1 = People(11, '11')
print(p1.__dict__)
