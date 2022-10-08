<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
    <div class="rec"></div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main-layout{
  padding: 44px 75px;
}
.rec{
  width: 170px;
  height: 64px;
  background: #D9D9D9;
  border-radius: 20px;
}
</style>
