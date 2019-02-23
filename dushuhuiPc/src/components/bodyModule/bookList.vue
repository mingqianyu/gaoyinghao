<template>
  <div>
    <bookheader></bookheader>
    <div class="bookAll">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 20px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>书籍详情</el-breadcrumb-item>
      </el-breadcrumb>
        <div class="bookList" >
          <div class="bookCon">
            <p class="p1">书籍推荐</p>
            <div class="xian"></div>
            <div class="bookListA" style="display: flex;flex-wrap: wrap">
              <div class="bookDetail" v-for="(item, i) in Booklist.records" style="margin-top: 30px;" @click="lookbookdetail(i)">
                <div class="bookImg">
                  <img :src="item.image.imgUrl" alt="">
                </div>

                <div class="bookRight" style=" ">
                  <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                    {{ item.productName }}
                  </p>
                  <p>作者: {{item.author}}</p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;">书籍简介: {{item.description }}</p>
                </div>
              </div>
            </div>


            <el-pagination
              style="margin-top: 40px;"
              background
              :page-size="15"
              @current-change="handleCurrentChange"
              layout="total, prev, pager, next"
              :total="totlecnt">
            </el-pagination>
          </div>
          <div class="bookClub">
          </div>
        </div>
      </div>
    <bookfooter></bookfooter>
  </div>
</template>

<script>
  import bookheader from '@/components/modulePerson/bookheader'
  import bookfooter from '@/components/modulePerson/bookfooter'
  export default {
    components: { bookheader, bookfooter },
    name: "dushu",
    data() {
      return {
        Booklist: {},
        pageNum : 1,
        totlecnt:null
      }
    },
    created() {
      this.getbookallList()
      window.scrollTo(0,0);
    },
    methods: {
      lookbookdetail(i) {
        localStorage.setItem("bookId", this.Booklist.records[i].productId)
        localStorage.setItem("catId", this.Booklist.records[i].catId)
        this.$router.push('/dushu')
      },
      handleCurrentChange(val) {
        console.log(val)
        this.pageNum = val;
        this.Booklist = '';
        this.getbookallList();
      },
      getbookallList() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://www.qmdsw.com/mall/pcIndex/indexProducts?pageNo=' + this.pageNum+ '&type=2');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('Booklist', ajax.responseText)
            self.getkkkk();
          }
        }
      },
      getkkkk() {
        this.Booklist = JSON.parse(localStorage.getItem('Booklist'))
        this.totlecnt = this.Booklist.total
        // console.log(this.Booklist)
      }
  }
  }
</script>

<style scoped>

  html, body, div, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, object, code, em, span, var, legend, button, input, textarea, th, td, a, img, header, footer, nav, aside, audio, datalist, section {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  /*清除内外边距*/
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  /*设置默认字体*/
  :focus {
    outline: 0;
  }

  div {
    margin: 0;
    padding: 0;
  }

  ul, ol, ul li, ol li {
    list-style: none;
  }

  /*重置列表*/
  address, caption, cite, em, code, dfn, th, var {
    font-style: normal;
    font-weight: normal;
  }

  form label {
    cursor: pointer;
  }

  input, button, select, textarea {
    font-family: inherit;
    font-size: 100%;
    outline: none;
  }

  textarea {
    resize: none
  }

  input {
    vertical-align: middle;
  }

  img {
    border: 0;
  }

  /*重置图片元素*/
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*重置表格*/
  .l {
    float: left;
  }

  .r {
    float: right;
  }

  button, input[type="reset"], input[type="button"], input[type="submit"] {
    line-height: normal !important;
  }

  a {
    text-decoration: none;
  }

  /*a:hover { text-decoration:underline; }*/
  input {
    _filter: chroma(color=#000000);
  }

  .hello {
    width: 100%;
    /*height: 10000px;*/
    margin: 0 auto;
    overflow: hidden;
    margin-top: -70px;
  }

  .nav {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 78px;
  }
  .bookImg img {
    width: 100%;
    height: 100%;
  }
  .bookClubImg img{
    width: 100%;
    height: 100%;
  }
  .swiperBox {
    height: 420px;
  }

  .bookList {
    width: 1200px;
    margin: 0 auto;
  }
  .p1 {
    margin-top: 39px;
  }

  .swiperBox {
    height: 420px;
    width: 100%;
    min-width: 1200px;
    position: relative;
    /*overflow: hidden;*/
  }
  .over3{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .allbox {
    margin: 0 auto;
    width: 1200px;
  }

  .xian {
    width: 100%;
    margin-top: 19px;
    border-top: 1px solid #DDDDDD;
  }

  .bookListA {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bookDetail {
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bookImg {
    width: 100px;
    height: 135px;
    background: skyblue;
  }

  .bookRight {
    width: 200px;
    height: 135px;
  }

  .bookRight p:nth-child(1) {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  .bookRight p:nth-child(2) {
    color: #666666;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .bookRight p:nth-child(3) {
    color: #333;
    font-size: 14px;
  }

  .btn {
    width: 100%;
    text-align: center;
    color: #1682DA;
    margin-top: 50px;
  }

  .center {
    position: absolute;
    left: 50%;
    margin-left: -960px;
    width: 1920px;
    background: #F6F6F6;
    height: 727px;
  }

  .bookClub {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }

  .bookClubdetail {
    width: 560px;
    height: 135px;
    display: flex;
    justify-content: space-between;
  }

  .bookClubImg {
    width: 230px;
    height: 135px;
    background: skyblue;
  }

  .bookClubRight img {
    width: 100%;
    height: 100%;
  }

  .bookClubRight {
    width: 314px;
    height: 135px;
  }

  .bookClubRight p:nth-child(1) {
    color: #333333;
    font-size: 20px;
    margin-bottom: 8px;
  }

  .bookClubRight p:nth-child(2) {
    color: #666666;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .hot {
    width: 100%;
  }

  .hotCon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }

  .hotDetail {
    width: 550px;
    display: flex;
    justify-content: space-between;
  }

  .hotImg {
    width: 100px;
    height: 100px;
    background: skyblue;
  }

  .hotImg img {
    width: 100%;
    height: 100%;
  }

  .hotRight {
    width: 426px;
    height: 100px;
  }

  .hotRight p:nth-child(1) {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  }

  .hotRight p:nth-child(2) {
    font-size: 13px;
    color: #333;
  }

  .bookAll {
    width: 1200px;
    margin: 0 auto;
  }
  .bookCon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .bookConLeft {
    box-sizing:  border-box;
    width: 850px;
    height: 625px;
    border: 1px solid #DDDDDD;
    padding: 25px;
  }
  .bookLeftA {
    display: flex;
    justify-content: space-between;
  }
  .bookImg{
    width: 100px;
    display: flex;
    justify-content: space-between;
  }

  .bookyue{
    color:#333333;
    font-size: 24px;
  }
  .p2{
    color: #666;
    font-size: 16px;
    margin-top: 15px;
  }
  .bookConRight {
    width: 320px;
    height: 625px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 20px;
  }
  .bookConRight p{
    margin: 0;
    padding: 0;
  }
  .bookConRight > p:nth-child(1) {
    font-size:20px ;
    color: #333333;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .bookTui {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .bookTuiImg {
    width: 70px;
    height: 97px;
    background: skyblue;
  }
  .bookTuiRight {
    width: 190px;
    height: 97px;
  }
  .bookTuiRight p:nth-child(1) {
    color: #333333;
    font-size: 20px;
    margin-bottom: 7px;
  }
  .bookTuiRight p:nth-child(2) {
    color: #999999;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .bookTuiRight p:nth-child(3) {
    color: #666666;
    font-size: 13px;
  }

.bookImg img {
  width: 100%;
  height: 100%;
}




















</style>
