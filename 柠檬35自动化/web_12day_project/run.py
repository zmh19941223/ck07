"""
============================
Author:柠檬班-木森
Time:2021/2/5 20:05
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
=======
"""
from common.handle_path import REPORT_DIR

import pytest

pytest.main(['-s', '-v', '--alluredir={}'.format(REPORT_DIR)])

#  获取当前的系统时间
# import time
# #
# # res = time.strftime("%Y-%m-%d_%H_%M_%S")
# #
# # print(res)
