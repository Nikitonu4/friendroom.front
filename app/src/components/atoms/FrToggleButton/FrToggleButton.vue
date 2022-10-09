<template>
  <q-btn-toggle
    v-model="value"
    class="fr-toggle-button"
    :options="options"
    :disable="disabled"
    :ripple="false"
    padding="17px 55px"
    rounded
    toggle-color="white"
    toggle-text-color="primary"
    spread
    unelevated
    no-caps
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface FrToggleButtonProps {
  initValue: string;
  disabled?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}

const props = withDefaults(defineProps<FrToggleButtonProps>(), {
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
.fr-toggle-button {
  border-radius: 20px 20px 0 0 !important;
}
</style>
