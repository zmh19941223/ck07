import re

# 通过正则表达式的规则，匹配我们需要的数据
# str1 = "ashsdaik13478907890sdah13465455890sdas13466907890dasd"
# res = re.findall('\d{11}',str1)
# print(res)

"""
正则表达式的语法接介绍
"""
# ------------------------单字符（元字符）：表示单个字符----------------------------------

s1 = '121212    asasasa》——_？ +-&%￥'
# \d：表示一个数字
# res1 = re.findall('\d',s1)
# print(res1)

# \D: 表示一个非数字
# res2 = re.findall('\D',s1)
# print(res2)

# \s :表示一个空白字符
# res3 = re.findall('\s', s1)
# print(res3)

# \S :表示一个非空白字符
# res3 = re.findall('\S', s1)
# print(res3)

# \w :表示一个单词字符（数字、字母、下划线）
# res3 = re.findall('\w', s1)
# print(res3)

# \W :表示一个非单词字符（除数字、字母、下划线之外的所有字符）
# res3 = re.findall('\W', s1)
# print(res3)

# . :表示任意字符(通配符)
# res3 = re.findall('.', s1)
# print(res3)

# [] :例举匹配的单字符
# s2 = '0001122334455abcdefgAZJH09zcmsh?.,;[&^$&*$#'
# res4 = re.findall('[ac23]', s2)
# print(res4)
#
# res4 = re.findall('[0-9a-zA-Z]', s2)
# print(res4)

# res4 = re.findall('[0-9]', s2)
# print(res4)

# 匹配中文（扩展了解）
# s3 = '柠檬班123asasa'
# res5 = re.findall('[\u4e00-\u9fa5]',s3)
# print(res5)


