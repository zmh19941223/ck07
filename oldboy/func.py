from functools import reduce

num = [1,2,3,4]

print(reduce(lambda x, y: x*y, num))  # 对迭代对象的所有数据处理,返回一个具体的结果(普通数据)

print(list(map(lambda x: x*2, num)))  # 对迭代对象的每个数据处理,返回迭代器

print(list(filter(lambda x: x > 2, num)))  # 符合条件的保留下来,返回迭代器


# 手动实现一个reduce函数
def my_reduce(func, array, init=None):
    # 取出列表的第一个元素作为初始值
    if init is None:
        res = array.pop(0)
    else:
        res = init

    for num in array:#pop之后列表就不存在当前这个元素了
        res = func(res, num)

    return res


#手动实现map
def my_map(func, array):
    res = []
    for no in array:
        res.append(func(no))

    return res


#手动实现filter
def my_filter(func, array):
    res = []
    for n in array:
        if func(n):
            res.append(n)
    return res


print(my_map(lambda x: x+1, num))
print(my_filter(lambda x: x > 3, num))
print(my_reduce(lambda x, y: x*y, num, 2))
