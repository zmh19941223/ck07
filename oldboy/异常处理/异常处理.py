
s = '1a'
try:
    int(s)
    # b
    # 1/0
except ValueError as e:
    print("ValueError:", e)
except NameError as e:
    print("NameError:", e)
except Exception as e:
    print('Exception的异常信息为%s' % e)  # 万能异常
else:
    print("只有没有异常时才会执行...")
finally:
    print("无论是否有异常都会执行,用于释放资源")
