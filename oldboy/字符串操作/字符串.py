s1 = "abacDef"

# 首字母大写
print(s1.capitalize())

#
print("casefold", s1.casefold())  # 更加强大

print("lower", s1.lower())

# 计算子串出现的个数
print(s1.count('a'))

# 放置中间
print(s1.center(40, '*'))

# 查找子串的位置
print(s1.find('D'))  # 4

# 格式化字符串
s2 = 'I am {name}'
print(s2.format(name="zmh"))  # 字典参数

s3 = 'I am {0} age {0}'
print(s3.format("lll", 'zzz'))  # 位置参数

# 根据字典来格式化字符串
s4 = 'I am {name} {age}'
print(s4.format_map({"name": "zmh", "age": 23}))  # 字典参数

# 数字字母判断
print(s1.isalnum())





















