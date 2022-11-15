import unittest

from unittestreport import TestRunner

suite = unittest.defaultTestLoader.discover(r'C:\project\python_35\py35_17day_project\testcases')

runner = TestRunner(suite,
                    filename="py35.html",
                    report_dir=r"C:\project\python_35\py35_17day_project\reports",
                    )

runner.run()
