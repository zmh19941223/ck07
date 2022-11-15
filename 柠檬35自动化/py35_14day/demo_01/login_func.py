"""
============================
Author:柠檬班-木森
Time:2020/12/1  20:14
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""


def login_check(username=None, password=None):
    """
    登录校验的函数
    :param username: 账号
    :param password:  密码
    :return: dict type
    """
    if username != None and password != None:
        if username == 'python35' and password == 'lemonban':
            return {"code": 0, "msg": "登录成功"}
        else:
            return {"code": 1, "msg": "账号或密码不正确"}
    else:
        return {"code": 1, "msg": "所有的参数不能为空"}


if __name__ == '__main__':
    # 1、账号密码正确
    res = login_check('python35', 'lemonban')
    expected = {"code": 0, "msg": "登录成功"}
    # if res == expected:
    #     print("用例：正确的账号密码 --执行通过")
    assert res ==expected
    # 2、密码错误
    res = login_check('python35', 'lemonban222')
    expected = {"code": 1, "msg": "账号或密码不正确"}
    assert res == expected
    # if res == expected:
    #     print("用例：密码错误 --执行通过")
