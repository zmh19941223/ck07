import os

# print(os.scandir())
# print(os.getcwd())
# print(os.path.join('a', 'b', 'c'))  # Join two (or more) paths.


# 也可以用 os.listdir() 默认是取当前目录
for item in os.scandir(r"/Users/mac/Documents/PycharmProjects/oldboy/"):
    # print(item, os.path.isfile(item))
    # print(item.name, item.path, item.is_dir())
    # print(item, os.path.isdir(item))
    pass

# 路径 [目录列表] [文件列表]
for a, b, c in os.walk(r'/Users/mac/Documents/PycharmProjects/oldboy/'):
    print(a,b,c)
