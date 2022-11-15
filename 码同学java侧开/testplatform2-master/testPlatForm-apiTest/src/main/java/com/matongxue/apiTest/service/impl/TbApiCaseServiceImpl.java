package com.matongxue.apiTest.service.impl;

import java.util.List;
import com.matongxue.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.matongxue.apiTest.mapper.TbApiCaseMapper;
import com.matongxue.apiTest.domain.TbApiCase;
import com.matongxue.apiTest.service.ITbApiCaseService;

/**
 * 测试用例Service业务层处理
 * 
 * @author 码同学
 * @date 2022-05-08
 */
@Service
public class TbApiCaseServiceImpl implements ITbApiCaseService 
{
    @Autowired
    private TbApiCaseMapper tbApiCaseMapper;

    /**
     * 查询测试用例
     * 
     * @param id 测试用例主键
     * @return 测试用例
     */
    @Override
    public TbApiCase selectTbApiCaseById(Long id)
    {
        return tbApiCaseMapper.selectTbApiCaseById(id);
    }

    /**
     * 查询测试用例列表
     * 
     * @param tbApiCase 测试用例
     * @return 测试用例
     */
    @Override
    public List<TbApiCase> selectTbApiCaseList(TbApiCase tbApiCase)
    {
        return tbApiCaseMapper.selectTbApiCaseList(tbApiCase);
    }

    /**
     * 新增测试用例
     * 
     * @param tbApiCase 测试用例
     * @return 结果
     */
    @Override
    public int insertTbApiCase(TbApiCase tbApiCase)
    {
        tbApiCase.setCreateTime(DateUtils.getNowDate());
        return tbApiCaseMapper.insertTbApiCase(tbApiCase);
    }

    /**
     * 修改测试用例
     * 
     * @param tbApiCase 测试用例
     * @return 结果
     */
    @Override
    public int updateTbApiCase(TbApiCase tbApiCase)
    {
        return tbApiCaseMapper.updateTbApiCase(tbApiCase);
    }

    /**
     * 批量删除测试用例
     * 
     * @param ids 需要删除的测试用例主键
     * @return 结果
     */
    @Override
    public int deleteTbApiCaseByIds(Long[] ids)
    {
        return tbApiCaseMapper.deleteTbApiCaseByIds(ids);
    }

    /**
     * 删除测试用例信息
     * 
     * @param id 测试用例主键
     * @return 结果
     */
    @Override
    public int deleteTbApiCaseById(Long id)
    {
        return tbApiCaseMapper.deleteTbApiCaseById(id);
    }
}
