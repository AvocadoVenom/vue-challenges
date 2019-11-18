<template>
  <v-list nav dense class="d-flex justify-center align-center fill-height">
    <v-list-item-group v-model="challenge" color="primary">
      <v-list-item link :to="item.route" v-for="(item, i) in challenges" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    challenge: 0,
    challenges: [
      { name: "Filters", route: "/filters", icon: "mdi-filter" },
      { name: "Components", route: "/components", icon: "mdi-cube-outline" }
    ]
  })
});
</script>