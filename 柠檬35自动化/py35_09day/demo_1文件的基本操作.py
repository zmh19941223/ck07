"""
============================
Author:柠檬班-木森
Time:2020/11/21  9:45
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
内置函数open：
    参数file:传一个文件名(路径)
    参数mode：文件打开的模式
        r:只读
    参数encoding:指定编码格式

操作文件的步骤：
1、打开文件：使用内置函数open

2、进行操作（读或者写）
    读：read方法

3、关闭文件
    close方法


"""
# 1、打开文件，返回文件的句柄
f = open(file='biji111.txt',mode='r', encoding='utf-8')

# 2、读取文件的内容
res = f.read()
print(res)

# 3、关闭文件
f.close()





