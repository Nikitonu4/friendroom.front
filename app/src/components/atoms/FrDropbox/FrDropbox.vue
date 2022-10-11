<template>
  <q-btn-dropdown
    no-caps
    dropdown-icon="none"
    :disable-dropdown="disabled"
    class="fr-dropbox"
    unelevated
    :ripple="false"
  >
    <div class="fr-dropbox__content">тест</div>
    <template #label>
      <div class="fr-dropbox__label">
        {{ label }}
      </div>
    </template>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
interface FrDropboxProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  mainIcon?: {
    name: string;
  };
  leftIcon?: {
    name: string;
  };
  rightIcon?: {
    name: string;
  };
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
  &__label {
    font-weight: 400;
  }
}
</style>
