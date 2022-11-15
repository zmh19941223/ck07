import os


# 获取项目的根目录路径
base_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 获取用例数据文件夹所在目录的绝对路径
data_dir = os.path.join(base_path,"datas")
print(data_dir)

