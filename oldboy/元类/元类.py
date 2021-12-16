class Foo:
    __slots__ = {}  # 定义了__slots__则对象上不会有 __dict__
    pass


f = Foo()

print(type(f))  # type(f)方法返回该对象的所属类

print(type(Foo))  # <class 'type'> 类也是对象 type为Python中的顶级父类

# print(f.__dict__)  # 报错 AttributeError: 'Foo' object has no attribute '__dict__'

print(Foo.__dict__)


