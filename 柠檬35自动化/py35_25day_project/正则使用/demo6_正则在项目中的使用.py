import re

"""

"""


class TestData:
    id = 123
    name = 'musen'
    data = '1122'
    title = '测试数据'


s = '{"id": "#id#", "name": "#name#", "data": "#data#", "title": "#title#", "aaa": 11, "bbb": 222}'

# findall:匹配字符串中所有符合规则的数据并以列表的形式返回
# res = re.findall('#.+?#', s)
# print(res)

# search: 匹配并返回第一个符合规则的匹配对象
res2 = re.search('#(.+?)#', s)
print(res2)
# group():提取匹配对象中的内容
item= res2.group()
print("被替换的内容：",item)
attr = res2.group(1)
print('替换的属性名：',attr)
value = getattr(TestData,attr)
print("获取出来的类属性值",value)
# 进行替换
s = s.replace(item,str(value))
print(s)

print('------------------------------------------------------------------')
res2 = re.search('#(.+?)#', s)
print(res2)
# group():提取匹配对象中的内容
item= res2.group()
print("被替换的内容：",item)
attr = res2.group(1)
print('替换的属性名：',attr)
value = getattr(TestData,attr)
print("获取出来的类属性值",value)
# 进行替换
s = s.replace(item,str(value))
print(s)

print('------------------------------------------------------------------')
res2 = re.search('#(.+?)#', s)
print(res2)
# group():提取匹配对象中的内容
item= res2.group()
print("被替换的内容：",item)
attr = res2.group(1)
print('替换的属性名：',attr)
value = getattr(TestData,attr)
print("获取出来的类属性值",value)
# 进行替换
s = s.replace(item,str(value))
print(s)

print('------------------------------------------------------------------')
res2 = re.search('#(.+?)#', s)
print(res2)
# group():提取匹配对象中的内容
item= res2.group()
print("被替换的内容：",item)
attr = res2.group(1)
print('替换的属性名：',attr)
value = getattr(TestData,attr)
print("获取出来的类属性值",value)
# 进行替换
s = s.replace(item,str(value))
print(s)