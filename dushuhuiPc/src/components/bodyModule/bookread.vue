<template>
  <div>
    <p>阅读</p>
    <div id="main">
      <div id="prev" onclick="Book.prevPage();" class="arrow">‹</div>
      <div id="area"></div>
      <div id="next" onclick="Book.nextPage();" class="arrow">›</div>
      <!--<div id="loader"><img src="../reader/img/loader.gif"></div>-->
      <select id="toc"></select>
    </div>
  </div>


</template>

<script>
  // import  {myfun}  from '../../../static/epub/build/epub.min'
  // import Epub from 'epub'
  // import  zipjs  from '../../../static/epub/libs/jszip/jszip.min'
    export default {
        name: "bookread",
      // components: { Epub }
      created() {
          // myfun();
          // zipjs();
          // this.zuihou()
      },
      mounted() {
        // this.bookequb();
      },
      methods: {
          zuihou() {
            // var EPub = require("epub");

            // 获取id
            function GetQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) {
                    return unescape(r[2]);
                }
                return null;
            }



            function getksdf123() {
              var epubstr = JSON.parse(localStorage.getItem('epubstr'))
              console.log("修改地址",epubstr)
              return epubstr;
            }
            // Load the opf
            getepubstr()
            var epubstrstr = getksdf123();
            var book = ePub(url || 'https://tederenoss.oss-cn-beijing.aliyuncs.com/reading/file/0/48947ac276c74b0b94f5797b7ade777f.epub');



          },
        //   bookequb() {
        //   // var epub = new EPub(epubfile, imagewebroot, chapterwebroot);
        //     Book.getMetadata().then(function(meta){
        //
        //       document.title = meta.bookTitle+" – "+meta.creator;
        //
        //     });
        //
        //     Book.getToc().then(function(toc){
        //
        //       var $select = document.getElementById("toc"),
        //         docfrag = document.createDocumentFragment();
        //
        //       toc.forEach(function(chapter) {
        //         var option = document.createElement("option");
        //         option.textContent = chapter.label;
        //         option.ref = chapter.href;
        //
        //         docfrag.appendChild(option);
        //       });
        //
        //       $select.appendChild(docfrag);
        //
        //       $select.onchange = function(){
        //         var index = $select.selectedIndex,
        //           url = $select.options[index].ref;
        //
        //         Book.goto(url);
        //         return false;
        //       }
        //
        //     });
        //
        //     Book.ready.all.then(function(){
        //       document.getElementById("loader").style.display = "none";
        //     });
        //
        //     Book.renderTo("area");
        //
        // }
      }

    }
</script>

<style scoped>
  body {
    overflow: hidden;
  }

  #main {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #area {
    width: 80%;
    height: 80%;
    margin: 5% auto;
    max-width: 1250px;
  }

  #area iframe {
    border: none;
  }

  #prev {
    left: 40px;
  }

  #next {
    right: 40px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    margin-top: -32px;
    font-size: 64px;
    color: #E2E2E2;
    font-family: arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .arrow:hover {
    color: #777;
  }

  .arrow:active {
    color: #000;
  }

  #loader {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    margin: -33px 0 0 -33px;
  }

  #toc {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
