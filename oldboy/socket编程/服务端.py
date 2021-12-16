import socket

# 获取一个socket
phone = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定IP 端口
phone.bind(('127.0.0.1', 3000))

phone.listen(5)  #
print("------")
conn, address = phone.accept()  # 等待

msg = conn.recv(1024)

# conn.send(msg.upper())

conn.close()
phone.close()
