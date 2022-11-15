
import pytest


@pytest.fixture(scope='function')
def case_setup():
    print("---用例级别的前置代码------")

    yield

    print("---用例级别的后置代码------")


@pytest.fixture(scope='class')
def cls_setup():
    print("---类级别的前置代码------")

    yield

    print("---类级别的后置代码------")


