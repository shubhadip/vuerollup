<script lang="ts">
import Vue from 'vue';
import { VuerollupSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VuerollupSample,
  }
});
</script>

<template>
  <div id="app">
    <vuerollup-sample />
  </div>
</template>
