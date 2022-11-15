import json

# ---------------------python转json------------------------------------

# dic = {"aa": None, 'bb': 'python', "cc": True, "dd": False, "ee": [11, 22, 33]}
# # 将python数据(列表或者字典)转换为json(json串：字符串)
# resd = json.dumps(dic)
# print(resd)
#
# print(json.dumps(True))
# res = json.dumps(True)
#
# print(res, type(res))
# print(resd, type(resd))


# ---------------------json转python------------------------------------
s_json = '{"aa": null, "bb": "python", "cc": true, "dd": false, "ee": [11, 22, 33]}'

# 将json字符串转换为对应的python数据
res = json.loads(s_json)
print(res)

"""
json模块总结：
load:读取json文件转为对应的python数据
loads:将json字符串转换为python数据
dumps:将python数据转换为json字符串

"""
