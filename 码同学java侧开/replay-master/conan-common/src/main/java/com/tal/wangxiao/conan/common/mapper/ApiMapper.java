package com.tal.wangxiao.conan.common.mapper;

import java.util.List;
import com.tal.wangxiao.conan.common.domain.ApiInfo;

/**
 * 接口管理Mapper接口
 * 
 * @author mtx
 * @date 2021-12-21
 */
public interface ApiMapper 
{
    /**
     * 查询接口管理
     * 
     * @param apiId 接口管理ID
     * @return 接口管理
     */
    public ApiInfo selectApiById(Integer apiId);

    /**
     * 查询接口管理列表
     * 
     * @param api 接口管理
     * @return 接口管理集合
     */
    public List<ApiInfo> selectApiList(ApiInfo api);

    /**
     * 新增接口管理
     * 
     * @param api 接口管理
     * @return 结果
     */
    public int insertApi(ApiInfo api);

    /**
     * 修改接口管理
     * 
     * @param api 接口管理
     * @return 结果
     */
    public int updateApi(ApiInfo api);

    /**
     * 删除接口管理
     * 
     * @param id 接口管理ID
     * @return 结果
     */
    public int deleteApiById(Integer id);

    /**
     * 批量删除接口管理
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteApiByIds(Integer[] ids);
}