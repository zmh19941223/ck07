"""
============================
Author:柠檬班-木森
Time:2020/11/10  20:18
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
random:生成数据数的官方库

"""
import random

# 生成一个随机的整数(指定范围，包含边界值)
res = random.randint(0, 3)
print(res)

# 生成一个随机的小数(0到1之间)
res2 = random.random()
print(res2)

# 需求：如果生成一个10-20之间的小数？(指定范围的小数)
res3 = random.uniform(10, 20)
print(res3)

# 从列表中随机选择一个数据
li = [11, 22, 33, 44, 55]
res4 = random.choice(li)
print(res4)
