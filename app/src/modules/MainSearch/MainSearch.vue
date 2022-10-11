<template>
  <div class="fr-main-search">
    <div class="fr-main-search__item">
      <fr-dropbox :label="'Место'" />
      <fr-main-search-separator />
    </div>
    <div class="fr-main-search__item">
      <fr-dropbox :label="'Возраст соседа'" />
      <fr-main-search-separator />
    </div>
    <div class="fr-main-search__item">
      <fr-dropbox :label="'Пол соседа'" />
      <fr-main-search-separator />
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
import FrMainSearchSeparator from 'components/atoms/FrMainSearchSeparator/FrMainSearchSeparator.vue';
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
</style>
