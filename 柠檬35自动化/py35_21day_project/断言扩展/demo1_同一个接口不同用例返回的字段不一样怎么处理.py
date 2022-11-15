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


# def assertDictIn(self, expected, res):
#     """字典成员运算的逻辑"""
#     for k, v in expected.items():
#         if res.get(k) == v:
#             pass
#         else:
#             raise AssertionError("{} not in {}".format(expected, res))


# res = {"code": 0, "msg": "OK", "time": '20201212'}
# # 预期结果
# expected = {"code": 0, "msg": "OK",}



# res = {"user": '字段不能不为空', "time": '20201212'}
# # 预期结果
# expected = {"user": '字段不能不为空'}

# for k, v in expected.items():
#     if res.get(k) == v:
#         print(k, v, 'res中找到了这个键和值')
#         pass
#     else:
#        raise AssertionError("{} [k,v] not in {}".format(expected, res))
