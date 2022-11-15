import pymysql

# 1、连接数据库
conect = pymysql.connect(host='api.lemonban.com',
                         port=3306,
                         user='future',
                         password="123456",
                         charset='utf8')
# 2、创建游标对象
cur = conect.cursor()

sql = ''
# 3、执行sql语句
cur.execute(sql)
