import time

print(time.time()) # 获取当前时间戳,用于计算 1607120342.0472589

time_struct = time.localtime() # 获取当前的时间结构对象

print(time_struct.tm_year)
print(time_struct)


'''
    1.时间戳 time.time()
    2.结构化时间 time.localtime()
    2.字符串时间 'YYYYMMDD'
    
    相互转化:
        1.时间戳转结构化时间 time.localtime(time.time())
        2.结构化时间转时间戳 time.mktime(time.localtime())
        
        3.结构化时间转字符串时间 time.strftime('%Y%m%d %H:%M:%S',time.localtime())
        4.字符串时间转为结构化时间,方便取单个值 time.strptime('20200525 21:39:01','%Y%m%d %X')
    
'''
# print(time.localtime())
#
# print(time.strftime('%Y%m%d %H:%M:%S', time.localtime()))
# print(time.strftime('%Y%m%d %X', time.localtime())) #等价于上面
#
# print(time.strptime('20200525 21:39:01','%Y%m%d %X'))
#
