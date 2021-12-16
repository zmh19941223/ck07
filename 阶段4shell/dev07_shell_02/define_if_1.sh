#!/bin/bash
# author: lemon
# date: 2021-06-30 21: 12
# description：if条件语句

read -e -p "请输入路径（如：/etc/passwd）："

if [ -f "${REPLY}" ]; then
	echo "${REPLY}是常规文件"

elif [ -d "${REPLY}" ]; then
	echo "${REPLY}是目录"

else
	echo "${REPLY}是其他文件"
fi
