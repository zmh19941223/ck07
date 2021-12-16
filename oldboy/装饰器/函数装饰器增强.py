def deco(func):

    def wrapper(*args):  # 里层的才是相当于被装饰的函数,所以参数放里层
        print("装饰器执行")
        return func(*args)  # 获取参数执行函数

    return wrapper


@deco  # 相当于 foo = deco(foo) 该函数的返回值(往往是增强后的函数)赋值给被修饰的函数,从而实现不改变原函数和调用方式来增强方法
def foo(x, y):
    return x + y


print(foo(1, 2))
