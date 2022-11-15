import pytest


# class TestDome999:
#     cases = [11, 22, 33, 4, 2, 44, 112, 33, 44]
#
#     @pytest.mark.parametrize('item', cases)
#     def test_demo888(self, item):
#         assert item > 20


class TestDome999:
    # cases = [
    #     {'case_id': 1, 'data': 22, "expected": 22, 'title': '成功的用例'},
    #     {'case_id': 2, 'data': 12, "expected": 22, 'title': '失败的用例'},
    #     {'case_id': 3, 'data': 33, "expected": 22, 'title': '失败的用例'}
    # ]

    # @pytest.mark.parametrize(('case_id', 'data', 'expected', 'title'), cases)
    # def test_demo888(self, case_id, data, expected, title):
    #     print(case_id, data)
    #     # assert item > 20

    cases = [11, 22, 33, 4, 2, 44, 112, 33, 44]
    @pytest.mark.parametrize('item', cases)
    def test_demo888(self, item):
        assert item > 20

# -------------------------uniitest的用法--------------------------------------
# import unittest
# from unittestreport import ddt, list_data
#
#
# @ddt
# class TestUnit(unittest.TestCase):
#     cases = [11, 22, 33, 4, 2, 44, 112, 33, 44]
#
#     @list_data(cases)
#     def test_001(self, item):
#         assert item > 20
