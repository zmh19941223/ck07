import pytest

# pytest.main(['-m', 'musen'])
# pytest  -m musen


# pytest.main(['testcase/test_demo1.py::TestLogin','-m','musen'])
# pytest testcase/test_demo1.py::TestLogin -m musen


#  以下三种报告几乎不用
# txt文本格式
# pytest.main(['testcase/test_demo3.py','--resultlog=reports/report.txt'])
# XML格式的
# pytest.main(['testcase/test_demo3.py','--junitxml=reports/zdemo.xml'])
# HTML格式的
# pytest.main(['testcase/test_demo3.py','--html=reports/py35.html'])


# pytest中的allure报告平台集成
# 执行用例 生产allure报告
# pytest.main(['testcase/test_demo3.py',
#              '--alluredir=allure_reports'])


# 重运行
# pytest.main(['testcase/test_demo3.py',
#              '--reruns', '3',
#              '--reruns-delay', '5',
#              '--alluredir=allure_reports'])

# pytest --reruns 3 --reruns-delay 5


pytest.main(['testcase/test_demo3.py','-s'])

# 参数 -s:  阻止用例中输出的信息被吞

# 参数 -v:  显示用例执行的详细信息