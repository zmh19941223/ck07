import threading
import time


class MyThread(threading.Thread):
    def __init__(self, num):
        threading.Thread.__init__(self)  # 因为覆盖了父类的__init__方法,所以要手动调用父类的__init__方法
        self.num = num

    # 重写方法
    def run(self):
        print("自定义线程%d开始  %s" % (self.num, time.ctime()))
        time.sleep(self.num)
        print("自定义线程%d结束  %s" % (self.num, time.ctime()))


if __name__ == '__main__':

    t1 = MyThread(1)
    t2 = MyThread(2)
    t1.start()
    t2.start()
    print("主线程")
