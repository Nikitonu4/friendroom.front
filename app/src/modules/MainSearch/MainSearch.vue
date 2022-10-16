<template>
  <div class="fr-main-search">
    <div class="fr-main-search__item">
      <fr-dropbox :label="'Место'">
        <div class="place">
          Популярные места
          <div class="filter__checkbox-list q-mb-10">
            <div v-for="(item, i) in places" :key="i" v-close-popup class="q-mt-xl" clickable @click="onItemClick">
              {{ item }}
            </div>
          </div>
        </div>
      </fr-dropbox>
    </div>
    <div class="fr-main-search__item">
      <age-dropdown />
    </div>
    <div class="fr-main-search__item">
      <fr-dropbox :label="'Пол соседа'" />
    </div>
    <div class="fr-main-search__item">
      <fr-dropbox :label="'Цена с человека'" />
    </div>

    <fr-button :label="'Искать'" :left-icon="{ name: 'search' }" />
  </div>
</template>

<script setup lang="ts">
import FrButton from 'components/atoms/FrButton/FrButton.vue';
import FrDropbox from 'components/atoms/FrDropbox/FrDropbox.vue';
import AgeDropdown from './components/AgeDropdown.vue';

const places = ['Москва, Россия', 'Санкт-Петербург, Россия', 'Сочи, Россия', 'Ростов, Россия', 'Крым, Россия'];
const onItemClick = (e) => {
  console.log(e);
};
</script>

<style scoped lang="scss">
.fr-main-search {
  display: flex;
  padding: 0 52px;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 92px;
  background: #fff;
  box-shadow: 5px 5px 25px rgba(174, 174, 192, 0.16);
  border-radius: 20px;
  &__item {
    display: flex;
    flex-direction: row;
  }
}

.place {
  width: 318px;
  height: 214px;
  padding: 13px 23px;
  box-shadow: 5px 5px 25px rgba(174, 174, 192, 0.16);
  border-radius: 20px;
  .filter__checkbox-list {
    display: flex;
    flex-direction: column;
    height: 180px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .filter__checkbox-list::-webkit-scrollbar {
    background-color: #fff;
    border-radius: 8px;
    width: 5px;
    overflow: hidden;
  }
  .filter__checkbox-list::-webkit-scrollbar-thumb {
    background-color: #bcbcbc;
    border-radius: 8px;
  }
}
</style>
