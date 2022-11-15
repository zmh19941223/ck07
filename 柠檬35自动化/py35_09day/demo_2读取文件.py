"""
============================
Author:柠檬班-木森
Time:2020/11/21  9:45
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
操作文件的步骤：
1、打开文件：使用内置函数open

2、进行操作（读或者写）
    read方法：默认读取文件中所有的内容
    readline:读取一行内容
    readlines:按行读取所有的内容，返回一个列表
    

3、关闭文件
    close方法


"""
# 1、打开文件，返回文件的句柄
f = open(file='biji.txt', mode='r', encoding='utf-8')

# 2、读取文件的内容
# res = f.read()

# 读取一行内容
# res = f.readline()
# print(res)


# 按行读取所有的内容
res = f.readlines()
print(res)

# 3、关闭文件
f.close()
