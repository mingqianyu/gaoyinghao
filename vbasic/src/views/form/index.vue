<template>
  <div class="app-container">
    <div class="sliderBox">
      <div :class="oneStatus? 'activeBox': 'normal'" class="sliderOne" @click="oneF(1)">
        <p>中科院全刊</p>
      </div>
      <div class="sliderOne"  :class="twoStatus? 'activeBox': 'normal'" @click="oneF(2)">
        <p>主办单位</p>
      </div>
      <div class="sliderOne" :class="treeStatus? 'activeBox': 'normal'" @click="oneF(3)">
        <p>学科</p>
      </div>
    </div>
    <div class="mainRight">
      <div  v-if="oneStatus" class="silderCon">
        <book></book>
      </div>
      <div v-if="twoStatus" class="silderCon">
        <unit></unit>
      </div>
      <div v-if="treeStatus" class="silderCon">
        <project></project>
      </div>
    </div>
  </div>
</template>

<script>
  import book from './component/book/index'
  import project from './component/project/index'
  import unit from './component/unit/index'

export default {
    components: {
      book,
      project,
      unit
    },
  data() {
    return {
      oneStatus: true,
      twoStatus: false,
      treeStatus: false,
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
      } else if (index === 2) {
        this.oneStatus = false;
        this.twoStatus = true;
        this.treeStatus = false;
      } else {
        this.oneStatus = false;
        this.twoStatus = false;
        this.treeStatus = true;
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

