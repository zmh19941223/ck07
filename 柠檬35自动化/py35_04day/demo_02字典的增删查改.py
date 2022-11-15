"""
============================
Author:柠檬班-木森
Time:2020/11/10  20:18
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
字典的增删查改：
    增：
        1、通过键进行赋值
        2、update:一次性往字典中添加多个元素（将一个字典更新到当前的字典中）
    
    改：
        1、通过键进行赋值(有则改、无则增)
    
    删：
        1、pop:指定键进行删除(返回删除的元素对应的值)
        2、popitem：删除最后一个加入道字典中的元素，以元组的形式返回键和值
        3、clear:清空字典
    查：
       1、通过键查找值，如果键不存在会报错（KeyError）。
       2、get:通过键查找值,如果键不存在,不会报错(返回None)

字典中的值：可以是任意类型的数据


"""

# ---------------增------------------：
# dic = {}
# # 1、通过键进行赋值
# dic["skill"] ='python'
# print(dic)
#
# # 2、update：
# dic.update({"name":"msuen","age":18})
# print(dic)

# ---------------改-----------------：
# dic = {"name": "msuen", "age": 18}
# # 通过键进行赋值
# dic["name"] = "糯米"
# print(dic)

# ---------------删除-----------------
# dic = {"name": "msuen", "age": 18}
# 1、pop:指定键进行删除
# res = dic.pop("age")
# print(res)
# print(dic)

# dic["a1"] = 101
# dic["a2"] = 102
# dic["a3"] = 103
# dic["a4"] = 104
# 2、popitem：删除最后一个加入到字典中的元素，以元组的形式返回键和值
# res = dic.popitem()
# print(res)
# print(dic)
# 3、clear:清空字典
# dic.clear()
# print(dic)

# ---------------查------------
dic = {"name": "msuen", "age": 18}

# 1、通过键查找值，如果键不存在会报错（KeyError）。
# res = dic["age"]
# print(res)

# 2、get:通过键查找值,如果键不存在,不会报错(返回None)
res2 = dic.get("name1")
print(res2)