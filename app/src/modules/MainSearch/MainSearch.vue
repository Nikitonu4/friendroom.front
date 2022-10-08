<template>
<div class="fr-main-search">
  <fr-button :label="'Искать'" :left-icon="{name: 'search'}"/>
</div>
</template>

<script setup lang="ts">
import FrButton from 'components/atoms/FrButton/FrButton.vue';
</script>

<style scoped lang="scss">
.fr-main-search{
  display: flex;
  flex-direction: row-reverse;
  padding: 0 52px;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 92px;
  background: #FFFFFF;
  box-shadow: 5px 5px 25px rgba(174, 174, 192, 0.16);
  border-radius: 20px;
}
</style>
