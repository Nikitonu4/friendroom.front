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
        @click="$emit('value', value)"/>
    </template>

<script setup lang="ts">
import {computed, ref} from 'vue';

export interface FrToggleButtonProps {
  initValue: string,
  disabled?: boolean;
  options: {
    label: string,
    value: string,
  }[],
}

const props = withDefaults(defineProps<FrToggleButtonProps>(), {
  initValue: '',
  disabled: false,
});
const value = ref(props.initValue)
const emits = defineEmits(['value'])


</script>

<style scoped lang="scss">
.fr-toggle-button{
  border-radius: 20px 20px 0 0 !important;
}
</style>
