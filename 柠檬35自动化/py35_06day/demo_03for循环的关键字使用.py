"""
============================
Author:柠檬班-木森
Time:2020/11/14  10:05
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
continue的作用：终止本轮循环，开启下一轮循环(回到for中获取下一个数据)
break的作用：强制终止循环


for-else语法：

for x in XX:
    # 循环体
else:
    #循环正常结束执行执行else中的代码
    # 循环通过break强制结束则不会执行else

"""
# continue的作用：终止本轮循环，开启下一轮循环(回到for中获取下一个数据)
# for i in range(10):
#     if i == 5:
#         continue
#     print(i)
#     print('----------------------------------')

# break的作用：强制终止循环
# for i in range(10):
#     if i == 5:
#         break
#     print(i)
#     print('----------------------------------')

#
# for i in range(10):
#     print('-----{}---------'.format(i))
#     if i == 5:
#         break
# else:
#     print("所有的数据全部遍历完，执行else中的代码")


# --------------for--else案例：判断输入的数据的是否存在
li = [
    {"name": "py35", "pwd": 'lemonban'},
    {"name": "py36", "pwd": 'lemonban'},
    {"name": "py37", "pwd": 'lemonban'},
]
name = input("请输入用户名:")

#  判断用户输入的用户名，是否存在

# for item in li:
#     if item["name"] == name:
#         print("用户存在")
#         break
# else:
#     print("用户不存在")
