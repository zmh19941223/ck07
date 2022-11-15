# 同一个接口不同用例返回的字段不一样怎么处理
import unittest


# class TestDome(unittest.TestCase):
#
#     def test_demo(self):
#         # 实际结果
#         res = {"code": 0, "msg": "OK", "time": '20201212'}
#         # 预期结果
#         expected = {"code": 0, "msg": "OK", }

# assert res['code'] == expected['code']
# assert res['msg'] == expected['msg']
# self.assertEqual(expected['code'], res['code'])
# self.assertEqual(expected['msg'], res['msg'])

# self.assertIn(expected, res)

# self.assertDictIn(expected,res)


def assertDictIn(expected, res):
    """字典成员运算的逻辑"""
    for k, v in expected.items():
        if res.get(k) != v:
            info = "Expected result the key value pair of this dictionary is not in the actual result" \
                   "\nexpected: {}" \
                   "\nres: {}".format(expected, res)
            raise AssertionError(info)


# res = {"code": 0, "msg": "OK", "time": '20201212'}
# # 预期结果
# expected = {"code": 0, "msg": "OK",}


res = {"user": '字段不能不为空', "time": '20201212'}
# 预期结果
expected = {"user": '字段不能不为空2'}
assertDictIn(expected, res)

# for k, v in expected.items():
#     if res.get(k) == v:
#         pass
#     else:
#         raise AssertionError("{} [k,v] not in {}".format(expected, res))
