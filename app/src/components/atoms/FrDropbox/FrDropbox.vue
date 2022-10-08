<template>
  <q-btn-dropdown
    class="fr-dropbox"
    unelevated>
   <div class="fr-dropbox__content">
    <slot name="label">
      {{label}}
    </slot>
   </div>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
export interface FrDropboxProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
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

withDefaults(defineProps<FrDropboxProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  disabled: false,
});
</script>

<style scoped lang="scss">
.fr-dropbox {
  border-radius: 0 !important;
}
</style>
