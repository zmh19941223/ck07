package com.matongxue.apiTest.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.matongxue.common.annotation.Excel;
import com.matongxue.common.core.domain.BaseEntity;

/**
 * 测试用例对象 tb_api_case
 * 
 * @author 码同学
 * @date 2022-05-08
 */
public class TbApiCase extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 主键id */
    private Long id;

    /** 开启 */
    @Excel(name = "开启")
    private Long run;

    /** 接口名称 */
    @Excel(name = "接口名称")
    private String apiName;

    /** 测试地址 */
    @Excel(name = "测试地址")
    private String url;

    /** 接口类型 */
    @Excel(name = "接口类型")
    private String type;

    /** body */
    @Excel(name = "body")
    private String body;

    /** 头部 */
    @Excel(name = "头部")
    private String headers;

    /** 业务场景 */
    @Excel(name = "业务场景")
    private String business;

    /** 关联规则 */
    @Excel(name = "关联规则")
    private String correlation;

    /** 关联类型 */
    @Excel(name = "关联类型")
    private String correlationType;

    public void setId(Long id) 
    {
        this.id = id;
    }

    public Long getId() 
    {
        return id;
    }
    public void setRun(Long run) 
    {
        this.run = run;
    }

    public Long getRun() 
    {
        return run;
    }
    public void setApiName(String apiName) 
    {
        this.apiName = apiName;
    }

    public String getApiName() 
    {
        return apiName;
    }
    public void setUrl(String url) 
    {
        this.url = url;
    }

    public String getUrl() 
    {
        return url;
    }
    public void setType(String type) 
    {
        this.type = type;
    }

    public String getType() 
    {
        return type;
    }
    public void setBody(String body) 
    {
        this.body = body;
    }

    public String getBody() 
    {
        return body;
    }
    public void setHeaders(String headers) 
    {
        this.headers = headers;
    }

    public String getHeaders() 
    {
        return headers;
    }
    public void setBusiness(String business) 
    {
        this.business = business;
    }

    public String getBusiness() 
    {
        return business;
    }
    public void setCorrelation(String correlation) 
    {
        this.correlation = correlation;
    }

    public String getCorrelation() 
    {
        return correlation;
    }
    public void setCorrelationType(String correlationType) 
    {
        this.correlationType = correlationType;
    }

    public String getCorrelationType() 
    {
        return correlationType;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("run", getRun())
            .append("apiName", getApiName())
            .append("url", getUrl())
            .append("type", getType())
            .append("body", getBody())
            .append("headers", getHeaders())
            .append("business", getBusiness())
            .append("correlation", getCorrelation())
            .append("correlationType", getCorrelationType())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .toString();
    }
}
