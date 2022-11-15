import re

"""
表示分组

（）：分组提取

 | ：表示个多匹配规则

"""
# --------------表示分组------------------
# s = '{"id": "#id#", "name": "#name#", "data": "#data#", "title": "#title#", "aaa": 11, "bbb": 222}'
#
# res = re.findall('#.+?#',s)
# print(res)
# res = re.findall('#(.+?)#',s)
# print(res)

# s2 = "i7o8uhoinjgvhj****BBBaa123aa-aa678aa-aa789aaBBB*****567890p6dtuybhsadfgshj"
# res = re.findall('BBB(.+?)BBB',s2)
# print(res)

# res = re.findall('aa(.+?)aa',s2)
# print(res)


# -------------------------| 表示个多匹配规则------------------
# s = '123456python345java0000'
# res = re.findall('python|java',s)
# print(res)

s2 = 'aaa@python@sasas#java#add'
res = re.findall('@.+?@|#.+?#', s2)
print(res)

# -----扩展了解即可---
# s3 = "fyuvibnpms#user=lemonban-pwd=1234#adgvahskml/#user=python-pwd=6666#vhbjnkm"
# res3 = re.findall(r'#user=(.+?)-pwd=(.+?)#',s3)

# s3 = "fyuvibnpms#user=lemonban-pwd=1234-sign=kkkkk#adgvahskml/#user=python-pwd=6666-sign=vvvvv#vhbjnkm"
# res3 = re.findall(r'#user=(.+?)-pwd=(.+?)-sign=.+?#', s3)
# print(res3)


# s3 = "fyuvibnpms#user=lemonban-pwd=1234#adgvahskml/#user=python-pwd=6666#vhbjnkm"
# res3 = re.search(r'#user=(.+?)-pwd=(.+?)#',s3)
# print(res3.group(2))