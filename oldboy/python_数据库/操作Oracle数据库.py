import cx_Oracle

conn = cx_Oracle.connect('scott', 'zmh123', 'localhost:49161/helowin')


cursor = conn.cursor()

sql = "select * from emp"

cursor.execute(sql)

# print(cursor.fetchone())
print(cursor.fetchall())



