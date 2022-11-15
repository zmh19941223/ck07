import re

"""
正则表达式的语法接介绍
"""
# ------------------------表示数量----------------------------------


# {n}:表示前一个字符出现n次
# s1 = '1234aanca112233.1234466'
# # res1 = re.findall('\d\d\d\d\d',s1)
# res1 = re.findall('\d{4}', s1)
# print(res1)


# {n,}:表示前一个字符出现n次以上
# s1 = '1234aanca112233.1234466YY12345678'
# res1 = re.findall('\d{4,}', s1)
# print(res1)


# {n,m}:表示前一个字符出现n到m次
# s1 = '123aa1234bb12345cc123456bb1234567890111111'
# res1 = re.findall('\d{4,6}', s1)
# print(res1)
# res1 = re.findall('\d{4,6}?', s1)
# print(res1)

#----------------------------------------贪婪模式----------------
# 默认是开启贪婪模式去进行匹配的，贪婪模式关闭：表示数量范围的后面加上?
# 关闭贪婪模式的应用
# s = '{"id": "#id#", "name": "#name#", "data": "#data#", "title": "#title#", "aaa": 11, "bbb": 222}'
# res = re.findall("#.{1,}?#",s)
# print(res)
#--------------------------------------------------------

# + ：表示一次以上  ====>等同于 {1,}
# s = '{"id": "#id#", "name": "#name#", "data": "#data#", "title": "#title#", "aaa": 11, "bbb": 222}'
# res = re.findall("#.{1,}?#",s)
# res = re.findall("#.+?#",s)
# print(res)

# * ：表示0次以上

# s = '123abc'
# res = re.findall('\d*',s)
# print(res)

s = '{"id": "##", "name": "#name#", "data": "#data#", "title": "#title#", "aaa": 11, "bbb": 222}'
# res = re.findall("#.+?#",s)
# print(res)


# res = re.findall("#.*?#",s)
# print(res)

html = '<p>pythonasasasas</p><p>python</p><p>1111</p><p>1</p>'