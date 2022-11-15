
def work(n):
    if not (1 < n < (2 ** 31)) or n % 2 != 0:
        return 0
    if n / 2 == 1:
        return 1
    return work(n / 2)


res = work(4)
print(res)
