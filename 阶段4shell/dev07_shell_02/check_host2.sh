#!/bin/bash
# author: 好好先森
# date: 2021-06-30 20:19
# description：检查主机是否在线

read -p "请输入主机名称：" hostname
read -p "请输入ip地址：" ip

#echo $REPLY

function check_host
{
    #ip="$1"
    #hostname="$2"
    ping -c1 "${ip}" &> /dev/null
    [ $? -eq 0 ] && echo -e "主机【${hostname}】在线" || echo -e "主机【${hostname}】离线"

}

check_host
