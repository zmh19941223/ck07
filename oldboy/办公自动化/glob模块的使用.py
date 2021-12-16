import glob

# print(glob.glob('*.py'))
# print(glob.glob('文件*.py'))
import os

# 切换目录
# os.chdir('temp')
# print(os.getcwd())

# 查找文件
# print(glob.glob('temp/*.txt'))
# print(glob.glob('temp/text?.txt'))  # ['temp/text1.txt', 'temp/text2.txt', 'temp/text3.txt']
# print(glob.glob('temp/text??.txt'))  # ['temp/text11.txt']
# print(glob.glob('temp/text[1-2].txt'))  # [['temp/text1.txt', 'temp/text2.txt']
# print(glob.glob('temp/text[1,2]*.txt'))  # ['temp/text1.txt', 'temp/text11.txt', 'temp/text2.txt']
# print(glob.glob('temp/text[!1]*.txt'))  # ['temp/text3.txt', 'temp/text2.txt'] 取反

# 递归查找
print(glob.glob('**/*.txt', recursive=True))