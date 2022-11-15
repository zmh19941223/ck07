"""
============================
Author:柠檬班-木森
Time:2020/11/24  20:33
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
raise：主动抛出异常
"""
# raise NameError('xxx没定义')
# raise  ValueError
# raise AssertionError


# -------------------raise的应用场景---------------------------
# 限定参数的类型，不是对应的类型，主动抛出错误
def add(a, b):
    if not isinstance(a, int):
        raise ValueError('a只能是int类型')
    if not isinstance(b, int):
        raise ValueError('b只能是int类型')
    return a + b


# res = add('aa', 'bb')
# print(res)


import keyword
print(keyword.kwlist)


"""
False  None  True   and  as
for  from    import   if in  is
assert   break  def  elif  els
except   finally  global  lambda
not  continue    or   pass
raise, return   try while, with

['', '', '', '', '',

 'class', '', '', 'del', '',


"""
