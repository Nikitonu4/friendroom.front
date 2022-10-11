<template>
  <q-page class="main-page">
    <the-offer class="main-page__offer" />
    <div class="main-page__control-search">
      <fr-tabs
        class="tabs-search"
        :init-value="mainStore.searchType"
        :options="[
          {
            label: 'Найти соседа',
            value: 'roommate',
          },
          {
            label: 'Найти квартиру',
            value: 'flat',
          },
        ]"
        @update:value="mainStore.setField('searchType', $event)"
      />
      <main-search />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TheOffer from 'src/modules/TheOffer/TheOffer.vue';
import FrTabs from 'components/atoms/FrTabs/FrTabs.vue';
import MainSearch from 'src/modules/MainSearch/MainSearch.vue';
import { useMainStore } from 'stores/main-store';

const mainStore = useMainStore();
</script>

<style lang="scss">
.main-page {
  &__offer {
  }
  &__control-search {
    z-index: 40;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -95px;
  }
}

.tabs-search {
  width: 450px;
}
</style>
