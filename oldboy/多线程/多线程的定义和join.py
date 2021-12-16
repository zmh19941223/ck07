from time import *
import threading

def test1():
    print("begin listening test1 %s" % ctime())
    sleep(3)
    print("end listening test1 %s" % ctime())


def test2():
    print("begin listening test2 %s" % ctime())
    sleep(5)
    print("end listening test2 %s" % ctime())


if __name__ == '__main__':
    t1 = threading.Thread(target=test1)
    t2 = threading.Thread(target=test2)

    Threads = [t1, t2]

    # t1.join()  # join必须在start后 join 的位置很重要
    # t1.start()
    # t1.join()  # join与此处表示会阻塞t2 和 主线程
    # t2.start()
    # t2.join()

    # t1.join()  # join与此处则不会阻塞t2

    # t1.join()
    # t2.join()  # 如果是执行时间较长的线程阻塞

    # for t in Threads:
    #     t.start()
    test1()
    test2()
    print("ending %s" % ctime())

'''
执行过程分析:
    1.正常流程
        Threads = [t1, t2]
    
        for t in Threads:
            t.start()
        
        begin listening test1 Sun Jun  7 07:58:32 2020
        begin listening test2 Sun Jun  7 07:58:32 2020
        ending
        end listening test1 Sun Jun  7 07:58:35 2020
        end listening test2 Sun Jun  7 07:58:37 2020
        主线程和2个子线程同时运行,3s后t1结束,5s后t2结束
            
    2.阻塞t1线程
        t1.start()
        t1.join()  # join表示阻塞下面的线程
        t2.start()
        
        begin listening test1 Sun Jun  7 08:08:34 2020  # 先运行t1
        end listening test1 Sun Jun  7 08:08:37 2020   # 3s后t1结束,t2和主线程开始执行
        begin listening test2 Sun Jun  7 08:08:37 2020
        ending Sun Jun  7 08:08:37 2020
        end listening test2 Sun Jun  7 08:08:42 2020  # 5s后 t2结束
        
    3.阻塞 t1和t2线程  or 阻塞t2线程
        t1.join()
        t2.join()
        
        begin listening test1 Sun Jun  7 08:23:50 2020
        begin listening test2 Sun Jun  7 08:23:50 2020
        end listening test1 Sun Jun  7 08:23:53 2020  # 3s后t1结束
        end listening test2 Sun Jun  7 08:23:55 2020  # 5s后t2结束
        ending Sun Jun  7 08:23:55 2020  # 主线程等待t2结束才执行
        
    4.间隔阻塞 相当于直接按顺序调用函数
        t1.start()
        t1.join()  # join与此处表示会阻塞t2 和 主线程
        t2.start()
        t2.join()
        
        等价于:
            test1()
            test2()
        
        begin listening test1 Sun Jun  7 08:29:01 2020
        end listening test1 Sun Jun  7 08:29:04 2020
        begin listening test2 Sun Jun  7 08:29:04 2020
        end listening test2 Sun Jun  7 08:29:09 2020
        ending Sun Jun  7 08:29:09 2020
'''











