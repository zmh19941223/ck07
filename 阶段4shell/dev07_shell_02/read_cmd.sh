#!/bin/bash
# author: 好好先森
# date: 2021-06-30 20:19
# description：read

read -n1 -p "请输入Y/N："
echo
read -s -p "请输入密码：" password

echo

echo $REPLY
echo $password
