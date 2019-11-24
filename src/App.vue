<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/" v-slot="{ href, navigate }">
        <v-toolbar-title @click="navigate" :href="href" style="cursor:pointer">Vue challenges</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="teal lighten-2" v-on="on">Menu</v-btn>
          </template>
          <v-list>
            <router-link to="/components" v-slot="{ href, navigate }">
              <v-list-item @click="navigate" :href="href">
                <v-list-item-title>Components</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/filters" v-slot="{ href, navigate }">
              <v-list-item @click="navigate" :href="href">
                <v-list-item-title>Filters</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>
      </div>
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
