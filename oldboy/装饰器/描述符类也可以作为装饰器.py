# 自定义一个 @property 装饰器
class Myproperty:
    def __init__(self, func):
        self.func = func  # 保存func以便在__get__方法使用

    def __get__(self, instance, owner):

        return self.func(instance)





class People:

    # 定义一个方法,返回人类信息
    # @property # 自定义实现此功能
    # def tellinfo(self):
    #     return 'this is a human'

    @Myproperty  # 相当于 tellinfo = Myproperty(tellinfo) 也就是给类加了一个tellinfo属性
    def tellinfo(self):
        return "人类信息"



# 实例化People
# p = People()
# print(p.tellinfo())


p = People()
# print(People.__dict__)  # 通过装饰器使得被代理类内部有了一个 tellinfo类属性 值为 Myproperty实例

# print(Myproperty(lambda x: x+2).__dict__)  # 函数设置在对象的一个属性

print(p.tellinfo)  # 执行过程为: 先从p实例自身的__dict__找tellinfo,找不到,然后从People类的__dict__找
                   # 而该属性被描述符代理,于是执行描述符的__get__方法,而在__get__方法里调用了p的tellinfo()方法,返回结果


