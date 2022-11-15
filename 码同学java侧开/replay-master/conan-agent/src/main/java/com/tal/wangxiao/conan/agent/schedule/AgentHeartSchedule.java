package com.tal.wangxiao.conan.agent.schedule;

import com.tal.wangxiao.conan.agent.cache.CodeCache;
import com.tal.wangxiao.conan.common.constant.enums.AgentStatus;
import com.tal.wangxiao.conan.common.entity.db.AgentNode;
import com.tal.wangxiao.conan.common.kafaka.KafkaData;
import com.tal.wangxiao.conan.common.kafaka.KafkaTopic;
import com.tal.wangxiao.conan.common.kafaka.KafkaType;
import com.tal.wangxiao.conan.common.kafaka.TaskMessage;
import com.tal.wangxiao.conan.common.service.common.KafkaMessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;

/**
 * agent心跳服务
 *
 * @author mtx
 * @date 2021/12/15
 **/
@Slf4j
@Component
public class AgentHeartSchedule {

    @Resource
    private KafkaMessageService kafkaMessageService;

    private long showLogCount = 0;

    @Scheduled(cron = "0 0/3 * * * ? ")
    public void agentHeartUpdate() {
        //每5分钟上报一次注册中心，每3次显示一次日志
        if(showLogCount%3 == 0){
            log.info("Agent服务 Heart Beat -- agentId :" + CodeCache.commonMap.get("agentId"));
        }
        AgentNode agentNode = new AgentNode();
        agentNode.setAgentId(CodeCache.getAgentId());
        CodeCache.initAgentConfig(agentNode, log, AgentStatus.FREE);
        agentHeartMessage(agentNode, KafkaType.AGENT_CHECK_RUN, kafkaMessageService);
        showLogCount++;
    }

    public static void agentHeartMessage(AgentNode agentNode, KafkaType agentCheckRun, KafkaMessageService kafkaMessageService) {
        KafkaData<AgentNode> kafkaData = new KafkaData<>();
        kafkaData.setRunEnv(CodeCache.getEnv());
        kafkaData.setType(agentCheckRun);
        kafkaData.setData(agentNode);
        TaskMessage taskMessage = new TaskMessage<>(kafkaData);
        kafkaMessageService.sendKafkaMessage(taskMessage, KafkaTopic.CONAN_AGENT_MESSAGE);
    }


}
