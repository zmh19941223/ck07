"""
============================
Author:柠檬班-木森
Time:2020/12/8 21:50
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import yaml

with open('conf.yaml', 'r', encoding='utf-8') as f:
    res = yaml.load(f, Loader=yaml.Loader)

print(res,type(res))
