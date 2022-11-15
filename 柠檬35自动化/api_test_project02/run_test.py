import unittest
from common.handlepath import CASEDIR, REPORTDIR
from unittestreport import TestRunner

# 第一步：加载用例到套件
suite = unittest.defaultTestLoader.discover(CASEDIR)

# 第二步：执行用例
runner = TestRunner(suite,
                    filename="report.html",
                    report_dir=REPORTDIR,
                    )
runner.run()
