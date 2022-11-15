# ---------------------pyest用例的前后置---------------------------------------
"""
测试类的前后置方法
    1、用例级别的：setup 和teardown
    2、测试类级别的前后置方法：setup_class 和teardown_class


"""


class TestLogin:

    @classmethod
    def setup_class(cls):
        print('----------类级别前置---------------')
        # 用例的前置方法

    @classmethod
    def teardown_class(cls):  # tearDownClass
        print('----------类级别后置---------------')

    def setup(self):  # setUp
        print('----------用例级别前置---------------')
        # 用例的前置方法

    def teardown(self):  # tearDown
        print('----------用例级别后置---------------')

    def test_c01(self):
        print('------case01-------------')
        assert 1000 == 1000

    def test_c03(self):
        print('------case02-------------')
        assert 1000 == 1000
