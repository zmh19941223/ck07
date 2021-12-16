import json

num = 123
name = 'zmh'
hobbies = "['game','sing']"
# 122 zmh
# print(end='') 默认是:end='\n'
# print(f'{num-1} {name}', end='')  # 去掉换行输出


def myprint(content):
    print(content,end='')


myprint('hello world')

# youname = input("input you name:")

# print(type(float(youname)))

# if type(youname) == str:
#     print('str')
# else:
#     print('not str')
# # print(youname)
# print(type(youname))

# 5. eval() -- 将字符串串中的数据转换成Python表达式原本类型
hobbies = "['game','sing']"
dictstr = '{"name":"zmh"}'
# 反序列化
print(type(json.loads(dictstr)))

#
# print(type(eval(hobbies)))  # <class 'list'>
# print(type(eval(dictstr)))  # <class 'list'>
#
d = eval(dictstr)

# 序列化
print(type(json.dumps(d)))

# print(d.get('name'))
# print(d['name'])

# 三目运算符
a=1 ; b=2
c = a if a > b else b
print(c)



