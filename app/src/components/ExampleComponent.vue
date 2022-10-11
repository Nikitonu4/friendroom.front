<template>
  <div>
    <div class="flex">
      <fr-input v-model="value" :value="value" />
      <fr-button
        :label="'Искать'"
        :left-icon="{
          name: 'search',
        }"
      />
    </div>
    <fr-linear-progress :value="value" />
    <fr-dropbox />
    <div class="q-pa-lg flex flex-center">
      <fr-pagination />
    </div>
    <q-skeleton type="linear-progress" />
    <fr-toggle />
  </div>
</template>

<script setup lang="ts">
import FrButton from 'components/atoms/FrButton/FrButton.vue';
import FrInput from 'components/atoms/FrInput/FrInput.vue';
import FrPagination from 'components/atoms/FrPagination/FrPagination.vue';
import FrDropbox from 'components/atoms/FrDropbox/FrDropbox.vue';
import FrLinearProgress from 'components/atoms/FrLinearProgress/FrLinearProgress.vue';
import { ref } from 'vue';
import FrToggle from 'components/atoms/FrToggle/FrToggle.vue';
const value = ref('');
</script>
