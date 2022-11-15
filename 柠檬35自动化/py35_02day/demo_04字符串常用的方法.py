"""
============================
Author:柠檬班-木森
Time:2020/11/5  20:10
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
方法： 数据对象.方法名(参数)
    

字符串的常用方法：
    format：格式化方法
    replace:替换字符串中的内容
        参数1：需要替换的内容
        参数2：替换之后的内容
        参数3：可以指定替换的次数（默认是替换所有的值）
        注意点：(参数2)替换之后的内容只能传递字符串
    find: 查找指定字符的索引位置（返回查找到的第一个的索引）
    join：字符拼接的方法
        res = ''.join(('python', 'java', 'php'))
    split：把一个字符串，以分隔符为分割点，分割成多个字符    
    strip:去除前后指定的字符（默认是去除空白字符）
    upper:将字符串中的小写字符转换为大写
    lower:将字符串中的大写字符转换为小写

print(res)

"""
# 需求：把字符串中的123替换成999
# s = 'python123java123php123C++'
# res = s.replace("123", '999', 2)
# print(res)

#
# s2 = 'pythonAjavaAphpA'
# res = s2.find('A')
# print(res)

# 字符串拼接：
# s1 = 'python'
# s2 = 'java'
# s3 = 'php'
# print(s1 + '===' + s2 + '===' + s3)
# res = '?'.join((s1, s2, s3))
# print(res)

# 字符串分割：
# s4 = 'python99java99php99c++'
# res = s4.split('99')
# print(res)
# s5 = '@id@mobile@pwd'
# print(s5.split('@'))


# 字符串去除前后空白字符
# s = '        python35 hello python     '
# print(s)
# res = s.strip()
# print(res)

# 去除前后指定的字符
# s2 = '+++++++python35 hello python------------'
# res2 = s2.strip('+')
# print(res2)
# res3 = s2.strip('-')
# print(res3)

# -------扩展--------
# 去除前后的
# s2.lstrip()
# 去除后面的
# s2.rstrip()


#   字符串中字母大小写转换
s = 'python123JAVA'
res = s.lower()
print(res)
print(s.upper())


str()