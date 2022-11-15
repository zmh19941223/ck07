import pymysql


class HandleDB:

    def __init__(self, host, port, user, password, *args, **kwargs):
        self.con = pymysql.connect(host=host,
                                   port=port,
                                   user=user,
                                   password=password,
                                   charset='utf8',
                                   # cursorclass=pymysql.cursors.DictCursor
                                   *args, **kwargs
                                   )

    def find_all(self, sql):
        """查询查询到的所有数据"""
        # with self.con as cur:
        #         #     cur.execute(sql)
        #         # res = cur.fetchall()
        #         # cur.close()
        #         # return res

        # 0.9.3之后的pymysql
        cur = self.con.cursor()
        cur.execute(sql)
        res = cur.fetchall()
        cur.close()
        return res

    def find_one(self, sql):
        """查询一条数据"""
        with self.con as cur:
            cur.execute(sql)
        res = cur.fetchone()
        cur.close()
        return res

    def find_count(self, sql):
        """sql执行完之后，返回的数据条数"""
        with self.con as cur:
            res = cur.execute(sql)
        cur.close()
        return res

    def __del__(self):
        self.con.close()


if __name__ == '__main__':
    from common.handle_conf import conf

    sql = "SELECT * FROM futureloan.member LIMIT 5;"
    db = HandleDB(
        host=conf.get('mysql', 'host'),
        port=conf.getint('mysql', 'port'),
        user=conf.get('mysql', 'user'),
        password=conf.get('mysql', 'password')
    )
    res = db.find_all(sql)
    print(res)
    # del db

    db2 = HandleDB(
        host=conf.get('mysql2', 'host'),
        port=conf.getint('mysql2', 'port'),
        user=conf.get('mysql2', 'user'),
        password=conf.get('mysql2', 'password')
    )
