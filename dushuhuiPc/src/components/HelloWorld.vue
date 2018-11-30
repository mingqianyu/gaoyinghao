<template>
  <div class="hello">
    <div class="nav">
      <!--<img src="logo.png" alt="">-->
      <p>LOGO</p>
      <p>客户端下载</p>
    </div>
    <div class="swiperBox">
      <el-carousel :interval="5000" height="420" arrow="always">
        <el-carousel-item style="height: 420px;" v-for="item in swiperObj" :key="item.bananerId">
          <img style="width: 100%;" :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bookList">
      <div class="bookCon">
        <p class="p1">书籍推荐</p>
        <div class="xian"></div>
        <div class="bookListA">
          <div class="bookDetail">
            <img src="" alt="">
            <div class="bookRight">
              <p>书籍名称</p>
              <p>作者: Moumoumou</p>
              <p>书籍简介: 书籍简介哈哈哈哈纾解简介阿斯利康放大镜看见爱上对方阿斯利康打飞机</p>
            </div>
          </div>
          <div class="bookDetail">
            <img src="" alt="">
            <div class="bookRight">
              <p>书籍名称</p>
              <p>作者: Moumoumou</p>
              <p>书籍简介: 书籍简介哈哈哈哈纾解简介阿斯利康放大镜看见爱上对方阿斯利康打飞机</p>
            </div>
          </div>
          <div class="bookDetail">
            <img src="" alt="">
            <div class="bookRight">
              <p>书籍名称</p>
              <p>作者: Moumoumou</p>
              <p>书籍简介: 书籍简介哈哈哈哈纾解简介阿斯利康放大镜看见爱上对方阿斯利康打飞机</p>
            </div>
          </div>
        </div>
        <a>点击加载更多</a>
      </div>
      <div class="bookClub">
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
    },
    methods: {
      getList() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://192.168.101.107:8888/pcIndex/indexBananers?pageNo=' + this.pageNum);
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
        console.log(this.swiperObj)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  html,body,div,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,object,code,em,span,var,legend,button,input,textarea,th,td,a,img,header,footer,nav,aside,audio,datalist,section { margin:0;padding:0;border:0;outline:0; }/*清除内外边距*/
  h1,h2,h3,h4,h5,h6 { font-weight:normal; }/*设置默认字体*/
  :focus { outline:0; }
  div{margin: 0;padding: 0;}
  ul,ol,ul li,ol li { list-style: none; }/*重置列表*/
  address,caption,cite,em,code,dfn,th,var { font-style:normal;font-weight:normal; }
  form label { cursor:pointer; }
  input,button,select,textarea { font-family:inherit;font-size:100%;outline:none; }
  textarea { resize:none }
  input { vertical-align:middle; }
  img { border:0; }/*重置图片元素*/
  table { border-collapse:collapse;border-spacing: 0; }/*重置表格*/
  .l { float:left; }
  .r { float:right; }
  button,input[type="reset"],input[type="button"],input[type="submit"] { line-height:normal !important; }
  a { text-decoration:none;}
  /*a:hover { text-decoration:underline; }*/
  input { _filter:chroma(color=#000000); }
  .hello {
    width: 1920px;
    height: 100%;
    margin: 0 auto;
  }
  .nav {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 78px;
    margin-top: -70px;
  }
.swiperBox {
  height: 420px;
}
.bookList {
  width: 1200px;
  margin: 0 auto;
}
.el-carousel{
  height: 420px;
}
.p1{
  margin-top: 39px;
}
































</style>
