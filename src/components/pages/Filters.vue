<template>
  <div class="d-flex justify-center align-center fill-height">
    <ul>
      <li>4 => {{ 4 | suffixed-number }}</li>
      <li>4000 => {{ 4000 | suffixed-number }}</li>
      <li>-4000 => {{ -4000 | suffixed-number }}</li>
      <li>4000000 => {{ 4100001 | suffixed-number }}</li>
      <li>1234567891011 => {{ 1234567891011 | suffixed-number }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>