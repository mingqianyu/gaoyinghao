<template>
  <div class="hello">
    <!--看看-->
    <div class="swiperBox" style="margin-top: 59px;">
      <div class="center" style="height: 100%;">
        <div style="border-bottom: 1px solid #DDDDDD;width: 100%;margin-top: 0px;margin-bottom: 22px;">
        </div>
        <div style="width: 1200px;margin: 0 auto;">
          <p style="color: #666666;margin-bottom: 24px;">国务院 丨 新华网 丨 人民网 丨 中国青年网 丨 中国知网 丨 超星 丨 人民网 丨 人民出版社 丨 读书会 丨 中央党校
            丨 网信办 丨 中国青年网 丨 中国知网</p>
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
                <img src="" alt="">
                微信公众号
              </div>
              <div class="erweima" style="margin-left: 25px;">
                <img src="" alt="">
                读书会APP
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <!--footer-->

  </div>
</template>

<script>
  export default {
    name: 'bookfooter',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        pageNum: 1,
      }
    },
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

  .swiperBox {
    height: 200px;
    width: 100%;
    min-width: 1200px;
    position: relative;
    /*overflow: hidden;*/
    background: #F6F6F6;
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

  .center {
    position: absolute;
    left: 50%;
    margin-left: -960px;
    width: 1920px;
    background: #F6F6F6;
    height: 100%;
  }

  .bookClubRight img {
    width: 100%;
    height: 100%;
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

  .hotImg img {
    width: 100%;
    height: 100%;
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

  .erweima {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 85px;
    height: 110px;
  }

</style>
