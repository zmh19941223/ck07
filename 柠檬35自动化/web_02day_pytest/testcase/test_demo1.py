import pytest


class TestLogin:

    @pytest.mark.xiaojian
    @pytest.mark.musen
    def test_pass(self):
        """正向用例"""
        assert 100 == 100

    @pytest.mark.xiaojian
    def test_01(self):
        """正向用例"""

        assert 99 == 100

    def test_02(self):
        """正向用例"""

        assert 98 == 100

    def test_03(self):
        """正向用例"""

        assert 197 == 100


class TestRegister:

    @pytest.mark.musen
    def test_pass(self):
        """正向用例"""
        assert '注册成功' == '注册成功'

    def test_01(self):
        """正向用例"""

        assert '两次密码不一致' == '注册成功'


class TestDome:
    a = 99

    @pytest.mark.skip
    def test_demo1(self):
        assert 999 == 999

    @pytest.mark.skipif(a == 99,reason='a不等于99才执行该用例')
    def test_demo3(self):
        assert 999 == 999




class TestDome2:
    pytestmark = [pytest.mark.musen]


    def test_demo21(self):
        assert 999 == 999

    def test_demo22(self):
        assert 999 == 999
