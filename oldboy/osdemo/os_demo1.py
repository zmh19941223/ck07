import os

print(os.path)  # 当前文件的绝对路径 /Users/mac/Documents/PycharmProjects/oldboy/osdemo/os_demo1.py
print(os.path.exists('oldboy'))  # false
print(os.path.exists('osdemo'))  # false

print(os.path.exists('os_demo1.py'))  # True
print(os.path.exists('/Users/mac/Documents/PycharmProjects/'))  # True

print(os.path.join('hello', 'report.html'))

print(os.path.split(__file__))
print()