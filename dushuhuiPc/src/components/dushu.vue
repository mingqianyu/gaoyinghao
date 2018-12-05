<template>
    <div>
      <bookheader></bookheader>
      <div class="bookAll">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>书籍详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="bookCon">
          <div class="bookConLeft">
            <div class="bookLeftA">
              <div class="bookImg">
                <div class="bookimgleft">
                  <img :src="imgsrc" alt="">
                </div>
                <div class="bookImgRight">
                  <p>{{this.bookdetailcon.productName}}</p>
                  <p>作者: <span>{{this.bookdetailcon.author}}</span></p>
                  <p class="over4">书籍简介: <span>{{this.bookdetailcon.contentDscr}}</span></p>
                  <el-button type="primary" size="mini" @click="readbook"> 阅读</el-button>
                </div>
              </div>
              <p class="bookyue"><span style="margin-right: 7px;">{{this.bookdetailcon.readNum}}</span>人阅读</p>
            </div>
            <div class="bookEdit">
              <p class="bookyue">编辑推荐: </p>
              <p class="p2 over4">{{this.bookdetailcon.editRecommend}}</p>
            </div>
            <div class="bookAdd">
              <p class="bookyue">媒体推荐:</p>
              <p class="p2 over41">{{this.bookdetailcon.mediaRecommend}}</p>
            </div>
          </div>
          <div class="bookConRight">
            <p>书籍推荐</p>
            <div class="bookTui" v-for="(item, i) in catall" style="margin-top: 30px;" @click="tuijiandian(i)">
              <div class="bookTuiImg">
                <img :src="item.image.imgUrl" alt="">
              </div>
              <div class="bookTuiRight">
                <p>{{item.productName}}</p>
                  <p>作者: <span>{{item.author }}</span></p>
                <p class="over2">书籍简介: <span>{{item.description}}
                </span></p>
              </div>
            </div>
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
          catId: null,
          bookdetailcon: {},
          catall: {},
          imgsrc: ''
        }
      },
      created() {
        this.bookdeti();
        this.catidss();
        window.scrollTo(0,0);
      },
      methods : {
        tuijiandian(i) {
          console.log(i)
          localStorage.setItem("bookId", this.catall[i].productId)
          localStorage.setItem("catId", this.catall[i].catId)
          this.bookdeti();
        },
        readbook() {
          // this.$router.push('../../../static/epub/examples/promises.html')
          // window.open('https://github.com/mingqianyu/project/blob/master/epub/epub/examples/promises.html')
          localStorage.setItem('productId',this.bookdetailcon.productId)
          console.log('存贮书本id陈宫',this.bookdetailcon.productId)
          window.open('http://www.mingqianyu.com?'+ this.bookdetailcon.productId)
        },
        bookdeti() {
          this.bookid = localStorage.getItem('bookId')
          var self = this;
          //步骤一:创建异步对象
          var ajax = new XMLHttpRequest();
          //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
          ajax.open('get', 'http://47.52.131.83:8888/pcIndex/productDetail?productId=' + self.bookid );
          //步骤三:发送请求
          ajax.send();
          //步骤四:注册事件 onreadystatechange 状态改变就会调用
          ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
              //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
              // console.log(ajax.responseText);//输入相应的内容
              localStorage.setItem('bookdetailcon', ajax.responseText)
              self.gaoying()
            }
          }
        },
        gaoying() {
          this.bookdetailcon = JSON.parse(localStorage.getItem('bookdetailcon'));
          this.imgsrc = this.bookdetailcon.image.imgUrl;
          console.log('书本详细信息:',this.bookdetailcon)
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
    height: 660px;
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
  height: 660px;
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
  height: 88px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.over41{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 88px;
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
