"""
============================
Author:柠檬班-木森
Time:2020/11/28  10:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
动态属性设置:setattr()
    参数1：对象（类）
    参数2：属性名
    参数3：属性值

动态获取属性：getattr()
    参数1：对象（类）
    参数2：属性名
    参数3:(非必传)设置一个属性不存在时返回的默认值（不传，属性不存在则报错）
    
动态删除属性：delattr()
    参数1：对象（类）
    参数2：属性名

判断属性是否存在:hasattr()
    参数1：对象（类）
    参数2：属性名



"""


# ------------------------动态属性设置-------------------------------------

# class MyClass:
#     attr = 100


# 在代码执行的过程中给类添加属性
# 方式一：通过类名
# MyClass.name = 'musen'
# print(MyClass.name)

# key = 'name'
# value ='musen'
# setattr(MyClass,key,value)
# print(MyClass.__dict__)

# 需求：把字典中的键值对设置为类的属性和属性值
# data = {"name": "musen", "age": 18, "gender": "男"}
# for k, v in data.items():
#     setattr(MyClass, k, v)
# print(MyClass.__dict__)


# 需求：把字典中的键值对设置为对象的属性和属性值
# m = MyClass()
# data = {"name": "musen", "age": 18, "gender": "男"}
# for k, v in data.items():
#     setattr(m, k, v)
# print(m.__dict__)
# print(m.name)
# print(m.age)
# print(m.gender)


# --------------------------动态获取属性--------------------------------------
# class MyClass:
#     attr = 100
#     name = '木森'
#     age = 18

# key2 = 'attr'
# res = getattr(MyClass,key2)
# print(res)
# key = input("请输入要获取的属性")
# res = getattr(MyClass,key)
# print(res)


# -------------------------动态删除属性----------------------------
class MyClass:
    attr = 100
    name = '木森'
    age = 18


# 关键字：del  用来删除数据的关键字
# name = 'DSAFSFCA'
# li = [1, 2, 3, 4, 5]
# dic = {'a': 11, 'b': 22}
# del name
# del li[3]
# del dic['b']
# print(li)
# print(dic)
# print(name)

# del MyClass.name
# print(MyClass.__dict__)

# key = input("请输入要删除的属性")
# delattr(MyClass, key)
# print(MyClass.__dict__)


# try:
#     res = MyClass.attr1
# except:
#     print("没有attr1属性")
# else:
#     print('有attr1属性')


# res = hasattr(MyClass,'attr1')
# print(res)
#
#
# if hasattr(MyClass,'name'):
#     print('有name')