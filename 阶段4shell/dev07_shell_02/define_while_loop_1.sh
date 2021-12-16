#!/bin/bash
# author: lemon
# date: 2021-06-30 21: 12
# description：while循环

i=1
while [ "$i" -le 10 ] ; do
	echo "$i"
#	i=$((i+1))
	((i++))
done
