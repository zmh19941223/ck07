"""
============================
Author:柠檬班-木森
Time:2020/11/12  20:19
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

"""
数值：
    算术运算
    比较运算：>  <  <=  >=  !=   ==
        n = int(input("输入数字："))
        if 22 != n:
            print('成立')
        else:
            print("不成立")

其他的运算符
    1、逻辑运算
        and：与（前后的添加都要成立）
            n = 10
            m = 60
            if m + n > 10 and n - m > 0:
                print("成立")
            else:
                print("不成立")

        or: 或(前后只要有一个条件成立即可）
            if m + n > 10 or n - m > 0:
                print("成立")
            else:
                print("不成立")
        
        not：非（取反）
        
    2、成员运算
        in  : 判读是里面的成员
        not in: 判断不是里面的成员
    
    3、身份运算符：判断id是否一致（了解）
        is:
        is not:
    
        面试题：==  和 is  的区别？

    
    4、赋值运算符：
        = :赋值
        +=： 
        -=
        *=
        /=
        %=
      
        
    
    

    
"""

# n = 10
# m = 100
#
# if not (n - m > 0 or (m + n > 10 and n - m > 0)):
#     print("---yes------------")
# else:
#     print("---no------------")


# 成员运算：

# stus = ["糯米", "当你", "Sen", "不动声色"]
#
# name = input("输入名字：")
#
# if name in stus:
#     print("是咱们班的，赶紧上课写代码")
# else:
#     print("不是的，不能进教室")

# 字符串
# str1 = "ducshkpythonfsdfbsdfsdf"
# if 'python' in str1:
#     print("----yes----")
# else:
#     print('----no----')

# 字典：字典成员运算判断的默认是键
# str1 = {"name": "musen"}
# if 'musen' not in str1.values():
#     print("----yes----")
# else:
#     print('----no----')

# li = [11, 22]
# li2 = li
# li3 = li.copy()
#
# print(id(li),id(li2),id(li3))
#
# if li is not li3:
#     print("----yes----")
# else:
#     print('----no----')

#  ----------------赋值运算-------------------
n = 100
# n = n + 1  #等同于 +=
# n += 1
n -= 10

print(n)
