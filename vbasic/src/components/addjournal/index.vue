<template>
  <div class="mingDialogCon">
    <p class="DialogTitle">{{title}}</p>
    <el-form ref='form' :model="form" label-width="90px">
      <el-form-item label='期刊名称'>
        <el-input style="max-width: 400px;" v-model="form.journalName"></el-input>
      </el-form-item>
      <el-form-item label='期刊封面'>
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
      <el-form-item label='微信号'>
        <el-input style="max-width: 400px;" v-model="form.wxCode"></el-input>
      </el-form-item>
      <el-form-item label='主办单位'>
        <el-select v-model="form.organizers" multiple placeholder="请选择主办单位">
          <el-option
            v-for="item in auitList"
            :key="item.organizerId"
            :label="item.organizerName"
            :value="item.organizerId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='学科'>
        <el-select v-model="form.subjectId" placeholder="请选择学科">
          <el-option
            v-for="item in subjectList"
            :key="item.subjectId"
            :label="item.subjectName"
            :value="item.subjectId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='期刊简介'>
        <el-input
          type="textarea"
          :rows="4"
          v-model="form.journalDesc"
          style="max-width: 400px;"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="addfooter">
      <el-button size="small" @click="cancel(1)">取 消</el-button>
      <el-button size="small" type="primary" @click="cancel(2)">确 定</el-button>
    </div>
  </div>
</template>
<script>
  import { beforeAddJournal, subjectList, addJournal } from "@/api/book"
  import {auitList} from '@/api/auit'

  export default {
    props: {
      title : {
        type: String,
        required: true
      },
      itemObj: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        form: {
          journalName: '',
          journalImageId: '',
          wxCode: '',
          subjectId: undefined,
          journalDesc: '',
          organizers: []
        },
        dialogVisible: true,
        unitList: [],
        subjectList: [],
        auitList: [],
        dialogStatus: false,
        imageUrl: '',
        imageObj: {
          imageUrl: undefined,
          fileName: undefined,
          orgName: undefined
        }
      }
    },
    created() {
      this.unit();
    },
    computed:{

      // this.form.journalName = itemObj.journalName
      // this.form.journalImageId = itemObj.journalImageId
      // this.form.wxCode = itemObj.wxCode
      // this.form.subjectId = itemObj.subjectId
      // this.form.journalDesc = itemObj.journalDesc
      // this.form.organizers = itemObj.journalDesc
    },
    methods: {
      handleAvatarSuccess(file) {
        this.imageObj.imageUrl = file.data.fileUrl;
        this.imageObj.fileName = file.data.fileName;
        this.imageObj.orgName = file.data.orgName;
        this.imageUrl = file.data.fileUrl;
      },
      cancel(value) {
        if (value === 1) {
          console.log('进入')
          this.$emit('dialogChange',this.dialogStatus)
        }
        if (value === 2) {
        // TODO
          var data = {}
          data.journal = this.form;
          data.image = this.imageObj;
          console.log(data)
          addJournal(data).then((result) => {
            this.$message({
            message: '添加成功!',
              type: 'success'
            });
            this.$emit('dialogChange',this.dialogStatus)
          }).catch(() => {

          })
        }
      },
      beforeAvatarUpload() {

      },
      unit() {
        beforeAddJournal().then((result) => {
          console.log('1',result)
        }).catch((error) => {

        })
        subjectList({pageNo:1}).then((result) => {
          console.log('2',result)
          this.subjectList = result.data.subjectPage.records
        }).catch((error) => {

        })
        auitList({pageNo:1}).then((result) => {
          console.log('单位',result)
          this.auitList = result.data.organizerPage.records
        }).catch((error) => {

        })
      }
    }
  }

</script>
<style lang="css">
.addfooter {
  width :300px;
  right: 0;
  margin-left: 80%;
}
.mingDialogCon{
  width: 800px;
  padding: 50px;
  padding-top: 20px;
  border-radius: 15px;
  background: #fff;
}
.DialogTitle{
      line-height: 24px;
    font-size: 18px;
    color: #303133;
    margin-bottom: 20px;
}
</style>
