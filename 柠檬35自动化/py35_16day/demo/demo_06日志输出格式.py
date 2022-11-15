"""
============================
Author:柠檬班-木森
Time:2020/12/8 20:02
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""

import logging

# 1、创建日志收集器
log = logging.getLogger('musen')

# 2、设置日志收集器收集日志的等级
log.setLevel("DEBUG")

# 3、设置输出渠道
# 3.1、输出到文件
fh = logging.FileHandler('lemonban.log', encoding="utf-8")
fh.setLevel("WARNING")
log.addHandler(fh)

# 3.2、输出到控制台
sh = logging.StreamHandler()
sh.setLevel("DEBUG")
log.addHandler(sh)

# 4、设置日志输出的等级
formats='%(asctime)s - [%(filename)s-->line:%(lineno)d] - %(levelname)s: %(message)s'
log_format = logging.Formatter(formats)
# 设置输出到控制台的日志格式
sh.setFormatter(log_format)

log_format2 = logging.Formatter('%(asctime)s--%(levelname)s:%(message)s')

# 设置输出到文件的日志格式
fh.setFormatter(log_format2)



log.debug("----------debug----------")
log.info("----------info----------")
log.warning("----------warning----------")
log.error("----------error----------")
log.critical("----------critical----------")
