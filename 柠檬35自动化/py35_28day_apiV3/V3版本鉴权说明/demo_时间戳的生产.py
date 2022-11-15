from time import time
from common.handle_sign import HandleSign

#  时间戳的获取
t = int(time())
print('当前的时间戳：', t)

# 签名的获取
# token前50位 + 时间戳，然后进行RSA加密

token = 'trfdahdakjkfldsaf.safasytgdhijpoasdb.2432rejikjiojcfghvhjkl'
data = token[:50] + str(t)

hs = HandleSign()
res = hs.encrypt(data)
print(res)

params = {"timestamp": t, "sign": res}
print(params)