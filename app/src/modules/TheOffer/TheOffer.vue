<template>
<div class="offer">
  <q-img
    src="~assets/offer-house.png"
    spinner-color="white"
    class="offer-img"
  />
  <h1 class="offer-title">ФРЕНДРУМ - сервис для подбора идеального соседа и жилья в аренду</h1>
  <h2 class="offer-subtitle">Поиск соседа или квартиры для совместного проживания</h2>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.offer {
  margin-top: 60px;
  width: 100%;
  z-index: -1;
  height: 380px;
  background: #E92C42;
  padding: 1px 0 0;
  border-radius: 20px;
  position: relative;
  &-img{
    position: absolute;
    bottom: 0;
    height: 421px;
    width: 542px;
  }
  &-title{
    margin: 31px 0 0 379px;
    font-weight: 600;
    color: #fff;
    font-size: 48px;
    line-height: 65px;
  }
  &-subtitle{
    margin: 9px 0 0 381px;
    font-weight: 300;
    color: #fff;
    font-size: 20px;
    line-height: 27px;
  }
}
</style>
