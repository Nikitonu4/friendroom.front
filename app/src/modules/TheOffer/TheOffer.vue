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
  height: 380px;
  background: #E92C42;
  padding: 22px 0 0;
  border-radius: 20px;
  position: relative;
  &-img{
    position: absolute;
    bottom: 0;
    height: 421px;
    width: 786px;
  }
  &-title{
    margin: 0;
    margin-left: 377px;
    font-weight: 600;
    color: #fff;
    font-size: 48px;
    line-height: 65px;
  }
  &-subtitle{
    margin: 13px 0 0 443px;
    font-weight: 300;
    color: #fff;
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
