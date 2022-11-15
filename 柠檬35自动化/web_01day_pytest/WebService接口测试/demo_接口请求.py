from suds import client

url = "http://ws.webxml.com.cn/webservices/qqOnlineWebService.asmx?wsdl"

# 创建客户端对象
web_s = client.Client(url)

# 打印客户端信息
# print(web_s)

# 准备参数，请求接口
res = web_s.service.qqCheckOnline(qqCode='121278987')

# # 获取返回的结果：
print(res)
