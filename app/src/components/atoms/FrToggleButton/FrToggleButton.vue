  <template>
    <div>
      <q-btn-toggle

        ref="test"
        v-model="model"
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
        @click="aira"/>
    </div>
    </template>

<script setup lang="ts">
import {onUpdated, ref} from 'vue';

export interface FrButtonProps {
  disabled?: boolean;
  options: {
    label: string,
    value: string,
  }[],
}

withDefaults(defineProps<FrButtonProps>(), {
  disabled: false,
});

const model = ref('neighbour')
onUpdated(()=>{
  console.log(model.value)
})
</script>

<style scoped lang="scss">
.fr-toggle-button{
  border-radius: 20px 20px 0 0 !important;
}
</style>
