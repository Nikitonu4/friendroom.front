<template>
  <q-tabs
    v-model="value"
    class="fr-tabs bg-white"
    no-caps
    indicator-color="primary"
    active-class="fr-tabs__active"
    active-color="primary"
  >
    <q-tab
      v-for="tab in options"
      :key="tab.value"
      :disable="disabled"
      :name="tab.value"
      :label="tab.label"
      :ripple="false"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface FrTabsProps {
  initValue: string;
  disabled?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}

const props = withDefaults(defineProps<FrTabsProps>(), {
  initValue: '',
  disabled: false,
});
const emit = defineEmits<{
  (e: 'update:value', newValue: string): void;
}>();

const value = computed({
  get() {
    return props.initValue;
  },
  set(newValue) {
    emit('update:value', newValue);
  },
});
</script>

<style scoped lang="scss">
.fr-tabs {
  border-radius: 20px 20px 0 0;
  &__active {
    :deep(.q-focus-helper) {
      color: white;
    }
  }
  :deep(.q-tab__indicator) {
    height: 3px;
  }
}
</style>
