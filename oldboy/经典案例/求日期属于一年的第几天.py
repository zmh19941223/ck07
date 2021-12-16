
# while True:
#     year = int(input('输入年份'))
#     month = int(input('输入月份'))
#     day = int(input('输入日期'))
#     sum = 0
#
#     if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
#         for i in range(month - 1):
#             sum += list2[i]
#         sum += day
#     else:
#         for i in range(month - 1):
#             sum += list1[i]
#         sum += day
#
#     print('这是第 %d 天' %sum)
import re


def count_day_of_year(timestr):  # 格式为: 2020/02/23 或 2020-02-22 可以使用正则匹配

    list1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    list2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    # year = int(timestr.split('/')[0])
    # month = int(timestr.split('/')[1])
    # day = int(timestr.split('/')[2])

    ltime = re.split(r'[-/]', timestr)  # 得到的是list
    year = int(ltime[0])
    month = int(ltime[1])
    day = int(ltime[2])

    sum = 0
    if year % 400 == 0 or (year % 4 == 0 and year % 100 == 0):
        for i in range(month-1):  # 2-12 计算整月份天数
            sum += list2[i]
        sum += day
    else:
        for i in range(month-1):  # 2-12 计算整月份天数
            sum += list1[i]
        sum += day

    print(sum)


if __name__ == '__main__':
    count_day_of_year('2020-02/23')