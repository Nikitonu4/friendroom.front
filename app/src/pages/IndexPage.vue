<template>
  <q-page class="main-page">
    <the-offer/>
    <fr-tabs
      class="tabs-search"
      :options="[{
    label: 'Найти соседа',
    value: 'neighbour'
    },
    {
    label: 'Найти квартиру',
    value: 'flat',
    }
    ]"/>
  </q-page>
</template>

<script setup lang="ts">
import TheOffer from 'src/modules/TheOffer/TheOffer.vue';
import FrTabs from 'components/atoms/FrTabs/FrTabs.vue';

</script>

<style lang="scss">
.main-page{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabs-search{
  margin-top: -40px;
  width: 450px;
}
</style>
