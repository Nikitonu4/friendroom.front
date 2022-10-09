<template>
  <div>
    <q-tabs
    v-model="model"
    class="fr-tabs bg-white"
    no-caps
    indicator-color="primary color"
    active-class="fr-tabs__active"
    active-color="primary"
    >
      <q-tab
        v-for="tab in options"
        :key="tab.value"
      :name="tab.value"
      :label="tab.label"
      :ripple="false"
      />
    </q-tabs>
  </div>

</template>

<script setup lang="ts">
import {onUpdated, ref} from 'vue';

export interface FrTabsProps {
  disabled?: boolean;
  options: {
    label: string,
    value: string,
  }[],
}

withDefaults(defineProps<FrTabsProps>(), {
  disabled: false,
});

const model = ref('neighbour')
onUpdated(()=>{
  console.log(model.value)
})
</script>

<style scoped lang="scss">
.fr-tabs{
  border-radius: 20px 20px 0 0 !important;
  &__active{
    :deep(.q-focus-helper){
      color: white;
    }
  }
  :deep(.q-tab__indicator){
    height: 3px;
    border-radius: 10px;
  }
}
</style>
