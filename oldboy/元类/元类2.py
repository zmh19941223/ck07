# Python中所有用class定义的类都是 type 的实例

# 传统定义类的方法
# class Foo:
#     pass


# 通过 type 来实例化 参数1:类名 参数2:元祖表示的父类 参数3:类属性

def test(self):
    return 'from test'


FFO = type("Foo", (object, ), {'x': 1, 'func': lambda x: x+2, "test": test})  # 注意: 需要把实例化的类赋值给一个变量才能保存下来

print(FFO.__dict__)
f = FFO()
print(FFO.func(2))
print(f.test())
