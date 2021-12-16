import PySimpleGUI as sg

# sg.Popup('第一行','第二行')

# 定义布局
layout =[
    [sg.Text('请输入界面信息')],
    [sg.Text('姓名'),sg.In('朱 明浩')],
    [sg.Text('性别'),sg.In('男')],
    [sg.Text('国籍'),sg.In('China')],
    [sg.B('确定'),sg.B('取消')],
]


# 创建窗口
window = sg.Window('window title', layout)

# 循环读取事件
while True:

    event, value = window.read()
    print(event,value)

    if event == None:
        break

# 关闭窗口
window.close()

