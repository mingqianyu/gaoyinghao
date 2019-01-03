<template>
  <div style="width: 100%;">
    <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
    <!--<el-breadcrumb-item :to="{ path: '/form/index' }">刊群导览</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item>中科院全刊</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
    3
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="subjectName"
        label="单位名称"
        width="180"
        align="center">
      </el-table-column>
      style="width: 100%">
      <el-table-column
        prop="subjectDesc"
        label="主办单位简介"
        width="260"
        align="center">
      </el-table-column>
      <el-table-column
        prop="journalNum"
        label="期刊数量"
        align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" plain @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" plain @click="delBook(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="bookBottom">
      <div>
        <el-button type="primary" plain size="small" @click='upload'>导入</el-button>
        <el-button type="primary" size="small" plain>导出</el-button>
      </div>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageList.pageNo"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
        <el-button type="primary" plain size="small" @click="addauit">
          添加学科
        </el-button>
    </div>
    <div v-if="mengStatus" class="mengban">
      <upload :inputName='pName' v-on:childByValue='childByValue'></upload>
    </div>
    <el-dialog
      :title="titleObj[titleStatus]"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="单位名称">
          <el-input v-model="form.subjectName"></el-input>
        </el-form-item>
        <el-form-item label="单位简介">
          <el-input
            type="textarea"
            :rows="4"
            v-model="form.subjectDesc">
            </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button v-if="titleStatus==='created'" type="primary" @click="addSubject">确 定</el-button>
        <el-button v-else type="primary" @click="updataSubject">更新确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { subjectList, addSubject } from '@/api/book'
  import upload from "../upload.vue"

  export default {
    components: { upload },
    data() {
      return {
        oneStatus: true,
        twoStatus: false,
        treeStatus: false,
        pageList: {
          pageNo: 1,
          organizerName: null,
        },
        form: {
          subjectName: undefined,
          subjectDesc: undefined,
        },
        tableData: [],
        total: null,
        pName: '学科管理',
        mengStatus: false,
        titleObj: {
          created: '添加学科',
          updata: '编辑学科'
        },
        titleStatus: 'created',
        dialogVisible: false
      }
    },
    created() {
      this.list();
    },
    methods: {
      addSubject() {
        addSubject(this.form).then((result) => {
          this.$message({
          message: '添加学科成功!',
          type: 'success'
          });
          this.dialogVisible = false;
          this.list();
        }).catch(() => {
          this.$message({
          message: '添加学科失败!!!',
          type: 'error'
        });
        })
      },
      updataSubject() {

      },
      addauit() {
        this.titleStatus = 'created'
        this.dialogVisible = true
        this.resetForm()
      },
      resetForm() {
        this.form.subjectName = undefined
        this.form.subjectDesc = undefined
        this.imageUrl = undefined
      },
      childByValue(childValue) {
        this.mengStatus = childValue;
        this.list();
      },
      upload() {
        this.mengStatus = true;
      },
      delBook(row) {

      },
      edit(row) {

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        this.pageList.pageNo = val
        this.list()
      },
      list() {
        subjectList(this.pageList).then((result) => {
          this.tableData = result.data.subjectPage.records
          this.total = result.data.subjectPage.total
          console.log('学科列表',result)
        }).catch((error) => {
          this.$message.error("获取学科列表失败！！！");
        })
      },
    }
  }
</script>

<style scoped>
.bookBottom {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
