<template>
  <div class="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon class="iconfont icon-layer-group"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">植物生长监控数据</span>
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <div class="bb"/>
      <div class="cc">
        <img src="hua.jpg" height="200" width="300"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Chart from './chart/index'
export default defineComponent({
  components: {
    Chart
  }
})
</script>

<style lang="scss" scoped>
.bb{
  height: 30px;
}
.cc{
  margin-top: 60px;
}
.centreLeft1 {
  $box-width: 300px;
  $box-height: 410px;
  padding: 16px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
