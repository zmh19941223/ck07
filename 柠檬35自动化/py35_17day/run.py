import unittest
from unittestreport import TestRunner

suite = unittest.defaultTestLoader.discover(r"C:\project\python_35\py35_17day\testcases")

runner = TestRunner(suite)

runner.run()
