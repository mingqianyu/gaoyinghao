<template>
  <div>
    <bookheader></bookheader>
    <div class="bookAll">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 20px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotPage'}">热点列表</el-breadcrumb-item>
        <el-breadcrumb-item>热点详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="bookCon" style="flex-direction: column;align-items: center;border: 1px solid #D6D6D6;">
        <p style="color: #333;font-size: 22px;font-weight: bold;">  {{ this.hotthisde.title}} </p>
        <div style="width: 600px;display: flex;justify-content: space-between;font-size: 18px;color: #666;">
          <p>时间: <span>{{this.hotthisde.updateTime }}</span></p> <p>阅读人数: <span style="font-weight: bold;">{{ this.hotthisde.discuss}}</span></p>
        </div>
        <div style="padding: 30px;font-size: 14px;color: #666;line-height: 26px;">
          <!--<p>-->
            {{ this.hotthisde.content}}
          <!--</p>-->
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
        bookid: null,
        hotid: null,
        hotthisde: {},
        catall: {},
      }
    },
    created() {
      this.bookdeti123()
      this.catidss();

    },
    methods : {
      bookdeti123() {
        this.hotid = localStorage.getItem('hotid')
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/discovery/hotDetail?id=' + self.hotid );
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('hotthisde', ajax.responseText)
            self.kklkkl()
          }
        }
      },
      kklkkl() {
        this.hotthisde = JSON.parse(localStorage.getItem('hotthisde'))
        console.log(this.hotthisde)
      },
      catidss() {
        this.catId = localStorage.getItem('catId')
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/pcIndex/recommendProduct?catId=' + self.catId );
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('catall', ajax.responseText)
            self.kjkj()
          }
        }
      },
      kjkj() {
        this.catall = JSON.parse(localStorage.getItem('catall'))
        console.log('推荐',this.catall)
      }
    }
  }
</script>

<style scoped>
  .bookAll {
    width: 1200px;
    margin: 0 auto;
  }
  .bookCon {
    margin-top: 20px;
    display: flex;
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
    width: 600px;
    display: flex;
    justify-content: space-between;
  }
  .bookimgleft {
    width: 190px;
    height: 263px;
  }
  .bookimgleft img{
    width: 100%;
    height: 100%;
  }
  .bookImgRight{
    width: 380px;
  }
  .bookImgRight p:nth-child(1) {
    color: #333333;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 7px;
  }
  .bookImgRight p:nth-child(2) {
    color: #999999;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .bookImgRight p:nth-child(3) {
    color: #666666;
    font-size: 16px;
    margin-bottom: 30px;
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

  .over4{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 83px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .over2{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 33px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bookTuiImg img {
    width: 100%;
    height: 100%;
  }



















</style>
