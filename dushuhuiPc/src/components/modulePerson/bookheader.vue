<template>
  <div class="hello">
    <div class="allbox">
      <div class="nav">
        <router-link to="/">
          <img src="../../../static/logo.png" style="width: 72.5px;height: 30px;margin-top: 10px;" alt="">
        </router-link>
        <router-link to="/pcdown">
        <img src="../../../static/diannao.png" style="width: 92px;height: 20px;margin-top: 10px;" alt="">
        </router-link>
      </div>
      <div class="swiperBox" style="height: 470px;">
        <el-carousel :interval="5000" style="
    width: 1200px;height: 570px;" height="470" arrow="always">
          <el-carousel-item style="height: 470px;" v-for="item in swiperObj" :key="item.bananerId">
            <img style="width: 100%;height: 470px;" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        pageNum: 1,
        swiperObj: ''
      }
    },
    created() {
      this.getList();
      window.scrollTo(0,0);

    },
    computed: {},
    methods: {
      getList() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://www.qmdsw.com/mall/pcIndex/indexBananers?pageNo=' + this.pageNum);
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('swiperObj', ajax.responseText)
          }
        }
        this.swiperObj = JSON.parse(localStorage.getItem('swiperObj'))
        // console.log(this.swiperObj)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    height: 50px;
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
    margin-top: 30px;
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

  .kankanImg {
    background: skyblue;
    width: 1200px;
    height: 300px;
    border-radius: 7px;
    margin-top: 20px;
  }
  .erweima{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 85px;
    height: 110px;
  }

</style>
