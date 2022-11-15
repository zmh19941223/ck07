"""
============================
Author:柠檬班-木森
Time:2020/12/8 21:28
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
from configparser import ConfigParser

# 第一步：创建一个配置文件解析器对象
cp = ConfigParser()

# 第二步：读取配置文件中的内容到配置文件解析器中
cp.read('musen.ini',encoding='utf-8')

# 第三步：读取配置内容

# 方法一get：使用get方法读取的配置内容都会当成字符串
# res = cp.get('logging','file')
# print(res)
res2 = cp.get("mysql", 'port')
print(res2, type(res2))

# 方式二：getint：读取数值类型的数据
res3 = cp.getint("mysql", 'port')
print(res3, type(res3))

# 方式三：getboolean:读取布尔类型的数据
# cp.getboolean()

# 方式四： getfloat:读取浮点类型的数据



