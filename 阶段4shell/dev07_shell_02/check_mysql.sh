#!/bin/bash
# author: lemon
# date: 2021-06-30 21: 12
# description：if条件语句

if netstat -tlunp | grep ":3306" &>/dev/null; then
	echo "mysql已启动"
else
	echo "mysql未启动"
fi
