'''
求20以内的素数:只能被1和自身整除的为素数
'''
sushu = []
for i in range(2, 21):
    for j in range(2, i):
        if i % j == 0:
            break
    else:
        sushu.append(i)

print(sushu)