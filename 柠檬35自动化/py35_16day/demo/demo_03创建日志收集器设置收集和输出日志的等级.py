"""
============================
Author:柠檬班-木森
Time:2020/12/8 20:02
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
"""
logging.getLogger：创建日志收集器
    创建日志收集器的时候不传name参数，返回的是默认的收集器(root)
    传name参数则会创建一个新的日志收集器



"""

import logging

# 创建日志收集器
log = logging.getLogger('musen')

# 设置日志收集器收集日志的等级
log.setLevel("DEBUG")

# 设置输出日志的等级
# 1、创建一个日志输出的渠道(输出到控制台)
sh = logging.StreamHandler()
sh.setLevel("DEBUG")
# 2、将输出渠道绑定到日志收集器上
log.addHandler(sh)



log.debug("----------debug----------")
log.info("----------info----------")
log.warning("----------warning----------")
log.error("----------error----------")
log.critical("----------critical----------")
