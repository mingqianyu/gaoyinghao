<template>
  <div class="app-container">
    <div class="sliderBox">
      <div :class="oneStatus? 'activeBox': 'normal'" class="sliderOne" @click="oneF(1)">
        <p>管理员</p>
      </div>
      <div class="sliderOne"  :class="twoStatus? 'activeBox': 'normal'" @click="oneF(2)">
        <p>日志</p>
      </div>
      <div class="sliderOne" :class="treeStatus? 'activeBox': 'normal'" @click="oneF(3)">
        <p>敏感词</p>
      </div>
      <div class="sliderOne" :class="fourStatus? 'activeBox': 'normal'" @click="oneF(4)">
        <p>冷词</p>
      </div>
    </div>
    <div class="mainRight">
      <div  v-if="oneStatus" class="silderCon">
        <admin></admin>
      </div>
      <div v-if="twoStatus" class="silderCon">
        <log></log>
      </div>
      <div v-if="treeStatus" class="silderCon">
        <sensitive></sensitive>
      </div>
      <div v-if="fourStatus" class="silderCon">
        <code-word></code-word>
      </div>
    </div>
  </div>
</template>

<script>
  import admin from './component/admin'
  import codeWord from './component/codeWord'
  import log from './component/log'
  import sensitive from './component/sensitive'

  export default {
    components: {
      admin,
      codeWord,
      log,
      sensitive
    },
    data() {
      return {
        oneStatus: true,
        twoStatus: false,
        treeStatus: false,
        fourStatus: false
      }
    },
    mounted() {
      this.list()
    },
    methods: {
      list() {

      },
      oneF(index) {
        console.log(index)
        if (index === 1) {
          this.oneStatus = true;
          this.twoStatus = false;
          this.treeStatus = false;
          this.fourStatus = false;
        } else if (index === 2) {
          this.oneStatus = false;
          this.twoStatus = true;
          this.treeStatus = false;
          this.fourStatus = false;
        } else if (index === 3) {
          this.oneStatus = false;
          this.twoStatus = false;
          this.treeStatus = true;
          this.fourStatus = false;
        } else if (index === 4) {
          this.oneStatus = false;
          this.twoStatus = false;
          this.treeStatus = false;
          this.fourStatus = true;
        }
      }
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>

