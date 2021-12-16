#!/bin/bash
# backup some files
# date: 2020-12-21

# log file
LOG_FILE="/var/log/backup_file.log"
PROMPT_COLS=100

step_prompt() {
    echo -n "[*] "${1}
    echo -n "[*] "${1} >>${LOG_FILE}
}

step_fail() {
    echo -en "\033[${PROMPT_COLS}G"
    echo -e "\033[31m\t[FAILED]\033[0m"
    echo -en "\033[${PROMPT_COLS}G" >>${LOG_FILE}
    echo -e "\033[31m\t[FAILED]\033[0m" >>${LOG_FILE}
}

step_ok() {
    echo -en "\033[${PROMPT_COLS}G"
    echo -e "\033[32m\t[OK]\033[0m"
    echo -en "\033[${PROMPT_COLS}G" >>${LOG_FILE}
    echo -e "\033[32m\t[OK]\033[0m" >>${LOG_FILE}
}

main(){
    read -e -p '请输入要备份的文件后缀（如：.sh）' file_suffix
    read -e -p '请输入存放备份文件的路径（如：/root/backup）' dest_dir
    read -e -n1 -p '请输入打包压缩的类型（L/M/H，L为tar, M为tar.gz, H为tar.bzip2）' file_compression
    
    if [ ! -d ${dest_dir} ]; then
        step_prompt "${dest_dir}目录不存在，创建目录"
        mkdir -m 700 ${dest_dir} &> /dev/null && step_ok || step_fail
    fi
    
    step_prompt "查询待备份的文件并进行备份操作"
    find ${HOME} -path ${dest_dir} -prune -o \
        -name "*${file_suffix}" -exec cp -r {} ${dest_dir} \; &> /dev/null && step_ok || step_fail
    
    if [ "${file_compression}" = "L" ]; then
        tar_type="-cvf ${dest_dir}/backup.tar ${dest_dir}"
    elif [ "${file_compression}" = "M" ]; then
       tar_type="-czvf ${dest_dir}/backup.tar.gz ${dest_dir}"
    else
       tar_type="-cjvf ${dest_dir}/backup.tar.bzip2 ${dest_dir}"
    fi
    
    step_prompt "tar ${tar_type}"
    tar ${tar_type} &> /dev/null && step_ok || step_fail

    step_prompt "删除${dest_dir}目录中备份的所有*${file_suffix}文件"
    rm -rf ${dest_dir}/*${file_suffix} &> /dev/null && step_ok || step_fail

    echo -e "\n查询备份打包后的压缩文件：\n$(ls $dest_dir/)"
}

main