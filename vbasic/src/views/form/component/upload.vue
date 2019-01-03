<template>
  <div class='uploadbOX'>
    <el-upload
      class="upload-demo"
      action="http://192.168.101.64:8001/excelManager/inputExcel"
      :on-success="handlePreview"
      :before-upload="beforeAvatarUpload"
      :data=" {'p': inputName } "
      :on-error="uploadError"
      multiple>
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传.xls/.xlsx文件，且不超过500M</div>
    </el-upload>
    <!-- <el-upload
      class="avatar-uploader"
      action="http://192.168.101.64:8001/upload/uploadImage"
      :show-file-list="false"
      :on-success="handleSuccess1"
      accept="image/jpeg,image/gif,image/png,image/bmp"
      :before-upload="beforeAvatarUpload"
      >
      <img v-if="imageUrl" style="height: 100%;" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload> -->
    <el-button type="success" plain size="mini" class='uploadBtn' @click='uploadSuccess'>提交</el-button>
  </div>
</template>
<script>
export default {
  props: {
    inputName:String,
    required: true
  },
  name: 'upload',
  data() {
    return {
      imageUrl: '',
      childValue: false,
    }
  },
  methods: {
    handlePreview(file) {
      this.$message.success('文件上传成功！')
      console.log(file)
    },
    beforeAvatarUpload(file) {
      console.log(file)
      const isXlsx = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      const isXls = file.type === 'application/vnd.ms-excel'
      if (!isXlsx && !isXls){
        this.$message.error('上传文件只能是xls/xlsx格式!');
      }
      return isXlsx || isXls;
    },
    uploadError() {
      
    },
    uploadSuccess() {
        console.log(this.childValue)
        this.$emit('childByValue', this.childValue)
      // this.$
    }
  }
}
</script>
<style lang="scss" scoped>
.uploadBtn{
  margin-left: 260px;
  margin-top: 20px;
}
.uploadbOX{
  background-color: #ffffff;
      width: 401px;
    height: 200px;
    border-radius: 15px;
    padding: 30px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
