package com.matongxue.apiTest.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.matongxue.common.annotation.Log;
import com.matongxue.common.core.controller.BaseController;
import com.matongxue.common.core.domain.AjaxResult;
import com.matongxue.common.enums.BusinessType;
import com.matongxue.apiTest.domain.TbApiCase;
import com.matongxue.apiTest.service.ITbApiCaseService;
import com.matongxue.common.utils.poi.ExcelUtil;
import com.matongxue.common.core.page.TableDataInfo;

/**
 * 测试用例Controller
 * 
 * @author 码同学
 * @date 2022-05-08
 */
@RestController
@RequestMapping("/apiTest/case")
public class TbApiCaseController extends BaseController
{
    @Autowired
    private ITbApiCaseService tbApiCaseService;

    /**
     * 查询测试用例列表
     */
    @PreAuthorize("@ss.hasPermi('apiTest:case:list')")
    @GetMapping("/list")
    public TableDataInfo list(TbApiCase tbApiCase)
    {
        startPage();
        List<TbApiCase> list = tbApiCaseService.selectTbApiCaseList(tbApiCase);
        return getDataTable(list);
    }

    /**
     * 导出测试用例列表
     */
    @PreAuthorize("@ss.hasPermi('apiTest:case:export')")
    @Log(title = "测试用例", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, TbApiCase tbApiCase)
    {
        List<TbApiCase> list = tbApiCaseService.selectTbApiCaseList(tbApiCase);
        ExcelUtil<TbApiCase> util = new ExcelUtil<TbApiCase>(TbApiCase.class);
        util.exportExcel(response, list, "测试用例数据");
    }

    /**
     * 获取测试用例详细信息
     */
    @PreAuthorize("@ss.hasPermi('apiTest:case:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(tbApiCaseService.selectTbApiCaseById(id));
    }

    /**
     * 新增测试用例
     */
    @PreAuthorize("@ss.hasPermi('apiTest:case:add')")
    @Log(title = "测试用例", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody TbApiCase tbApiCase)
    {
        return toAjax(tbApiCaseService.insertTbApiCase(tbApiCase));
    }

    /**
     * 修改测试用例
     */
    @PreAuthorize("@ss.hasPermi('apiTest:case:edit')")
    @Log(title = "测试用例", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody TbApiCase tbApiCase)
    {
        return toAjax(tbApiCaseService.updateTbApiCase(tbApiCase));
    }

    /**
     * 删除测试用例
     */
    @PreAuthorize("@ss.hasPermi('apiTest:case:remove')")
    @Log(title = "测试用例", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(tbApiCaseService.deleteTbApiCaseByIds(ids));
    }
}
