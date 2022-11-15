import random


def work1():
    # 第一步：读取数据,每一行作为一个元素放到列表中
    with open('data.txt', encoding='utf8') as f:
        datas = f.readlines()
    # 第二步：将数据转换为字典
    res = {}
    for i, v in enumerate(datas):
        key = "data{}".format(i)
        value = v.replace("\n", "")
        res[key] = value
    return res


"""
url:www.baidu.com,mobilephone:13760246701,pwd:123456     
split(',')  
['url:www.baidu.com,','mobilephone:13760246701','pwd:123456']

{'url': 'www.baidu.com', 'mobilephone': '13760246701', 'pwd': '123456'}

"""


def work2_1():
    # 第一步：读取数据,每一行作为一个元素放到列表中
    with open('cases.txt', 'r') as f:
        datas = f.readlines()
    # 第二步：将数据转换为列表
    # 创建一个空列表
    cases = []
    # # 遍历出来每一行数据
    for i in datas:
        i = i.replace('\n', '')
        #     # 将该行数据使用split按，进行分割,得到一个列表
        itme = i.split(',')
        # 创建一个空字典，用例存放该行数据
        dic = {}
        # 遍历分割后的列表，
        for j in itme:
            # 将遍历出来的数据，按:分割，得到key,value,然后加入到字典中
            key = j.split(':')[0]
            value = j.split(':')[1]
            dic[key] = value
        # 将该行数据加入到列表中
        cases.append(dic)
    # # 完成转换之后，将转换后的数据 进行返回
    return cases


def work2_2(datas):
    # 第一步：读取数据,每一行作为一个元素放到列表中
    # 第二步：将数据转换为字典
    dic = {}
    for i in range(len(datas)):
        dic["data{}".format(i + 1)] = datas[i]
    return dic


def work3():
    # 打开文件
    with open(file="log.txt", mode='a', encoding='utf-8') as f:
        print('---石头剪刀布游戏开始----')
        print('请按下面提示出拳：')
        dic = {1: "石头", 2: "剪刀", 3: "布"}
        while True:
            print('石头【1】 剪刀【2】 布【3】 结束游戏【4】')
            # 用户输入数字
            user_num = int(input('请输入你的选项：'))
            # 电脑随机生成数字
            r_num = random.randint(1, 3)
            if 1 <= user_num <= 3:
                # 在这里判断游戏的胜负
                # pass：表示通过，没想好写什么代码之前可以用来占位
                if (user_num - r_num == -1) or (user_num - r_num == 2):
                    print("你的出拳是{},电脑出拳：{}，您赢了".format(dic[user_num], dic[r_num]))
                    f.write("你的出拳是{},电脑出拳：{}，您赢了\n".format(dic[user_num], dic[r_num]))
                elif user_num == r_num:
                    print("你的出拳是{},电脑出拳：{}，平局".format(dic[user_num], dic[r_num]))
                    f.write("你的出拳是{},电脑出拳：{}，平局\n".format(dic[user_num], dic[r_num]))
                else:
                    print("你的出拳是{},电脑出拳：{}，您输了".format(dic[user_num], dic[r_num]))
                    f.write("你的出拳是{},电脑出拳：{}，您输了\n".format(dic[user_num], dic[r_num]))
            elif user_num == 4:
                # 用户输入4，游戏结束
                print('游戏结束')
                break
            else:
                print('您出拳有误，请按规矩出拳')


if __name__ == '__main__':
    res1 = work1()
    print("第1题结果\n", res1)

    datas = work2_1()
    print("第2题要求1结果\n", datas)

    res22 = work2_2(datas)
    print("第2题要求2结果\n", res22)

    work3()
