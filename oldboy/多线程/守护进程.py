from time import *
import threading

# 守护进程就是只要主线程结束则会自动结束, 而主线程会等待非守护进程结束才会结束


def test1():
    print("begin listening test1 %s" % ctime())
    sleep(3)
    print("end listening test1 %s" % ctime())


def test2():
    print("begin listening test2 %s" % ctime())
    sleep(5)
    print("end listening test2 %s " % ctime())


if __name__ == '__main__':
    t1 = threading.Thread(target=test1)
    t2 = threading.Thread(target=test2)

    Threads = [t1, t2]

    # t2.setDaemon(True)  # 守护进程必须在start之前设置 如果把执行时间较短的线程设为守护线程,其实没意义,因为不用等主线程执行完,它就执行完了
    t1.setDaemon(True)
    for t in Threads:
        t.start()

    print("主线程执行 %s" % ctime())


'''
    执行分析:
    1. t2.setDaemon(True)  # 守护进程必须在start之前设置
    
    begin listening test1 Sun Jun  7 08:40:56 2020
    begin listening test2 Sun Jun  7 08:40:56 2020
    ending Sun Jun  7 08:40:56 2020  # 3个线程同时执行
    end listening test1 Sun Jun  7 08:40:59 2020  # 3s后,t1结束,t1为非守护线程,所以主线程结束,从而t2被动终止了

'''
