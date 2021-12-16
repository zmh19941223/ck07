# 默认情况下所有类的类都是type,先在通过metaclass来把我们自定义的类作为类的元类


# 自定义元类
class mytype(type):

    def __init__(cls, a, b, c):
        print("__init__方法执行")
        # print(a)  # Foo
        # print(b)  # ()
        # print(c)  # {'__module__': '__main__', '__qualname__': 'Foo', '__init__': <function Foo.__init_}

    def __call__(cls, *args, **kwargs):
        print("__call__执行了")  # 其对象()方式出发
        # print(cls)  # <class '__main__.Foo'>
        # print(args)  # ('zmh',)
        # print(kwargs)  # {}
        # 创建一个对象,因为通过类调用方法需要传递对象
        obj = object.__new__(cls)
        cls.__init__(obj, *args,  **kwargs)  # 把参数传递到实例化对象的构造函数
        return obj  # 必须把封装好的对象返回


class Foo(metaclass=mytype):  # 创建Foo这个类时会调用自定义元类的__init__方法
    def __init__(self, name):  # mytype(self, 'Foo', (object,), {})
        self.name = name


f = Foo('zmh')  # 调用元类的 __call__ 方法 参数被 __call__ 的*args 和 **kwargs接收
print(f.__dict__)











