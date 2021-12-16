#!/bin/bash
# author: lemon
# date: 2021-06-30 21: 12
# description：while循环

while read hostname ip; do
	ping -c1 -W1 "$ip" &> /dev/null
	if [ $? -eq 0 ]; then
		echo "主机【${hostname}】在线"	
	else
		echo "主机【${hostname}】离线"	
	
	fi

done < ~/servers.txt
