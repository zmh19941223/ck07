import unittest
from unittestreport import TestRunner

suite = unittest.defaultTestLoader.discover(r"C:\project\python_35\py35_14day\task_13day\testcase")
runner = TestRunner(suite)
runner.run()
