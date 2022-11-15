"""
============================
Author:柠檬班-木森
Time:2020/12/8 20:59
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
from py35_16day.demo.handler_log import create_log

log = create_log()

log.info("python001")
log.debug("测试一下")
log.error("用例执行失败")
