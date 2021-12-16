from urllib import request

url = r'http://www.baidu.com'
res = request.urlopen(url).read()
print(type(res))  # <class 'bytes'>
# print(res.decode('utf-8'))