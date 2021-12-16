import pickle  # pickle的功能： 序列化和反序列化
# l1 = [1, 2, 3]
#
# pickle.dump(l1, open("demo.data", "wb"))

l = pickle.load(open("demo.data","rb"))
print(l)