import os
import time
import datetime

for file in os.scandir():
    print(file.name, file.stat().st_size/1024, datetime.datetime.fromtimestamp(file.stat().st_mtime))
    # print(type(file.stat()))
    # print(file.stat())

print(os.stat('temp/text1.txt'))
# 时间戳转换成时间

# 自定义时间格式
# print(time.strftime('%Y/%m/%d %X'))  # 2021/03/20 09:37:24
# print(time.strftime('%Y/%m/%d %X', time.localtime(1616201700)))  # 2021/03/20 09:37:24

# that_time = datetime.datetime.fromtimestamp(1616201700)
# print(type(that_time))  # <class 'datetime.datetime'>
# print(that_time)
# print(that_time.year, that_time.month, that_time.day, that_time.hour)