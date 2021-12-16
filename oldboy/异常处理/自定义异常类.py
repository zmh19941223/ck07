class MyException(Exception):  # 自定义的异常类必须继承系统的异常类
    def __init__(self, msg):
        self.msg = msg


# raise MyException("自定义异常")
print(MyException("aaa"))
