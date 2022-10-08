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
  >
    <div
      v-if="leftIcon?.name"
      class="fr-button__icon-left"
    >
      <q-icon :name="leftIcon.name"/>
    </div>
    <span class="fr-button__content" >
          {{ label }}
      </span>
  </q-btn>
</template>

<script setup lang="ts">
export interface FrButtonProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  mainIcon?: {
    name: string,
  },
  leftIcon?: {
    name: string,
  },
  rightIcon?: {
    name: string,
  },
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
  width: 126px;
  border-radius: 20px;
  height: 46px;
  font-weight: 700;
}
</style>
