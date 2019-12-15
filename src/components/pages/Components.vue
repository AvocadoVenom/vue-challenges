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
          <v-subheader>
            EXTENDED BUTTON
          </v-subheader>
          <v-list-item>
            <ExtendedButton text="Button" :extended="ebDirection">
              <h4>I'm an extended content!</h4>
            </ExtendedButton>
          </v-list-item>
          <v-list-item
            class="d-flex flex-column justify-start align-stretch mt-2"
          >
            <h4>Options</h4>
            <v-select
              v-model="ebDirection"
              :items="['left', 'right']"
              label="Direction"
            ></v-select>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AnimatedTodoList from "../organisms/AnimatedTodoList.vue";
import ExtendedButton from "../atoms/ExtendedButton.vue";

export default Vue.extend({
  data: () => ({
    ebDirection: "left"
  }),
  components: {
    AnimatedTodoList,
    ExtendedButton
  },
  methods: {
    //
  }
});
</script>