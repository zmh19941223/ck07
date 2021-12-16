l1 = [1,2,3,4,5,5,4]
l2 = [2,3,4,6,9]

# 列表转集合
s1 = set(l1)
print(s1)

# 定义集合
s3 = {1,2,2,3,8}

print(s3) # {1, 2, 3}

# 集合的运算
# 交集
print(s1.intersection(s3))

print(s1 & s3)

# 并集
print(s1.union(s3))
print(s1 | s3)

# 差集 就是前面集合有,后面集合没有的
print(s1 - s3) # 4 5

print(s3 - s1) # 8




