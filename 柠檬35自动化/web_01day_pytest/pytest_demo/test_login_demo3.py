# ---------------------pyest用例的前后置---------------------------------------
"""
测试类的前后置方法
方式一：
    1、用例级别的：setup 和teardown
    2、测试类级别的前后置方法：setup_class 和teardown_class  (类方法)


方式二：pytest.fixture
    定义：
        1、@pytest.fixture(scope='function')定义用例级别的前后置方法
        2、@pytest.fixture(scope='class')定义类级别的前后置方法
    调用：
        1、在用例方法的参数中，写上前后置的方法名
        2、在定义前后置方法的时候(设置参数autouse=True)，可以设置为自动执行  （用的比较少）

    注意点：前后置方法可以统一放到conftest.py文件中（用例文件中直接使用，不需要导入）

# pytest用例执行的顺序，同一个文件按照用例文件中代码的前后顺序

#  包级别  模块级别  会话级别（项目阶段再讲）

"""

import pytest


@pytest.fixture(scope='function', autouse=True)
def case_setup():
    print("---用例级别的前置代码------")

    yield

    print("---用例级别的后置代码------")


@pytest.fixture(scope='class', autouse=True)
def cls_setup():
    print("---类级别的前置代码------")

    yield

    print("---类级别的后置代码------")



class TestLogin:

    # def test_c01(self, case_setup, cls_setup):
    #     print('------case01-------------')
    #     assert 1000 == 1000
    #
    # def test_c03(self, case_setup):
    #     print('------case02-------------')
    #     assert 1000 == 1000

    def test_c01(self):
        print('------case01-------------')
        assert 1000 == 1000

    def test_c03(self):
        print('------case02-------------')
        assert 1000 == 1000


class TestLogin2:

    # def test_c01(self, case_setup, cls_setup):
    #     print('------case01-------------')
    #     assert 1000 == 1000
    #
    # def test_c03(self, case_setup):
    #     print('------case02-------------')
    #     assert 1000 == 1000

    def test_c01(self):
        print('------case0222-------------')
        assert 1000 == 1000

    def test_c03(self):
        print('------case0222333-------------')
        assert 1000 == 1000
