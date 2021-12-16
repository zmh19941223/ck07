import socket

# 获取一个socket
phone = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

phone.connect(('127.0.0.1', 3000))

phone.send("hello".encode('utf-8'))

print("客户端等待".center(30, '*'))
data = phone.recv(1024)

print("收到服务器端的消息:%s" % data)
