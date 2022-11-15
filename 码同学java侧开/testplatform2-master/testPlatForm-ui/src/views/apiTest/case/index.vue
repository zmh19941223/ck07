<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="开启" prop="run">
        <el-input
          v-model="queryParams.run"
          placeholder="请输入开启"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="接口名称" prop="apiName">
        <el-input
          v-model="queryParams.apiName"
          placeholder="请输入接口名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="测试地址" prop="url">
        <el-input
          v-model="queryParams.url"
          placeholder="请输入测试地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="body" prop="body">
        <el-input
          v-model="queryParams.body"
          placeholder="请输入body"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="头部" prop="headers">
        <el-input
          v-model="queryParams.headers"
          placeholder="请输入头部"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="业务场景" prop="business">
        <el-input
          v-model="queryParams.business"
          placeholder="请输入业务场景"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="关联规则" prop="correlation">
        <el-input
          v-model="queryParams.correlation"
          placeholder="请输入关联规则"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['apiTest:case:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['apiTest:case:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['apiTest:case:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['apiTest:case:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="caseList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="主键id" align="center" prop="id" />
      <el-table-column label="开启" align="center" prop="run" />
      <el-table-column label="接口名称" align="center" prop="apiName" />
      <el-table-column label="测试地址" align="center" prop="url" />
      <el-table-column label="接口类型" align="center" prop="type" />
      <el-table-column label="body" align="center" prop="body" />
      <el-table-column label="头部" align="center" prop="headers" />
      <el-table-column label="业务场景" align="center" prop="business" />
      <el-table-column label="关联规则" align="center" prop="correlation" />
      <el-table-column label="关联类型" align="center" prop="correlationType" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['apiTest:case:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['apiTest:case:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改测试用例对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="开启" prop="run">
          <el-input v-model="form.run" placeholder="请输入开启" />
        </el-form-item>
        <el-form-item label="接口名称" prop="apiName">
          <el-input v-model="form.apiName" placeholder="请输入接口名称" />
        </el-form-item>
        <el-form-item label="测试地址" prop="url">
          <el-input v-model="form.url" placeholder="请输入测试地址" />
        </el-form-item>
        <el-form-item label="body" prop="body">
          <el-input v-model="form.body" placeholder="请输入body" />
        </el-form-item>
        <el-form-item label="头部" prop="headers">
          <el-input v-model="form.headers" placeholder="请输入头部" />
        </el-form-item>
        <el-form-item label="业务场景" prop="business">
          <el-input v-model="form.business" placeholder="请输入业务场景" />
        </el-form-item>
        <el-form-item label="关联规则" prop="correlation">
          <el-input v-model="form.correlation" placeholder="请输入关联规则" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listCase, getCase, delCase, addCase, updateCase } from "@/api/apiTest/case";

export default {
  name: "Case",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 测试用例表格数据
      caseList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        run: null,
        apiName: null,
        url: null,
        type: null,
        body: null,
        headers: null,
        business: null,
        correlation: null,
        correlationType: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        run: [
          { required: true, message: "开启不能为空", trigger: "blur" }
        ],
        apiName: [
          { required: true, message: "接口名称不能为空", trigger: "blur" }
        ],
        url: [
          { required: true, message: "测试地址不能为空", trigger: "blur" }
        ],
        type: [
          { required: true, message: "接口类型不能为空", trigger: "change" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询测试用例列表 */
    getList() {
      this.loading = true;
      listCase(this.queryParams).then(response => {
        this.caseList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        run: null,
        apiName: null,
        url: null,
        type: null,
        body: null,
        headers: null,
        business: null,
        correlation: null,
        correlationType: null,
        createBy: null,
        createTime: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加测试用例";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getCase(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改测试用例";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateCase(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addCase(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除测试用例编号为"' + ids + '"的数据项？').then(function() {
        return delCase(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('apiTest/case/export', {
        ...this.queryParams
      }, `case_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
