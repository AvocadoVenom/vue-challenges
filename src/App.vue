<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/" v-slot="{ href, navigate }">
        <v-toolbar-title @click="navigate" :href="href" style="cursor:pointer">Vue challenges</v-toolbar-title>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  })
});
</script>
