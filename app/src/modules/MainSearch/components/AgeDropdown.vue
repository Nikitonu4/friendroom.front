<template>
  <div class="age-dropdown">
    <div v-if="false" class="age-dropdown__label">Возраст соседа</div>
    <fr-dropbox :label="getLabel" :menu-offset="[130, 40]" :padding-btn="'10px 0'">
      <div class="flex justify-between age">
        <q-input v-model="fromAge" label="от" outlined rounded mask="##" type="text" placeholder="18 лет" />
        <q-input v-model="toAge" label="до" outlined rounded mask="##" type="text" placeholder="99 лет" />
      </div>
    </fr-dropbox>
  </div>
</template>
<script setup lang="ts">
import FrDropbox from 'components/atoms/FrDropbox/FrDropbox.vue';
import { computed, ref } from 'vue';
const fromAge = ref(null);
const toAge = ref(null);

const getLabel = computed(() => {
  if (!fromAge.value && !toAge.value) {
    return 'Возраст соседа';
  }

  if (fromAge.value && !toAge.value) {
    return `От ${fromAge.value} лет`;
  }

  if (toAge.value && !fromAge.value) {
    return `До ${toAge.value} лет`;
  }

  return `От ${fromAge.value} до ${toAge.value} лет`;
});
</script>

<style scoped lang="scss">
.age-dropdown {
  position: relative;
  &__label {
    position: absolute;
    top: -14px;
    font-size: 12px;
    line-height: 16px;
    color: #bcbcbc;
  }
  .fr-dropbox {
    width: 175px !important;
  }
}
.age {
  padding: 17px 20px;

  :deep(.q-field--outlined .q-field__control) {
    border-radius: 10px !important;
    color: #6f6f6f;
    height: 45px;
  }
  :deep(.q-field__control:after) {
    border-width: 1px;
  }
  :deep(.q-field__inner .q-field__label) {
    top: 11px;
  }
  :deep(.q-field__inner input) {
    padding-top: 15px;
    line-height: 14px;
    height: 50px;
    width: 98px;
  }
}
</style>
