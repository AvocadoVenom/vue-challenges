<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5">
      <div class="d-flex flex-column justify-start align-stretch">
        <h2>Components</h2>
        <v-list dense>
          <!-- ANIMATED TODO LIST -->
          <v-subheader>
            <div
              class="d-flex justify-space-between align-center"
              style="width: 100%;"
            >
              <div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    ANIMATED TODO LIST
                  </template>
                  <span>Click to edit</span>
                </v-tooltip>
              </div>
            </div>
          </v-subheader>
          <v-list-item>
            <AnimatedTodoList />
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AnimatedTodoList from "../organisms/AnimatedTodoList.vue";

export default Vue.extend({
  data: () => ({
    //
  }),
  components: {
    AnimatedTodoList
  },
  methods: {
    //
  }
});
</script>