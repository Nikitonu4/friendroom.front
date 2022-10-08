<template>
  <q-linear-progress
    dark
    stripe
    rounded
    size="40px"
    :value="value.length / 40"
    color="secondary"
    class="q-mt-sm" />
</template>

<script setup lang="ts">
export interface FrLinearProgressProps {
  value?:string
}
const props = defineProps<FrLinearProgressProps>()
</script>

<style scoped>

</style>
