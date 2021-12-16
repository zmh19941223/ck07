#!/bin/bash
# author: lemon
# date: 2021-06-30 21: 12
# description：case语句


function menu
{
	echo -e "\t\txxx管理系统"
	echo
	echo -e "\t\t1.备份"
	echo -e "\t\t2.显示"
	echo -e "\t\t3.重启"
	echo -e "\t\t4.还原"
	echo -e "\t\t0.退出"
}


function main
{

	while true; do
		clear	
		menu
		read -s -e -n1
		echo
		case "$REPLY" in
			"1")
				echo "执行备份操作"
				;;
			"2")
				echo "执行显示操作"
				;;
			"3")
				echo "执行重启操作"
				;;
			"4")
				echo "执行还原操作"
				;;
			"0")
				echo "执行退出操作"
				break
				;;
			*)
				echo "其他操作操作"
				;;
		esac
		read

	done
}

main
