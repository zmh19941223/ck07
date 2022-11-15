import re


class TestData:
    id = 123
    name = 'musen'
    data = '1122'
    title = '测试数据'


s = '{"id": "#id#", "name": "#name#", "data": "#data#", "title": "#title#", "aaa": 11, "bbb": 222}'

while re.search('#(.+?)#', s):
    res2 = re.search('#(.+?)#', s)
    print(res2)
    item= res2.group()
    attr = res2.group(1)
    value = getattr(TestData,attr)
    # 进行替换
    s = s.replace(item,str(value))

print(s)



# s2 = '{"id": "#id#", "name": "#name#"}'
# # 注意：search匹配到了返回一个对象，没有匹配到返回None
#
# while re.search('#(.+?)#', s2):
#     res2 = re.search('#(.+?)#', s2)
#     print(res2)
#     item= res2.group()
#     attr = res2.group(1)
#     value = getattr(TestData,attr)
#     # 进行替换
#     s2 = s2.replace(item,str(value))
#
# print(s2)
