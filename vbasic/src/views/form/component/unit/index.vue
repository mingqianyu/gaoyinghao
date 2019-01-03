<template>
  <div style="width: 100%;">
    <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
    <!--<el-breadcrumb-item :to="{ path: '/form/index' }">刊群导览</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item>中科院全刊</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="organizerName"
        label="单位名称"
        width="180"
        align="center">
      </el-table-column>
      style="width: 100%">
      <el-table-column
        prop="organizerDesc"
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
          添加主办单位
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
          <el-input v-model="form.organizerName"></el-input>
        </el-form-item>
        <el-form-item label="单位简介">
          <el-input v-model="form.organizerDesc"></el-input>
        </el-form-item>
        <el-form-item label="期刊封面">
          <el-upload
            class="avatar-uploader"
            action="http://192.168.101.64:8001/upload/uploadImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button v-if="titleStatus==='created'" type="primary" @click="addOrganizer">确 定</el-button>
        <el-button v-else type="primary" @click="updateOrganizer">更新确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {auitList} from '@/api/auit'
  import {updateOrganizer, addOrganizer} from '@/api/book'
  import upload from "../upload.vue"

  export default {
    components: { upload },
    data() {
      return {
        oneStatus: true,
        twoStatus: false,
        treeStatus: false,
        dialogVisible: false,
        pageList: {
          pageNo: 1,
          organizerName: null,
        },
        titleObj: {
          created: '添加主办单位',
          updata: '编辑主办单位'
        },
        titleStatus: 'created',
        tableData: [],
        total: null,
        pName: '主办单位',
        mengStatus: false,
        form: {
          organizerDesc: '',
          organizerId: '',
          organizerName: ''
        },
        imageObj: {
          imageUrl: undefined,
          fileName: undefined,
          orgName: undefined
        },
        imageUrl: ''
      }
    },
    created() {
      this.list();
    },
    methods: {
      addOrganizer() {
        var data = {}
        data.organizer = this.form;
        data.image = this.imageObj;
        console.log(data)
        addOrganizer(data).then((result) => {
            this.$message({
            message: '添加成功!',
            type: 'success'
          });
          this.dialogVisible = false
          this.resetForm()
          this.list();
        }).catch((error) => {
          this.$message.error("添加主办单位失败！！！");
        })
      },
      addauit() {
        this.titleStatus = 'created'
        this.dialogVisible = true;
        this.resetForm()
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 10;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(file) {
        console.log(file)
        this.imageObj.imageUrl = file.data.fileUrl;
        this.imageObj.fileName = file.data.fileName;
        this.imageObj.orgName = file.data.orgName;
        this.imageUrl = file.data.fileUrl;
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
        console.log(row)
        this.titleStatus = 'updata'
        this.dialogVisible = true;
        this.form.organizerId = row.organizerId
        this.form.organizerName = row.organizerName
        this.form.organizerDesc = row.organizerDesc
        if (row.organizerImageUrl) {
          this.imageUrl = row.organizerImageUrl
          this.imageObj.imageUrl = row.organizerImageUrl
          // this.autiImgurl = row.organizerImageUrl
          // imgObj.fileUrl = row.organizerImageUrl
        } else {
          // imgObj.fileUrl = undefined
        }
      },
      updateOrganizer() {
        var data = {}
        data.organizer = this.form;
        data.image = this.imageObj;
        console.log(data)
        updateOrganizer(data).then((result) => {
          this.$message({
          message: '数据更新成功!',
          type: 'success'
        });
          console.log(result)
          this.dialogVisible = false
          this.resetForm()
          this.list();
        }).catch((error) => {
          this.$message.error("更新主办单位失败！！！");
        })
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        this.pageList.pageNo = val
        this.list()
      },
      list() {
        auitList(this.pageList).then((result) => {
          this.tableData = result.data.organizerPage.records
          this.total = result.data.organizerPage.total
          console.log('主办单位',result)
        }).catch((error) => {
          console.log(error.response)
        })
      },
      resetForm() {
        this.form.organizerDesc = undefined
        this.form.organizerId = undefined
        this.form.organizerName = undefined
        this.imageObj.imageUrl = undefined
        this.imageObj.fileName = undefined
        this.imageObj.orgName = undefined
        this.imageUrl = undefined
      }
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
