"""
============================
Author:柠檬班-木森
Time:2020/11/10  17:23
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
一、注册某个网站，需要你填写个人信息，编写一段代码要求如下（字典的增删查改操作）：
    1、运行时分别提醒输入 姓名、性别、年龄 ，输入完了，请将数据通过字典存储起来，
    2、数据存储完了，然后输出个人介绍，格式如下: 我的名字XXX，今年XXX岁，性别XX，喜欢敲代码
    3、平台需要补足您的身高和联系方式；（分别输入身高和联系方式添加到字典中） 
    4、平台为了保护你的隐私，需要你删除你的联系方式（删除字典中的联系方式）；

二、请获取下面字典中数据中的token，和reg_name
data = {
    "code": 0,
    "msg": "OK",
    "data": {
        "id": 74711,
        "leave_amount": 29600.0,
        "mobile_phone": "13367899876",
        "reg_name": "小柠檬666",
        "reg_time": "2019-12-13 11:12:53.0",
        "type": 0,
        "token_info": {
            "token_type": "Bearer",
            "expires_in": "2019-12-30 22:28:57",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJfaWQiOjc0NzExLCJleHAiOjE1Nzc3MTYxMzd9.eNMtnEWr57iJoZRf2IRsGDWm2GKj9LZc1J2SGRprAwOk7EPoJeXSjJwdh0pcVVJygHmsbh1TashWqFv1bvCVZQ"
        }
    },
    "copyright": "Copyright 柠檬班 © 2017-2019 湖南省零檬信息技术有限公司 All Rights Reserved"
}

三、有下面几个数据 ，
t1 = ("aa",11)      t2= ('bb',22)    li1 = [("cc",11)]
请通过学过的知识点，对上面三个数据进行相关操作，
得到如下字典: {"aa":11,"cc":11,"bb":22}



四、现在有列表li1 = [111,22,33,343,121,22,33,111,22,121,99]
    请去除列表重复的数据

    
五、请指出下面那些为可变类型的数据，那些为不可变类型的数据
    1、 (11)    
    2、 {11，22}
    3、 ([11,22,33])
    4、 {"aa":111}
        
"""

# ----------------第一题：---------------------
# 1、
name = input('请输入姓名：')
gender = input('请输入性别:')
age = input('请输入年龄：')
user_info = {"name": name, "gender": gender, "age": age}

# 2、
print('我的名字:{}，今年{}岁，性别:{}，喜欢敲代码'.format(user_info["name"], user_info["age"], user_info["gender"]))

# 3、
user_info['height'] = input('请输入身高：')
user_info['mobile_phone'] = input('请输入联系方式：')

# 4、
user_info.pop('mobile_phone')

# ----------------第二题：---------------------
data = {
    "code": 0,
    "msg": "OK",
    "data": {
        "id": 74711,
        "leave_amount": 29600.0,
        "mobile_phone": "13367899876",
        "reg_name": "小柠檬666",
        "reg_time": "2019-12-13 11:12:53.0",
        "type": 0,
        "token_info": {
            "token_type": "Bearer",
            "expires_in": "2019-12-30 22:28:57",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJfaWQiOjc0NzExLCJleHAiOjE1Nzc3MTYxMzd9.eNMtnEWr57iJoZRf2IRsGDWm2GKj9LZc1J2SGRprAwOk7EPoJeXSjJwdh0pcVVJygHmsbh1TashWqFv1bvCVZQ"
        }
    },
    "copyright": "Copyright 柠檬班 © 2017-2019 湖南省零檬信息技术有限公司 All Rights Reserved"
}

name = data["data"]["reg_name"]
token = data["data"]["token_info"]["token"]
print(name)
print(token)
# ----------------第三题：---------------------
t1 = ("aa", 11)
t2 = ("bb", 22)
li1 = [("cc", 22)]
li1.insert(0, t1)
li1.append(t2)
print(dict(li1))

# ----------------第四题：---------------------
li1 = [111, 22, 33, 343, 121, 22, 33, 111, 22, 121, 99]
li2 = list(set(li1))
print(li2)

# ----------------第五题：---------------------
"""
不可变：(11) 
可变：{11，22}， ([11,22,33])，{"aa":111}

"""

n = (11)
n2 = ([11, 22, 33])
print(n, type(n))
print(n2, type(n2))
#  元组中只有一个元素的情况下，要在元组中加个逗号

# 运算符：()表示一个优先运算的整体

