#!/bin/bash
# author: 好好先森
# date: 2021-06-30 20:19
# description：定义函数

# 方法一：
show_info()
{
	echo -e "Hello, ${USER}, date: $(date)"
}


# 方法二：
function show_info1
{
	echo "xxxx"
}

# 使用函数名即可调用函数
#show_info
show_info1
