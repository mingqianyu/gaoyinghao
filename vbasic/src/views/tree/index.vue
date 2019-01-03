<template>
  <div class="app-container">
    <div class="sliderBox">
      <div :class="oneStatus? 'activeBox': 'normal'" class="sliderOne" @click="oneF(1)">
        <p>中科院全刊</p>
      </div>
    </div>
    <div class="mainRight">
      <div v-if="oneStatus" class="silderCon">
        <p>呢蓉蓉</p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        oneStatus: true,
      }
    },
    mounted() {
      this.list()
    },
    methods: {
      list() {

      },
      oneF(index) {

      }
    }
  }
</script>

<style scoped>
  .line {
    text-align: center;
  }
</style>


