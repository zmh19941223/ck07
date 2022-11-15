package com.tal.wangxiao.conan.common.service;

import java.util.List;

import com.tal.wangxiao.conan.common.domain.EsSource;

/**
 * ES 数据源配置，域名需要绑定ES数据源Service接口
 *
 * @author mtx
 * @date 2021-01-05
 */
public interface EsSourceService {
    /**
     * 查询ES 数据源配置，域名需要绑定ES数据源
     *
     * @param esSourceId ES 数据源配置，域名需要绑定ES数据源ID
     * @return ES 数据源配置，域名需要绑定ES数据源
     */
    public EsSource selectEsSourceById(Integer esSourceId);

    /**
     * 查询ES 数据源配置，域名需要绑定ES数据源列表
     *
     * @param esSource ES 数据源配置，域名需要绑定ES数据源
     * @return ES 数据源配置，域名需要绑定ES数据源集合
     */
    public List<EsSource> selectEsSourceList(EsSource esSource);

    /**
     * 新增ES 数据源配置，域名需要绑定ES数据源
     *
     * @param esSource ES 数据源配置，域名需要绑定ES数据源
     * @return 结果
     */
    public int insertEsSource(EsSource esSource);

    /**
     * 修改ES 数据源配置，域名需要绑定ES数据源
     *
     * @param esSource ES 数据源配置，域名需要绑定ES数据源
     * @return 结果
     */
    public int updateEsSource(EsSource esSource);

    /**
     * 批量删除ES 数据源配置，域名需要绑定ES数据源
     *
     * @param esSourceIds 需要删除的ES 数据源配置，域名需要绑定ES数据源ID
     * @return 结果
     */
    public int deleteEsSourceByIds(Integer[] esSourceIds);

    /**
     * 删除ES 数据源配置，域名需要绑定ES数据源信息
     *
     * @param esSourceId ES 数据源配置，域名需要绑定ES数据源ID
     * @return 结果
     */
    public int deleteEsSourceById(Integer esSourceId);
}