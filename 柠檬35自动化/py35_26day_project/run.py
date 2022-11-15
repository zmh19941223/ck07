import unittest
from unittestreport import TestRunner
from common.handle_path import CASES_DIR, REPORT_DIR

suite = unittest.defaultTestLoader.discover(CASES_DIR)
runner = TestRunner(suite,
                    filename="py35.html",
                    report_dir=REPORT_DIR,
                    )

runner.run()
