"""
============================
Author:柠檬班-木森
Time:2020/11/24  19:36
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
"""
import random

"""

1、写出异常处理语句中try作用是什么，以及except,else,finally下面的代码分别在什么时候会执行？（简答题）
    try：
        有可能会出错的代码(try会去监测代码执行是否出错)
    except:
        当try里面的代码执行出现错误时，会执行except中的代码,可以在这里对异常进行处理
    else:
        try中的代码执行没有错误，则会执行else中的代码
    finally:
        不管try中的代码执行是否出错，都会执行finally中的代码

2、用户输入一个数值n，打印1到n(包含n)之间所有的偶数、及其偶数个数、及其它们的平均值（如果输入非数值，请让用户重新输入）


3、优化之前作业的石头剪刀布游戏，用户输入时，如果输入非数字会引发异常，请通过异常捕获来处理这个问题。
"""


def work2():
    while True:
        try:
            n = int(input("请输入一个数字："))
        except:
            print("您输入的不是数字")
            # continue
        else:
            if n <= 1:
                print("您输入的数字不能少于1")
                continue
            nums = []
            for i in range(1, n + 1):
                if i % 2 == 0:
                    nums.append(i)
            print("所有的偶数：", nums)
            print("偶数的个数：", len(nums))
            num_avg = sum(nums) / len(nums)
            print("偶数的平均值", num_avg)
            break


# def work2():
#     try:
#         n = int(input("请输入一个数字："))
#     except:
#         print("您输入的不是数字")
#         work2()
#     else:
#         nums = []
#         for i in range(1, n + 1):
#             if i % 2 == 0:
#                 nums.append(i)
#         print("所有的偶数：", nums)
#         print("偶数的个数：", len(nums))
#         num_avg = sum(nums) / len(nums)
#         print("偶数的平均值", num_avg)


def work3():
    print('---石头剪刀布游戏开始----')
    print('请按下面提示出拳：')
    # 创建一个列表来存储 石头 剪刀 布
    li = ['石头', '剪刀', '布']
    while True:
        print('石头【1】 剪刀【2】 布【3】 结束游戏【4】')
        # 用户输入数字
        try:
            user_num = int(input('请输入你的选项：'))
        except:
            print('您出拳有误，请按规矩出拳')
            continue
        # 电脑随机生成数字
        r_num = random.randint(1, 3)
        if 1 <= user_num <= 3:
            # 判断用户和电脑是否相等
            if r_num == user_num:
                print('您的出拳为:{}，电脑出拳:{}，平局'.format(li[user_num - 1], li[r_num - 1]))
            # 判断用户胜利的情况
            elif (user_num - r_num) == -1 or (user_num - r_num) == 2:
                print('您的出拳为:{}，电脑出拳:{}，您胜利了'.format(li[user_num - 1], li[r_num - 1]))
            else:
                print('您的出拳为:{}，电脑出拳:{}，您输了'.format(li[user_num - 1], li[r_num - 1]))
        # 用户输入4，游戏结束
        elif user_num == 4:
            print('游戏结束')
            break
        else:
            print('您出拳有误，请按规矩出拳')


if __name__ == '__main__':
    work2()
    work3()

