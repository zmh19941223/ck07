import json


with open("data.json",'r',encoding='utf-8') as f:
    # 读取文件中的json数据并自动化转换为对应的py中相关的数据类型
    res = json.load(f)

print(res,type(res))
print(res['data'],type(res['data']))