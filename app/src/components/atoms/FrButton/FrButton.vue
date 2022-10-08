<template>
  <q-btn
    class="fr-button"
    no-caps
    color="primary"
    unelevated
    :ripple="false"
    :outline="style === 'outline'"
    :loading="loading"
    :disable="disabled"
    :label="label"
  />
</template>

<script setup lang="ts">
export interface FrButtonProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}
withDefaults(defineProps<FrButtonProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  loading: false,
  disabled: false,
});
</script>

<style scoped lang="scss">
.fr-button {
  width: 200px;
  //font-family: Whyte;
  height: 60px;
  border-radius: 0 6px 6px 0 !important;
  //background: #3d62ad;
  //color: #fff;
  font-weight: 600;
}
</style>
