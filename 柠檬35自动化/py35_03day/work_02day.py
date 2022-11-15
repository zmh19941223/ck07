"""
============================
Author:柠檬班-木森
Time:2020/11/6  14:00
E-mail:3247119728@qq.com
Company:湖南零檬信息技术有限公司
============================
1、现在有变量 a = ‘hello’ ,    b = ‘python18’     c = ‘!’
通过相关操作变成一个字符串：'hello python18 !'（注意点:转换之后单词之间有空格）


2、现在有一个字符串 s = 'abcdefghijk',
    要求一：通过切片获取: defg
    cdef ghij k
    要求二：通过切片获取：cgk

3、现有字符串 str1 = "PHP is the best, programming, $language in, the world! "
      要求1：查找字符串中$符对应的索引值
      要求2：将给定字符串的PHP替换为Python
      要求3：替换以后，将字符串以逗号为分割点进行分割

4、卖橘子的计算器：写一段代码，提示用户输入橘子的价格，然后提示用户输入斤数，
最后按如下格式输出到控制台！
    橘子价格为XX.XX元每斤，购买XX斤，应该支付的价格为XX.XX元

    注意点：
    1、橘子价格和应该支付的价格打印保留两位小数
    2、input输入的数据，变量接收到都是字符串，此处需要大家扩展学习 【python中如何将字符串(str)转换为整数(int)】，       （此题为选做题，没时间扩展的小伙伴可以不写哦，希望大家养成扩展学习的习惯）


"""
print("--------------第1题------------------------")
a = 'hello'
b = 'python18'
c = '!'
res = ' '.join((a, b, c))
print(res)
print("--------------第2题------------------------")
s = 'abcdefghijk'
res1 = s[3:7]
print(res1)

res2 = s[2::4]
print(res2)

print("--------------第3题------------------------")
str1 = "PHP is the best, programming, $language in, the world! "

index = str1.find("$")
print(index)

s2 = str1.replace("PHP", 'python')
print(s2)

res3 = s2.split(',')
print(res3)

print("--------------第4题-----------扩展题-------------")
price = input("请输入橘子的价格:")
price = float(price)
number = input("请输入购买橘子的斤数：")
number = float(number)
sum = price * number

desc = '橘子价格为{:.2f}元每斤，购买{}斤，应该支付的价格为{:.2f}元'.format(price, number, sum)
print(desc)


