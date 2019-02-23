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
      <div class="swiperBox" style="height: 590px;background: #DDDDDD;">
        <div style="width: 1200px;height: 590px;margin: 0 auto;border-radius: 10px;">
          <video :src="v1src" id="v1" style="width: 100%;height: 100%;" controls>
            您的浏览器不支持播放视频,请切换浏览器!
          </video>
        </div>
      </div>
      <div class="swiperBox" style="height: 280px;background: #fff;">
        <div style="background: #fff;width: 1200px;height: 100%;margin: 0 auto;">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 49px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/bookclub' }">读书会列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
            <div style="display: flex;align-items: center;margin-top: 40px;" v-for="(item,i) in bookclubPage.personInfo">
              <img :src="item.personIcon" style="width: 54px;height: 54px;border-radius: 3px;"  alt="">
              <div style="margin-left: 20px;">
                <p class="over2" style="color: #333333;font-size: 16px;margin: 0;padding: 0;">{{ i == 0? '主讲人:' : '作者:'}}
                  <span style="font-weight: bold;margin-left: 7px;"> {{ item.personName }}</span>
                </p>
                <p class="over2">{{ i == 0? '主讲人简介::' : '作者简介:'}} <span style="margin-left: 7px;">{{ item.personDesc }}</span></p>
              </div>
            </div>
        </div>
      </div>
      <!--footer-->
      <div class="swiperBox" style="height: 330px;background: #DDDDDD;padding-top: 30px;">
        <div style="width: 1200px;height: 335px;margin: 0 auto;">
            <p style="color: #333333;font-size: 20px;font-weight: bold;margin-top: 9px;margin-bottom: 20px;">活动简介:</p>
            <p>
              简介: <span>{{ this.bookclubPage.activityInfo.activityDesc}}</span>
            </p>
        </div>
      </div>
      <bookfooter>

      </bookfooter>
    </div>
  </div>
</template>

<script>
  import bookfooter from '@/components/modulePerson/bookfooter'

  export default {
        name: "clubdetail",
    components: { bookfooter },
    data() {
          return {
            activityid: undefined,
            bookclubPage: {},
            v1src: ''
          }
      },
      created () {
          this.clubdetailpage();
        window.scrollTo(0,0);

      },
      methods: {
          clubdetailpage() {
            this.activityid = localStorage.getItem('activityid');
            var self = this;
            //步骤一:创建异步对象
            var ajax = new XMLHttpRequest();
            //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
            ajax.open('get', 'http://www.qmdsw.com/mall/bookClub/videoDetail?id=' + self.activityid );
            //步骤三:发送请求
            ajax.send();
            //步骤四:注册事件 onreadystatechange 状态改变就会调用
            ajax.onreadystatechange = function () {
              if (ajax.readyState == 4 && ajax.status == 200) {
                //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                // console.log(ajax.responseText);//输入相应的内容
                localStorage.setItem('bookclubPage', ajax.responseText)
                self.getksdf()
              }
            }
          },
        getksdf() {
          this.bookclubPage = JSON.parse(localStorage.getItem('bookclubPage'))
          this.bookclubPage = this.bookclubPage.data
          console.log('视频',this.bookclubPage)
          this.v1src = this.bookclubPage.activityVideo.videoUrl;
            console.log(this.v1src)
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
    height: 50px;
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
  .over2{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 28px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
