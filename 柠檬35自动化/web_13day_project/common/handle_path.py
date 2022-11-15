"""
此模块专门用例处理项目中的绝对路径
"""
import os

# 项目的根目录的绝对路径
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 用例数据所在目录：
DATA_DIR = os.path.join(BASE_DIR, "datas")

# 配置文件的根目录
CONF_DIR = os.path.join(BASE_DIR, "conf")

# 日志文件所在目录
LOG_DIR = os.path.join(BASE_DIR, "logs")

# 报告所在路径
REPORT_DIR = os.path.join(BASE_DIR, "reports")

# 用例模块所在目录
CASES_DIR = os.path.join(BASE_DIR, "testcases")

# 错误截图所在目录
ERROR_IMAGE_DIR = os.path.join(BASE_DIR, "error_images")
