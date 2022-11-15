import unittest
from unittestreport import TestRunner
from common.handle_path import CASES_DIR, REPORT_DIR

suite = unittest.defaultTestLoader.discover(CASES_DIR)

runner = TestRunner(suite,
                    filename="py35.html",
                    report_dir=REPORT_DIR,
                    )

runner.run()

# ------------------------路径处理代码---------------------------------

# from Aday18_demo.demo_01path_handle import p2
# print(p2)

# from Aday18_demo.demo_01path_handle import n,fp
#
# print(n)
# print(fp)


# print(__file__)

# from Aday18_demo.demo_02path_handle import base_path
# print(base_path)
