<template>
  <div class="gender-dropdown">
    <div v-if="false" class="gender-dropdown__label">Пол соседа</div>
    <fr-dropbox :label="getLabel" :menu-offset="[20, 40]" :padding-btn="'10px'">
      <div class="gender">
        <div class="item">
          <fr-checkbox v-model="genders" val="female" :label="'Женский'" color="primary" />
        </div>
        <div class="item"><fr-checkbox v-model="genders" val="male" :label="'Мужской'" color="primary" /></div>
      </div>
    </fr-dropbox>
  </div>
</template>
<script setup lang="ts">
import FrDropbox from 'components/atoms/FrDropbox/FrDropbox.vue';
import FrCheckbox from 'components/atoms/FrCheckbox/FrCheckbox.vue';
import { computed, ref } from 'vue';
const genders = ref<string[]>([]);

const getLabel = computed(() => {
  if (!genders.value.length) {
    return 'Пол соседа';
  }
  const resultGenders = [];
  if (genders.value.includes('male')) {
    resultGenders.push('Мужской');
  }
  if (genders.value.includes('female')) {
    resultGenders.push('Женский');
  }

  return resultGenders.join(', ');
});
</script>

<style scoped lang="scss">
.gender-dropdown {
}
.gender {
  padding: 17px 20px;
}
</style>
