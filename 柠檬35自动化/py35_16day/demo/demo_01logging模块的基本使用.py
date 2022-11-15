"""
============================
Author:柠檬班-木森
Time:2020/12/8 20:02
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import logging

logging.debug("这是一条debug级别的日志")
logging.info("这是一条info级别的日志")

logging.warning("这是一条warning级别的日志")
logging.error("这是一条error级别的日志")
logging.critical("这是一条critical级别的日志")














#  运行下面代码就会出现警告信息
# import openpyxl
# wb = openpyxl.load_workbook(r"C:\project\python_35\py35_15day\cases.xlsx")
# sh = wb.get_sheet_by_name('login')
# print(list(sh.rows))
