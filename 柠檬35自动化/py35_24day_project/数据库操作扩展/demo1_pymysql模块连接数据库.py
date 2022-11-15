import pymysql

"""
python3中操作mysql数据库
1、pymysql模块

2、mysql-client模块 :在windows下通过pip安装不了(了解即可，操作和使用都是一样)


"""
# 1、连接数据库
con = pymysql.connect(host='api.lemonban.com',
                      port=3306,
                      user='future',
                      password='123456',
                      charset='utf8'
                      )

# 2、创建一个游标对象
cur = con.cursor()

# 3、执行sql
sql = ''
res = cur.execute(sql)
print(res)

# 提交事务（如果涉及到增删改操作的sql执行完之后，一定要提交事务才会生效）
con.commit()






cur.close()
# 断开连接
con.close()
