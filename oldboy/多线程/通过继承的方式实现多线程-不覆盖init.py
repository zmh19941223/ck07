import threading
import time


class MyThread(threading.Thread):

    def __init__(self, name):
        threading.Thread.__init__(self, name="[线程%s]" % name)  # 设置线程名字
        # self.setName("[线程%s]" % name)  # 设置线程名字

    # 重写方法
    def run(self):
        print("%s开始  %s" % (threading.current_thread().getName(), time.ctime()))  # 打印当前线程的名字
        time.sleep(2)
        print("%s结束  %s" % (threading.currentThread().name, time.ctime()))


if __name__ == '__main__':

    # t1 = MyThread()
    # t2 = MyThread()
    # t1.start()
    # t2.start()
    # print("主线程")

    # 通过循环实例化多个线程
    for i in range(3):
        MyThread('%s' % i).start()
        # MyThread(str(i)).start()
