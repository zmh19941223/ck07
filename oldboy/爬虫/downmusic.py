import requests


url = 'https://webfs.yun.kugou.com/202103210719/c64a8bf487b56449b18f7a8c3e22ee39/KGTX/CLTX001/1d378da2268cf5f45b7ec029620489af.mp3'

res = requests.get(url).content

with open('aa.mp3','wb') as f:
    f.write(res)