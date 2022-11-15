from decimal import Decimal

a = 10
b = 10.10
# assert a ==b

# 定义decimal类型的数据
res = Decimal('10.10')

# print(res,type(res))

from unittest import TestCase
test = TestCase()
# test.assertEqual(10, Decimal('10.00'))  # 断言通过
# test.assertEqual(10.1, Decimal('10.1')) # 断言不通过

# assert b == res

# python中的浮点数存在精度丢失的问题
print(3.3 - 2.1)

# 注意点：创建Decimal 类型数据的时候，传入的数据要是字符串类型
aaa = Decimal('3.3') - Decimal('2.1')
print(aaa)

# aaa = Decimal(3.3) - Decimal(2.1)
# print(aaa)


# Decimal是python中用来表示浮点数精度的一种数值类型
