<template>
  <div style="width: 100%;height: 100%;">
    <div class="bookContain">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/form/index' }">刊群导览</el-breadcrumb-item>
        <el-breadcrumb-item>中科院全刊</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="journalImageUrl"
          label="期刊封面"
          width="180"
          align="center">
          <template slot-scope="scope">
            <img :src="scope.row.journalImageUrl" style="width: 59px;height: 80px;" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="journalName"
          label="期刊名称"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="wxCode"
          label="微信号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="organizers"
          label="主办单位"
          align="center">
          <template slot-scope="scope">
            {{scope.row.organizers}}
          </template>
        </el-table-column>
        <el-table-column
          prop="journalDesc"
          label="简介"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="small" plain @click="edit(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" plain @click="delBook(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="bookBottom">
        <div>
          <el-button type="primary" size="small" plain @click="mengStatus =true">导入</el-button>
          <el-button type="primary" size="small" plain>导出</el-button>
        </div>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageList.pageNo"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
        <el-button type="primary" plain size="small" @click="addJournal">
          添加期刊
        </el-button>
      </div>
    </div>
    
    <div v-if="dialogStatus" class="mingDialog">
      <addjournal :title='title' :itemObj='itemObj' @dialogChange='dialogstatus' />  
    </div>
    <div v-if="mengStatus" class="mengban">
      <upload :inputName='pName' v-on:childByValue='childByValue'></upload>
    </div>
  </div>
</template>

<script>
  import {bookList} from '@/api/book'
  import addjournal from "@/components/addjournal/index";
  import upload from "../upload.vue"
  
  export default {
    components : { addjournal, upload },
    data() {
      return {
        total: null,
        oneStatus: true,
        twoStatus: false,
        treeStatus: false,
        pageList: {
          pageNo: 1,
          journalName: null,
          organizerName: null
        },
        tableData: [],
        dialogStatus: false,
        mengStatus: false,
        pName: '期刊导览-刊物管理',
        title: '添加期刊',
        itemObj: {}
      }
    },
    mounted() {
      this.list()
    },
    methods: {
      childByValue(childValue) {
        this.mengStatus = childValue;
        this.list();
      },
      addJournal() {
        this.dialogStatus = true;
      },
      dialogstatus(val) {
        console.log(val)
        this.list()
        this.dialogStatus = val
      },
      delBook(row) {

      },
      edit(row) {
        this.itemObj = row
        this.dialogStatus = true;

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        this.pageList.pageNo = val
        this.list()
      },
      list() {
        bookList(this.pageList).then((data) => {
          this.tableData = data.data.page.records;
          this.total = data.data.page.total;
          console.log('book',data)
        }).catch((error) => {
          console.log(error.response)
        })
      },
      oneF(index) {
        console.log(index)
        if (index === 1) {
          this.oneStatus = true;
          this.twoStatus = false;
          this.treeStatus = false;
        } else if (index === 2) {
          this.oneStatus = false;
          this.twoStatus = true;
          this.treeStatus = false;
        } else {
          this.oneStatus = false;
          this.twoStatus = false;
          this.treeStatus = true;
        }
      }
    }
  }
</script>

<style scoped>
  .bookBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
</style>
