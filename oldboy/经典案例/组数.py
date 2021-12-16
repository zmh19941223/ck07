count = 0
for i in range(1, 5):  # 百位
    for j in range(1, 5):  # 十位
        for k in range(1, 5):  # 个位
            if i != j and i != k and k != j:
                print(i, j, k)
                count += 1

print("组成的数共有：%d 个" % count)