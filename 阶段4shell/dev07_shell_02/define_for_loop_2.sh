#!/bin/bash
# author: lemon
# date: 2021-06-30 21: 12
# description：for循环


dir=$(ls /)
index=1
for f in $dir; do
	echo "${index}.${f}"
	index=$((index+1))
done
