"""
============================
Author:柠檬班-木森
Time:2020/11/3  21:17
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
六、字符串(str)：
    字符串：可以通过引号来表示
        单引号：''
        双引号：""
        三引号（单双都可以）：
            三引号中的字符串可以换行
            
    需求：用变量保存一个内容为：python'java 的字符串
    字符串转义： \ 可以对特殊的符号进行转义
            \':表示一个'
            \":表示一个"
            \n：表示换行(换行符)
            \t：表示制表符（了解）
    
    空字符串和空白字符：
        空字符串：字符中什么内容都没有：s = ""
        空白字符：字符串中由空白键：s1 ="  "
        
获取字符串的长度：python的内置函数len()
    


None: 表示空 

"""
# a = "python001"
# b = 'python002'
# c = '''python003'''

# cc = 'p\tython\'java'
# aa = 'py\tthon\'java'
# bb = 'pyt\thon\'java'
# print(cc)
# print(aa)
# print(bb)

# dd = '姓名：木森 年龄：18 技能：python'
#
# ff = """
#     姓名：木森
#     年龄：18
#     技能：python
#     """
#
# print(dd)
# print(ff)

s = ""
s1 = "  "
print("s的长度：", len(s))
print("s1的长度：", len(s1))

# None表示为空，变量什么都没保存的意思
n = None
print(n)
