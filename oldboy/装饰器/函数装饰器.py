def deco(func):
    print("装饰器执行")
    return func


@deco  # 相当于 foo = deco(foo) 该函数的返回值(往往是增强后的函数)赋值给被修饰的函数,从而实现不改变原函数和调用方式来增强方法
def foo():
    print("foo执行")


# foo()
