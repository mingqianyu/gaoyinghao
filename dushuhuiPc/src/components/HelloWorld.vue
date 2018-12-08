<template>
  <div class="hello" style="height: 3300px;overflow: hidden;">
    <div class="allbox">
      <div class="nav">
        <img src="../../static/logo.png" style="width: 72.5px;height: 30px;margin-top: 10px;" alt="">
        <router-link to="/pcdown">
          <img src="../../static/diannao.png" style="width: 92px;height: 20px;margin-top: 10px;" alt="">
        </router-link>
      </div>
      <a name="top" id="top"></a>
      <div style="width: 100%;height: 470px;">
        <el-carousel :interval="5000" style="height: 470px !important;" arrow="always">
          <el-carousel-item style="height: 470px;" v-for="item in swiperObj" :key="item.bananerId">
            <img style="width: 100%;height: 470px;" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="bookList">
        <div class="bookCon">
          <p class="p1">书籍推荐</p>
          <div class="xian"></div>
          <div class="bookListA">
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[0].image.imgUrl" alt="">
              </div>
              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[0].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[0].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[0].description }}</p>
              </div>
            </div>
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[1].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[1].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[1].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[1].description }}</p>
              </div>
            </div>
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[2].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[2].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[2].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[0].description }}</p>
              </div>
            </div>
          </div>
          <!--第二行-->
          <div class="bookListA">
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[3].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[3].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[3].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[3].description }}</p>
              </div>
            </div>
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[4].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[4].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[4].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[4].description }}</p>
              </div>
            </div>
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[5].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[5].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[5].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[5].description }}</p>
              </div>
            </div>
          </div>
            <!--第三行-->
          <div class="bookListA">
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[6].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[6].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[6].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[6].description }}</p>
              </div>
            </div>
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[7].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[7].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[7].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[7].description }}</p>
              </div>
            </div>
            <div class="bookDetail">
              <div class="bookImg">
                <img :src="Booklist.records[8].image.imgUrl" alt="">
              </div>

              <div class="bookRight" style=" ">
                <p style="text-overflow:ellipsis;width: 200px;white-space:nowrap;overflow: hidden ">
                  {{ this.Booklist.records[8].productName }}
                </p>
                <p class="over1">作者: {{this.Booklist.records[8].author}}</p>
                <p class="shouover2">书籍简介: {{this.Booklist.records[8].description }}</p>
              </div>
            </div>
          </div>

          <div class="btn">
            <router-link to="/bookList" @click="returnTop()">点击加载更多</router-link>
          </div>
        </div>
        <div class="bookClub">
        </div>
      </div>
      <!--读书会-->
      <div class="swiperBox" style="margin-top: 59px">
        <div class="center">
          <div style="width: 1200px;margin: 0 auto;">
            <p class="p1">读书会</p>
            <div class="xian"></div>
            <div class="bookClub">
              <div class="bookClubdetail">
                <div class="bookClubImg">
                  <img :src="getBookClubList.records[0].img_url" alt="">
                </div>
                <div class="bookClubRight">
                  <p>{{this.getBookClubList.records[0].activity_name}}</p>
                  <p>主讲人: <span>{{this.getBookClubList.records[0].compere_name}}</span></p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
   height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;"><span>主讲人简介: </span>
                    {{this.getBookClubList.records[0].compere_dscr}}
                  </p>
                </div>
              </div>
              <div class="bookClubdetail">
                <div class="bookClubImg">
                  <img :src="getBookClubList.records[1].img_url" alt="">
                </div>
                <div class="bookClubRight">
                  <p>{{this.getBookClubList.records[1].activity_name}}</p>
                  <p>主讲人: <span>{{this.getBookClubList.records[1].compere_name}}</span></p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
   height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;"><span>主讲人简介: </span>
                    {{this.getBookClubList.records[1].compere_dscr}}
                  </p>
                </div>
              </div>
            </div>
            <div style="margin-top: 40px" class="bookClub">
              <div class="bookClubdetail">
                <div class="bookClubImg">
                  <img :src="getBookClubList.records[2].img_url" alt="">
                </div>
                <div class="bookClubRight">
                  <p>{{this.getBookClubList.records[2].activity_name}}</p>
                  <p>主讲人: <span>{{this.getBookClubList.records[2].compere_name}}</span></p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
   height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;"><span>主讲人简介: </span>
                    {{this.getBookClubList.records[2].compere_dscr}}
                  </p>
                </div>
              </div>
              <div class="bookClubdetail">
                <div class="bookClubImg">
                  <img :src="getBookClubList.records[3].img_url" alt="">
                </div>
                <div class="bookClubRight">
                  <p>{{this.getBookClubList.records[3].activity_name}}</p>
                  <p>主讲人: <span>{{this.getBookClubList.records[3].compere_name}}</span></p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
   height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;"><span>主讲人简介: </span>
                    {{this.getBookClubList.records[3].compere_dscr}}
                  </p>
                </div>
              </div>
            </div>
            <div style="margin-top: 40px;" class="bookClub">
              <div class="bookClubdetail">
                <div class="bookClubImg">
                  <img :src="getBookClubList.records[4].img_url" alt="">
                </div>
                <div class="bookClubRight">
                  <p>{{this.getBookClubList.records[4].activity_name}}</p>
                  <p>主讲人: <span>{{this.getBookClubList.records[4].compere_name}}</span></p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
   height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;"><span>主讲人简介: </span>
                    {{this.getBookClubList.records[4].compere_dscr}}
                  </p>
                </div>
              </div>
              <div class="bookClubdetail">
                <div class="bookClubImg">
                  <img :src="getBookClubList.records[5].img_url" alt="">
                </div>
                <div class="bookClubRight">
                  <p>{{this.getBookClubList.records[5].activity_name}}</p>
                  <p>主讲人: <span>{{this.getBookClubList.records[5].compere_name}}</span></p>
                  <p style="  overflow: hidden;
    text-overflow: ellipsis;
   display: -webkit-box;
   height: 63px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;"><span>主讲人简介: </span>
                    {{this.getBookClubList.records[5].compere_dscr}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="btn">
            <router-link to="/bookclub">点击加载更多</router-link>
          </div>
        </div>
      </div>

      <!--热点-->
      <div style="height: 290px;"></div>
      <div class="hot">
        <p class="p1">热点</p>
        <div class="xian"></div>
        <div class="hotCon">
          <div class="hotDetail">
            <div class="hotImg">
              <img :src="hotList.records[0].imageUrl" alt="">
            </div>
            <div class="hotRight">
              <p>{{this.hotList.records[0].title}}</p>
              <p class="over3">{{ this.hotList.records[0].content}}</p>
            </div>
          </div>
          <div class="hotDetail">
            <div class="hotImg">
              <img :src="hotList.records[1].imageUrl" alt="">
            </div>
            <div class="hotRight">
              <p>{{this.hotList.records[1].title}}</p>
              <p class="over3" >{{ this.hotList.records[1].content}}</p>
            </div>
          </div>
        </div>
        <div class="hotCon" style="margin-top: 40px;">
          <div class="hotDetail">
            <div class="hotImg">
              <img :src="hotList.records[2].imageUrl" alt="">
            </div>
            <div class="hotRight">
              <p>{{this.hotList.records[2].title}}</p>
              <p class="over3" >{{ this.hotList.records[2].content}}</p>
            </div>
          </div>
          <div class="hotDetail">
            <div class="hotImg">
              <img :src="hotList.records[3].imageUrl" alt="">
            </div>
            <div class="hotRight">
              <p>{{this.hotList.records[3].title}}</p>
              <p class="over3" >{{ this.hotList.records[3].content}}</p>
            </div>
          </div>
        </div>
        <div class="btn">
          <router-link to="/hotPage">点击加载更多</router-link>
        </div>
      </div>
      <!--看看-->
      <div class="swiperBox" style="margin-top: 59px;height: 2100px;">
        <div class="center" style="height: 100%;">
          <div style="width: 1200px;margin: 0 auto;">
            <p class="p1">看看</p>
            <div class="xian"></div>
            <div style="display: flex;flex-wrap: wrap;justify-content: left; margin-left: -25px;">
              <div class="bookClub kankanImg" v-for="(item,i) in kanlistArr" style="margin-top: 30px;margin-left: 27px;" @click="openkankan(i)">
                <img :src="item.imageUrl" alt="">
              </div>
            </div>

          </div>
          <div class="btn">
            <router-link to="/lookPage">点击加载更多</router-link>
          </div>
          <div style="border-bottom: 1px solid #DDDDDD;width: 100%;margin-top: 59px;margin-bottom: 22px;">
          </div>
          <div style="width: 1200px;margin: 0 auto;">
            <p style="color: #666666;margin-bottom: 24px;">国务院 丨 新华网 丨 人民网 丨 中国青年网 丨 中国知网 丨 超星 丨 人民网 丨 人民出版社 丨 读书会 丨 中央党校 丨 网信办 丨 中国青年网 丨 中国知网</p>
            <div style="display: flex;">
              <div style="color: #999999;width: 863px;font-size:14px;line-height: 23px; ">
                <p>
                  国家新闻出版署主管 人民出版社主办 Copyright 2009-2010 by www.ccpph.com.cn All Rights Reserved.
                </p>
                <p>
                  互联网新闻信息服务许可证10120170001 | 增值电信业务经营许可证B1-20060139
                </p>
                <p>
                  网络文化经营许可证 京网文[2017]9786-1126号 | 网络出版服务许可证（京）字258号 | 京ICP证000006号 | 京公网安备11000002000008号
                </p>
                <p>
                  Copyright © 2015-2019 All Rights Reserved 版权所有：中共中央党校报刊社 理论网
                </p>
              </div>
              <div style="display: flex;align-items: center;margin-left: 130px;">
                <div class="erweima">
                  <img src="../../static/app.png" alt="">
                  微信公众号
                </div>
                <div class="erweima" style="margin-left: 25px;">
                  <img src="../../static/app.png" alt="">
                  读书会APP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--footer-->

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
        swiperObj: {},
        Booklist : {},
        getBookClubList : {},
        hotList : {},
        bookClubShow: false,
        kanlist: {},
        kanlistArr: [],
        sdelay: 0
      }
    },
    created() {
      this.getList();
      this.getBookList();
      this.getBookClub();
      this.gethotList();
      this.getkankan();
      window.scrollTo(0,0);
    },
    mounted() {
      this.bookclick();
      this.clubdetail();
      this.sendhotdetail();
    },
    computed: {},
    methods: {
   returnTop() {
    window.scrollBy(0,-100);//Only for y vertical-axis
    if(document.body.scrollTop>0) {
      this.sdelay= setTimeout('returnTop()',50);
    }
  },
      openkankan(i) {
        var kankanlink = this.kanlistArr[i].href
        window.open(kankanlink)
      },
      bookclick() {
        var ba = document.getElementsByClassName('bookDetail');
        console.log(this.Booklist.records)
        var self = this;
        for (let i = 0; i< ba.length; i++) {
          ba[i].onclick = function () {
            localStorage.setItem("bookId", self.Booklist.records[i].productId)
            localStorage.setItem("catId", self.Booklist.records[i].catId)
            console.log(i)
            console.log(self.Booklist.records[i].productId)
            self.$router.push('/dushu')
          }
        }
      },
      clubdetail() {
        var ba1 = document.getElementsByClassName('bookClubdetail');
        var self = this;
        // console.log('读书会详情列表',this.getBookClubList)
        for (let i = 0; i< ba1.length; i++) {
          ba1[i].onclick = function () {
            localStorage.setItem("activityid", self.getBookClubList.records[i].activity_id)
            console.log(self.getBookClubList.records[i].activity_id)
            self.$router.push('/clubdetail')
          }
        }
      },
      sendhotdetail() {
        var hotlistba = document.getElementsByClassName('hotDetail');
        var self = this;
        // console.log('热点列表',this.hotList)
        for (let j = 0; j< hotlistba.length; j++) {
          hotlistba[j].onclick = function () {
            localStorage.setItem("hotid", self.hotList.records[j].id)
            self.$router.push('/hotdetail')
          }
        }
      },
      getList() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/pcIndex/indexBananers?pageNo=' + this.pageNum + '&type=1');
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
      },
      getBookList() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/pcIndex/indexProducts?pageNo=' + this.pageNum+ '&type=1');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('Booklist', ajax.responseText)

          }
        }
        this.Booklist = JSON.parse(localStorage.getItem('Booklist'))
        // console.log(this.Booklist)
      },
      getBookClub() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/pcIndex/indexActivityInfo?pageNo=' + this.pageNum+ '&type=1');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容

            localStorage.setItem('getBookClubList', ajax.responseText)
          }
        }
        // if (localStorage.getItem('getBookClubList') != '') {
          this.getBookClubList = JSON.parse(localStorage.getItem('getBookClubList'))
        // }
        console.log('读书会',this.getBookClubList)

      },
      gethotList() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/pcIndex/indexHotInfo?pageNo=' + this.pageNum + '&type=1');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('hotList', ajax.responseText)

          }
        }
        this.hotList = JSON.parse(localStorage.getItem('hotList'))
        console.log('热点',this.hotList)
      },
      getkankan() {
        var self = this;
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get', 'http://47.52.131.83:8888/pcIndex/indexLook?pageNo=' + this.pageNum + '&type=1');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(ajax.responseText);//输入相应的内容
            localStorage.setItem('kanlist', ajax.responseText)
            self.kankanlist123()
          }
        }
      },
      kankanlist123() {
        this.kanlist = JSON.parse(localStorage.getItem('kanlist'))
        this.kanlistArr = this.kanlist.records;
        console.log('kankanlist',this.kanlist);
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
.erweima img{
  width: 84px;
  height: 84px;
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
  .kankanImg img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
.over3{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.over1{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 19px;
  -webkit-line-clamp: 1;
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
    overflow: hidden;
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
    width: 151%;
    height: 100%;
  }

  .hotRight {
    width: 386px;
    height: 100px;
    overflow: hidden;
  }

  .hotRight p:nth-child(1) {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  .hotRight p:nth-child(2) {
    font-size: 13px;
    color: #333;
  }

  .kankanImg {
    background: skyblue;
    width: 380px;
    height: 160px;
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
.shouover2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*height: 65px;*/
  font-size: 14px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
