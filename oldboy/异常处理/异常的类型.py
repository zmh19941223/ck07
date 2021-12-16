# print(a)  # NameError
# 1/0  # ZeroDivisionError

# int('hello')  # ValueError

l = []
# l[0]  # IndexError

dic = {'name': 'zmh'}
# dic['age']  # KeyError

# assert 1 == 2  # AssertionError 断言,如果失败,以下的代码都不会执行

# 以上断言相当于
if not 1 == 2:
    raise AssertionError

# print(  # SyntaxError



