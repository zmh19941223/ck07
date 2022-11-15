package com.matongxue.apiTest.service;

import java.util.List;
import com.matongxue.apiTest.domain.TbApiCase;

/**
 * 测试用例Service接口
 * 
 * @author 码同学
 * @date 2022-05-08
 */
public interface ITbApiCaseService 
{
    /**
     * 查询测试用例
     * 
     * @param id 测试用例主键
     * @return 测试用例
     */
    public TbApiCase selectTbApiCaseById(Long id);

    /**
     * 查询测试用例列表
     * 
     * @param tbApiCase 测试用例
     * @return 测试用例集合
     */
    public List<TbApiCase> selectTbApiCaseList(TbApiCase tbApiCase);

    /**
     * 新增测试用例
     * 
     * @param tbApiCase 测试用例
     * @return 结果
     */
    public int insertTbApiCase(TbApiCase tbApiCase);

    /**
     * 修改测试用例
     * 
     * @param tbApiCase 测试用例
     * @return 结果
     */
    public int updateTbApiCase(TbApiCase tbApiCase);

    /**
     * 批量删除测试用例
     * 
     * @param ids 需要删除的测试用例主键集合
     * @return 结果
     */
    public int deleteTbApiCaseByIds(Long[] ids);

    /**
     * 删除测试用例信息
     * 
     * @param id 测试用例主键
     * @return 结果
     */
    public int deleteTbApiCaseById(Long id);
}
