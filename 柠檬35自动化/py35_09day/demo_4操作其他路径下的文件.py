"""
============================
Author:柠檬班-木森
Time:2020/11/21  9:45
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
绝对路径：从磁盘的根目录开始的完整路径
    C:\project\python_35\py35_01day\笔记.txt
    
    C:\project\python_35\py35_01day\test.txt
    注意点：如果路径中包含专题字符的时候，要做特殊处理(在字符串前面加一个r,关闭转义)

相对路径：相对于当前文件所在的路径
    .   :代表当前目录
    ..  :代表上级目录


"""

#-----------------------绝对路径-----------------------
# # 1、打开文件，返回文件的句柄
# f = open(file='C:\project\python_35\py35_01day\笔记.txt', mode='r', encoding='utf-8')
#
# res = f.read()
# print(res)
#
# # 3、关闭文件
# f.close()
#


# 1、打开文件，返回文件的句柄
# f = open(file='C:\project\python_35\py35_01day\test.txt', mode='r', encoding='utf-8')
#
# res = f.read()
# print(res)
#
# # 3、关闭文件
# f.close()


# print('C:\project\python_35\py35_01day\test.txt')

# print(r'C:\project\python_35\py35_01day\test.txt')

# ----------------扩展repr()---------------
# print("hello python")
# print("{'a':11}")
# print(repr("{'a':11}"))
# print(repr("hello python"))
# print(repr('C:\project\python_35\py35_01day\test.txt'))


#-----------------------相对路径-----------------------
# # 1、打开文件，返回文件的句柄
# f = open(file='..\py35_01day\笔记.txt', mode='r', encoding='utf-8')

# res = f.read()
# print(res)
#
# # 3、关闭文件
# f.close()

