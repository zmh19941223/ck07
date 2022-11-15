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
cp.read('musen.cfg', encoding='utf-8')

# 第三步：配置文件的写入
cp.set("mysql", 'name', 'musen')

with open("musen.cfg", 'w', encoding='utf-8') as f:
    cp.write(fp=f)
