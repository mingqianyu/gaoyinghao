<template>
  <div class="app-container">
    <div class="sliderBox">
      <div :class="oneStatus? 'activeBox': 'normal'" to="/nested/menu1-1" class="sliderOne" @click="oneF(1)" >
        <p>活动预告</p>
      </div>
      <div class="sliderOne" :class="twoStatus? 'activeBox': 'normal'" to="/nested/menu1-2" @click="oneF(2)">
        <p>活动回顾</p>
      </div>
    </div>
    <div class="mainRight">
      <router-view></router-view>
      <div v-if="oneStatus" class="silderCon">
        <book></book>
      </div>
      <div v-if="twoStatus" class="silderCon">
        <project></project>
      </div>
    </div>
  </div>
</template>
<script>
  import book from './foreShow/index'
  import project from './backShow/index'

  export default {
    components: {
      book,
      project,
    },
    data() {
      return {
        oneStatus: true,
        twoStatus: false,
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
        } else if (index === 2) {
          this.oneStatus = false;
          this.twoStatus = true;
        } else {
          this.oneStatus = false;
          this.twoStatus = false;
        }
      }
    }
  }
</script>

<style scoped>
  .line {
    text-align: center;
  }
</style>


