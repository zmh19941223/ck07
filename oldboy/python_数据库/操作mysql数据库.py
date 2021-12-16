import pymysql

conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='root', db='test')


# cursor = conn.cursor()  # 游标是会移动的
cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)  # 设置光标的返回值是字典

# 练习查询操作
cursor.execute('select * from user')  # 返回查询结果条数

# 查找一条数据
# res = cursor.fetchone()
# print(res)  # 取第一条
#
# # 查找全部
# res = cursor.fetchall()
# print(res)  # 返回除第一条以外的数据


# 返回指定条,默认为1条
# res = cursor.fetchmany(2)
# print(res)

# print(type(res)) # 元祖

# 练习增删改操作
# sql = "insert into user(id, username, pwd) values(4, 'zxt', '222')"
#
# ret = cursor.execute(sql)  # 返回影响的行数
#
# print(ret)

# 手动操作游标 默认 mode = 'relative'
cursor.scroll(2)  # value > 0 表示游标向下移动
# print(cursor.fetchone())

cursor.scroll(-1)
cursor.scroll(0, mode='absolute')
print(cursor.fetchone())

# 必须要提交才能入库
conn.commit()

# 释放资源
cursor.close()
conn.close()
